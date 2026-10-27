/* Dulidan Studios · 3D-Showroom (Portfolio)
   three.js wird erst geladen, wenn der Showroom in Sichtweite kommt.

   EIGENE MODELLE HINZUFÜGEN:
   1. .glb-Datei nach /assets/models/ legen (z. B. berlingo.glb)
   2. Unten in MODELS einen Eintrag ergänzen:
      { id: "van", name: "Berlingo", tag: "Frosted", src: "/assets/models/berlingo.glb" }
   Das Modell wird automatisch zentriert und auf die Bühne skaliert. */

const MODELS = [
  { id: "d", name: "Dulidan D", tag: "Logo 3D", build: "logo" },
  { id: "globe", name: "Globus", nameEn: "Globe", tag: "Politics AI", build: "globe" },
  { id: "knot", name: "Material-Test", nameEn: "Material test", tag: "Shader", build: "knot" },
  { id: "slot", name: "Dein Produkt?", nameEn: "Your product?", tag: "Platz frei", tagEn: "Slot open", build: "slot" }
  // { id: "van", name: "Berlingo", tag: "Frosted", src: "/assets/models/berlingo.glb" },
];

const stage = document.getElementById("srStage");
if (stage) {
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const COARSE = matchMedia("(pointer: coarse)").matches;
  const en = () => document.documentElement.lang === "en";
  const list = document.getElementById("srList"), info = document.getElementById("srInfo");
  const btn = id => document.getElementById(id);

  MODELS.forEach((m, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<button type="button" aria-pressed="${i === 0}" data-i="${i}"><b></b><span></span></button>`;
    list.appendChild(li);
  });
  const labelList = () => [...list.querySelectorAll("button")].forEach((b, i) => {
    const m = MODELS[i];
    b.querySelector("b").textContent = en() && m.nameEn ? m.nameEn : m.name;
    b.querySelector("span").textContent = en() && m.tagEn ? m.tagEn : m.tag;
  });
  labelList();
  document.addEventListener("langchange", labelList);

  let started = false;
  const io = new IntersectionObserver(es => {
    if (es[0].isIntersecting && !started) { started = true; io.disconnect(); init().catch(err => { console.error(err); document.getElementById("srLoading").textContent = "3D nicht verfügbar"; }); }
  }, { rootMargin: "400px 0px" });
  io.observe(stage);

  async function init() {
    const THREE = await import("three");
    const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
    const { RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js");
    const GEO = window.DD_GEO;

    const canvas = document.getElementById("srCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x06050a, 9, 18);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.set(0, 0.9, 7);
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; controls.enablePan = false;
    controls.minDistance = 2.6; controls.maxDistance = 9;
    controls.autoRotate = !RM; controls.autoRotateSpeed = 1.6;
    controls.target.set(0, 0.1, 0);
    if (COARSE) { canvas.style.touchAction = "pan-y"; controls.enableZoom = false; }
    controls.saveState();

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envStudio = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    /* Bühne */
    const stageGrp = new THREE.Group(); scene.add(stageGrp);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.85, 0.14, 96), new THREE.MeshStandardMaterial({ color: 0x120d1b, metalness: 0.6, roughness: 0.35 }));
    ped.position.y = -1.32; stageGrp.add(ped);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.78, 0.012, 8, 160), new THREE.MeshBasicMaterial({ color: 0xff4fd8 }));
    ring.rotation.x = Math.PI / 2; ring.position.y = -1.24; stageGrp.add(ring);
    const grid = new THREE.GridHelper(14, 28, 0x8122b5, 0x2a1640);
    grid.position.y = -1.4; grid.material.transparent = true; grid.material.opacity = 0.35; stageGrp.add(grid);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.7, 3.2, 64, 1, true), new THREE.MeshBasicMaterial({ color: 0xc020b8, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    beam.position.y = 0.3; stageGrp.add(beam);

    /* Licht-Presets */
    const lights = new THREE.Group(); scene.add(lights);
    const PRESETS = [
      { de: "Studio", env: envStudio, add: () => { const d = new THREE.DirectionalLight(0xffffff, 1.6); d.position.set(3, 5, 4); return [d, new THREE.AmbientLight(0xffffff, 0.2)]; } },
      { de: "Neon", env: null, add: () => { const a = new THREE.PointLight(0xff2ad4, 40, 12); a.position.set(-3, 2, 2); const b = new THREE.PointLight(0x6a3bff, 40, 12); b.position.set(3, -1, 2); const c = new THREE.PointLight(0xffffff, 8, 10); c.position.set(0, 4, -3); return [a, b, c, new THREE.AmbientLight(0x6a2b8f, 0.4)]; } },
      { de: "Sunset", env: null, add: () => { const h = new THREE.HemisphereLight(0xffb36b, 0x2a0d3a, 1.4); const d = new THREE.DirectionalLight(0xff8a4c, 2.2); d.position.set(-4, 2, 3); return [h, d]; } }
    ];
    let preset = 0;
    function applyPreset(i) {
      preset = i; lights.clear(); PRESETS[i].add().forEach(l => lights.add(l));
      scene.environment = PRESETS[i].env;
      btn("srLight").textContent = (en() ? "Light: " : "Licht: ") + PRESETS[i].de;
    }
    applyPreset(0);

    /* Modelle */
    const builders = {
      logo() {
        const S = (pts) => { const s = new THREE.Shape(); pts.forEach(([x, y], i) => { const X = (x - 250) / 190, Y = -(y - 257) / 190; i ? s.lineTo(X, Y) : s.moveTo(X, Y); }); return s; };
        const bowl = new THREE.Shape();
        const P = (x, y) => [(x - 250) / 190, -(y - 257) / 190];
        bowl.moveTo(...P(165, 75)); bowl.lineTo(...P(290, 75));
        bowl.quadraticCurveTo(...P(450, 75), ...P(450, 257)); bowl.quadraticCurveTo(...P(450, 440), ...P(290, 440));
        bowl.lineTo(...P(52, 440)); bowl.lineTo(...P(52, 410)); bowl.lineTo(...P(185, 335)); bowl.lineTo(...P(290, 335));
        bowl.quadraticCurveTo(...P(345, 335), ...P(345, 257)); bowl.quadraticCurveTo(...P(345, 178), ...P(290, 178));
        bowl.lineTo(...P(165, 178)); bowl.lineTo(...P(165, 75));
        const shapes = [bowl, S([[52, 75], [140, 75], [140, 192], [52, 240], [52, 75]]), S([[52, 272], [160, 210], [160, 318], [52, 380], [52, 272]])];
        const geo = new THREE.ExtrudeGeometry(shapes, { depth: 0.38, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.03, bevelSegments: 6, curveSegments: 48 });
        geo.center();
        const front = new THREE.MeshPhysicalMaterial({ color: 0xc020b8, metalness: 0.35, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.1, emissive: 0x3a0638, emissiveIntensity: 0.4 });
        const side = new THREE.MeshPhysicalMaterial({ color: 0x5b1782, metalness: 0.7, roughness: 0.3 });
        const g = new THREE.Group(); g.add(new THREE.Mesh(geo, [front, side])); return g;
      },
      globe() {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.SphereGeometry(1.05, 64, 32), new THREE.MeshPhysicalMaterial({ color: 0x140b20, roughness: 0.5, metalness: 0.2, transparent: true, opacity: 0.92 })));
        g.add(new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(1.06, 24, 12)), new THREE.LineBasicMaterial({ color: 0x8122b5, transparent: true, opacity: 0.25 })));
        if (GEO) {
          const MB = Uint8Array.from(atob(GEO.m), c => c.charCodeAt(0)), pos = [];
          for (let i = 0; i < GEO.w * GEO.h; i++) {
            if (!((MB[i >> 3] >> (i & 7)) & 1)) continue;
            const lo = (-180 + (i % GEO.w) * 2 + 1) * Math.PI / 180, la = (90 - Math.floor(i / GEO.w) * 2 - 1) * Math.PI / 180, r = 1.075;
            pos.push(r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo));
          }
          const pg = new THREE.BufferGeometry(); pg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
          g.add(new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xff9cec, size: 0.022, sizeAttenuation: true })));
        }
        const atm = new THREE.Mesh(new THREE.SphereGeometry(1.25, 48, 24), new THREE.MeshBasicMaterial({ color: 0xc020b8, transparent: true, opacity: 0.08, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false }));
        g.add(atm);
        [[52.5, 13.4], [39.9, 116.4], [38.9, -77], [55.75, 37.6]].forEach(([la, lo], i) => {
          const a = la * Math.PI / 180, b = lo * Math.PI / 180, r = 1.09;
          const m = new THREE.Mesh(new THREE.SphereGeometry(i ? 0.022 : 0.03, 12, 8), new THREE.MeshBasicMaterial({ color: i ? 0xff4fd8 : 0xffffff }));
          m.position.set(r * Math.cos(a) * Math.sin(b), r * Math.sin(a), r * Math.cos(a) * Math.cos(b)); g.add(m);
        });
        g.rotation.x = 0.35; return g;
      },
      knot() {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.TorusKnotGeometry(0.72, 0.24, 300, 40), new THREE.MeshPhysicalMaterial({ color: 0xc020b8, metalness: 0.9, roughness: 0.12, iridescence: 1, iridescenceIOR: 1.6, clearcoat: 1 })));
        return g;
      },
      slot() {
        const g = new THREE.Group();
        const ico = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.95, 1)), new THREE.LineDashedMaterial({ color: 0xff7ae6, dashSize: 0.06, gapSize: 0.05 }));
        ico.computeLineDistances(); g.add(ico);
        const c = document.createElement("canvas"); c.width = 512; c.height = 128;
        const x = c.getContext("2d"); x.fillStyle = "#ff9cec"; x.font = "600 46px 'JetBrains Mono', monospace"; x.textAlign = "center"; x.fillText(en() ? "YOUR MODEL" : "DEIN MODELL", 256, 58); x.font = "400 30px 'JetBrains Mono', monospace"; x.fillStyle = "#a49cb6"; x.fillText(en() ? "goes here" : "kommt hierhin", 256, 104);
        const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })); sp.scale.set(1.9, 0.48, 1); g.add(sp);
        g.userData.spin = true; return g;
      }
    };

    let current = null, currentIdx = -1, wire = false, intro = 1;
    function stats(obj) {
      let v = 0, t = 0;
      obj.traverse(o => { if (o.isMesh && o.geometry) { const gg = o.geometry; v += gg.attributes.position.count; t += gg.index ? gg.index.count / 3 : gg.attributes.position.count / 3; } else if ((o.isPoints || o.isLineSegments) && o.geometry) v += o.geometry.attributes.position.count; });
      return { v, t: Math.round(t) };
    }
    function fit(obj) {
      const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
      const s = 2.2 / Math.max(size.x, size.y, size.z); obj.scale.setScalar(s); obj.position.sub(c.multiplyScalar(s));
    }
    async function show(i) {
      if (i === currentIdx) return;
      currentIdx = i;
      [...list.querySelectorAll("button")].forEach((b, k) => b.setAttribute("aria-pressed", k === i));
      const m = MODELS[i];
      let obj;
      if (m.src) {
        const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
        const gltf = await new GLTFLoader().loadAsync(m.src);
        obj = new THREE.Group(); const inner = gltf.scene; fit(inner); obj.add(inner);
      } else obj = builders[m.build]();
      if (current) scene.remove(current);
      current = obj; scene.add(obj); intro = 0; setWire(wire);
      const s = stats(obj);
      info.innerHTML = `${en() ? "Model" : "Modell"} <b></b><br>${en() ? "Vertices" : "Vertices"} <b>${s.v.toLocaleString("de-DE")}</b><br>${en() ? "Triangles" : "Dreiecke"} <b>${s.t.toLocaleString("de-DE")}</b><br>Renderer <b>WebGL · three.js</b>`;
      info.querySelector("b").textContent = en() && m.nameEn ? m.nameEn : m.name;
    }
    function setWire(on) {
      wire = on; btn("srWire").setAttribute("aria-pressed", on);
      current && current.traverse(o => { if (o.isMesh) (Array.isArray(o.material) ? o.material : [o.material]).forEach(mt => { if (mt.side !== THREE.BackSide) mt.wireframe = on; }); });
    }
    list.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(+b.dataset.i); });
    btn("srAuto").addEventListener("click", () => { controls.autoRotate = !controls.autoRotate; btn("srAuto").setAttribute("aria-pressed", controls.autoRotate); });
    btn("srAuto").setAttribute("aria-pressed", controls.autoRotate);
    btn("srWire").addEventListener("click", () => setWire(!wire));
    btn("srLight").addEventListener("click", () => applyPreset((preset + 1) % PRESETS.length));
    btn("srReset").addEventListener("click", () => controls.reset());
    btn("srFull").addEventListener("click", () => { document.fullscreenElement ? document.exitFullscreen() : stage.requestFullscreen && stage.requestFullscreen(); });
    document.addEventListener("langchange", () => { applyPreset(preset); const i = currentIdx; currentIdx = -1; show(i); });

    function resize() {
      const w = stage.clientWidth, h = stage.clientHeight;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      camera.position.setLength(w < 760 ? 8.4 : 7); camera.updateProjectionMatrix();
    }
    resize(); addEventListener("resize", resize); document.addEventListener("fullscreenchange", resize);
    await show(0);
    document.getElementById("srLoading").classList.add("done");

    let run = true;
    new IntersectionObserver(es => { run = es[0].isIntersecting; if (run) requestAnimationFrame(loop); }).observe(stage);
    const clock = new THREE.Clock();
    function loop() {
      if (!run) return;
      const t = clock.getElapsedTime();
      intro = Math.min(1, intro + 0.025);
      if (current) {
        const k = 1 - Math.pow(1 - intro, 3);
        current.scale.setScalar(k * (current.userData.base || 1));
        current.rotation.y = (current.userData.spin ? t * 0.6 : 0) + (1 - k) * 3;
        current.position.y = Math.sin(t * 1.2) * 0.06;
      }
      ring.material.color.setHSL(0.86 + Math.sin(t) * 0.03, 1, 0.62);
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}

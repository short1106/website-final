/* Dulidan Studios · main.js
   Vanilla JS, keine Abhängigkeiten. Module als IIFE-Blöcke, Reihenfolge = Seitenreihenfolge. */
(() => {
"use strict";

/* ===== Konfiguration ===== */
const CONFIG = {
  linkedin: "", // TODO: LinkedIn-URL eintragen
  discord: "",  // TODO: Discord-Einladungslink eintragen
  email: "info@dulidan-studios.com",
  zimmerei: "https://zimmerei-bsp.dulidan-studios.com",
  github: "https://github.com/short1106"
};

/* Weltkarte 2°-Raster (Natural Earth via world-atlas, gemeinfrei) */
const GEO={w:180,h:90,m:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAPgP8DAAAAAAAAAAAAAAAAAAAAAACM+/3//wcAAAAgBQACAAAAAAAAAAAAhPfw//8PAPAAAAAAwAMAAAAAAAAAwADEw////wEABAAAAADgAAAAAAAAAABQQT8A/v8PAAAAAAwA/D8AOAEAAAAAcBHvD8D/XwAAAAAgAP7/PwMAABCAAQD4w/4H8P8FAAAAAIJ7//9//xuAAP9ff2479QD/HwAA+A+EN/7//////3/g/////x88+B8AAOD/1//7////////jP////+/+AEfgAcAn9f//////////w/w/////wEs4AEAAHz+////////////gL////8HeAAcAADA5///////////9ADgAf7/f4AnAAAAEHb8////////H0AAAAhA//8f8AcAAIAB4////////38ABwAAAOj//5//AQAAHAT+////////B3AAAAAA/v//+z8AAGDz//////////8CAQAAAMD/////AwAA8P//////////LwAAAAAA4P///2MAAAD+//////////8AAAAAAAD///8/CAAA4P//ff//////JwAAAAAA8P///wYAAAD+/unz/////z8AAAAAAAD///8HAAAA/pgPPP//////MQAAAAAA8P//HwAAAMBD9v7n/////wcAAAAAAAD///8AAAAAPkD6P/7///8hEAAAAAAA4P//DwAAAIDBov/n////f8YAAAAAAAD8//8AAAAA+AdE//////8jDwAAAAAAgP//AwAAAMD/APD/////PxgAAAAAAADw/x8AAAAA/n/v//////8HAAAAAAAAAPwDAgAAAOD///v7////fwAAAAAAAACgHyAAAACA//9/f/7///8DAAAAAAAAAPQBAAAAAPj//+cP+P//HwAAAAAAAAAAHjAAAADA/////g////8EAAAAAAAAAOBhCAAAAPz//99/4B//AAAAAAAAAAAAPAMMAADA////+Qf44BcAAAAAAAAAAAA/AAAAAPz//78fgAf6QAAAAAAAAAAAAA8AAADg////ewA4gA8EAAAAAAAAAADAAAAAAPz//38BgAP4QQAAAAAAAAAAAAgOAADA////zwAwgAwQAAAAAAAAAAAA9Q8AAPj///8HAAFIAAAAAAAAAAAAAID/AQAA////fwBAAAAQAAAAAAAAAAAA+P8AAGDg//8DAAA0GAAAAAAAAAAAAID/HwAAAPj/HwAAgMIBAAAAAAAAAAAA/P8BAACA//8AAAA4XwAAAAAAAAAAAMD/fwAAAPz/BwAAAOOBAQAAAAAAAAAA/P8/AACA/z8AAABgLtQBAAAAAAAAAOD//w8AAPD/AwAAAAQAeAAAAAAAAAAA/P//AQAA/z8AAACAB4APAQAAAAAAAID//w8AAPD/AwAAAAARsEAAAAAAAAAA+P9/AAAA/j8AAAAAAAAAAAAAAAAAAAD//wcAAPD/QwAAAACAIwAAAAAAAAAA8P8/AAAA/z8EAAAAAD4GIAAAAAAAAAD8/wMAAPD/cQAAAAD4fwAAAAAAAAAAgP8/AAAA/w8HAAAAgP8HAAAAAAAAAAD4/wMAAOD/MAAAAAD//wEBAAAAAAAAgP8PAAAA/g8DAAAA+P8fAAAAAAAAAAD4PwAAAOB/MAAAAID//wMAAAAAAAAAgP8DAAAA/AMAAAAA+P9/AAAAAAAAAAD8HwAAAMA/AAAAAID//wcAAAAAAAAAwP8AAAAA+AEAAAAA8P9/AAAAAAAAAAD8DwAAAIAPAAAAAAAP/gMAAAAAAAAAwB8AAAAAAAAAAAAAEMAfAAAAAAAAAAD+AwAAAAAAAAAAAAAA8AEgAAAAAAAA4AcAAAAAAAAAAAAAAAAAAAYAAAAAAABeAAAAAAAAAAAAAAAAwAAwAAAAAAAAwAMAAAAAAAAAAAAAAAAIgAEAAAAAAAAeAAAAAAAAAAAAAAAAAAAMAAAAAAAA4AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAABAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",c:{"DEU":"2km.3,2pl.4,2um.3","POL":"2kp.5,2pq.4","FRA":"2uh.5,2zh.4,34h.4,39h.3,5vr,60r","GBR":"25g,2af.2,2fe.3,2kg.2,2pg.3","USA":"19b.2,1e8.b,1j9.a,1o7.c,1t8.b,1y7.7,1yf.4,239.4,23l.2,28b,28m,2dn,2t6,2xs.j,2yj,32s.l,33h.3,37s.l,38e.5,3cs.p,3hs.o,3mt.n,3ru.m,3wv.j,421.c,474.2,47d,4c4,4cd","LTU":"2ft.2","LVA":"2at.3","EST":"25u.2","RUS":"n9,nc,ne,nt,su.4,xx.3,12a.2,12q.c,13f.3,13k,179,17l.l,188.2,190,1c9,1cf.3,1cj.4,1co.n,1dc.a,1dn.2,1dz,1gw.4,1h6,1hb.4,1hg.2,1hl.1i,1lx.6,1m4,1m6.c,1mj.1h,1o2.2,1qx.2,1r0,1r2.1y,1vy.22,20w.1s,22q,22s.4,25w.1l,27q,2aw.1j,2co.3,2fx.j,2gh.y,2ho.3,2ky.f,2ll.l,2m9.7,2mh,2mo,2q0.7,2q9,2qb.2,2qn.8,2qx.9,2ra.6,2rh,2v2.3,2wb.5,302.4,31d.2,31h,34z,351.5,36c.2,3a4.2,3bc","BLR":"2fv.2,2ku.4","CHN":"2m6.3,2r6.4,2vp,2w4.7,30n,30p.2,316.7,35m.7,363.9,3am.8,3b1.b,3fk.p,3kj.m,3pj.o,3ul.l,3zm.k,44m.l,49o.5,49u.d,4ev.b,4jv.a,4ow.2,4oz.5,4z0","TUR":"3ev,3ex.7,3jv.9,3ow.6"}};

/* ===== Helfer ===== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const sleep = ms => new Promise(r => setTimeout(r, RM ? 0 : ms));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
let lang = root.lang === "en" ? "en" : "de";
const T = (de, en) => (lang === "en" ? en : de);
const onVisible = (el, fn, opts = {}) => {
  const io = new IntersectionObserver(es => es.forEach(e => fn(e.isIntersecting, e)), opts);
  io.observe(el);
  return io;
};

/* ===== Toast ===== */
const toastEl = $("#toast");
let toastT;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("on");
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove("on"), 2800);
}

/* ===== Sprache (DE/EN) ===== */
function applyLang(l) {
  lang = l;
  root.lang = l;
  $$("[data-en]").forEach(el => {
    if (el.dataset.de === undefined) el.dataset.de = el.innerHTML;
    el.innerHTML = l === "en" ? el.dataset.en : el.dataset.de;
  });
  $$("[data-en-ph]").forEach(el => {
    if (el.dataset.dePh === undefined) el.dataset.dePh = el.placeholder;
    el.placeholder = l === "en" ? el.dataset.enPh : el.dataset.dePh;
  });
  $$("#langBtn [data-l]").forEach(s => s.classList.toggle("on", s.dataset.l === l));
  store.set("dd_lang", l);
  document.dispatchEvent(new Event("langchange"));
}
$("#langBtn").addEventListener("click", () => {
  applyLang(lang === "de" ? "en" : "de");
  toast(T("Sprache: Deutsch", "Language: English"));
});
applyLang(lang);

/* ===== Jahr ===== */
$$(".js-year").forEach(e => (e.textContent = new Date().getFullYear()));

/* ===== Kontakt-Kanäle aus CONFIG ===== */
if (CONFIG.linkedin) { const a = $("#chLinkedin"); a.href = CONFIG.linkedin; a.hidden = false; }
if (CONFIG.discord) { const a = $("#chDiscord"); a.href = CONFIG.discord; a.hidden = false; }

/* ===== Boot-Sequenz ===== */
const boot = (() => {
  const el = $("#boot"), lines = $("#bootLines"), bar = $("#bootBar"), pct = $("#bootPct");
  let running = false, skip = false;
  const L = () => [
    ["hl", T("Initialisiere Dulidan Studios …", "Initialising Dulidan Studios …")],
    ["", T("Lade Kreativ-Kern", "Loading creative core")],
    ["", T("Kalibriere Pixel", "Calibrating pixels")],
    ["", T("Koffein-Level: kritisch, aber stabil", "Caffeine level: critical but stable")],
    ["", T("Verbinde Duisburg ⇄ Öhringen", "Linking Duisburg ⇄ Öhringen")],
    ["", T("April wird geweckt", "Waking up April")],
    ["hl", T("System bereit.", "System ready.")]
  ];
  function finish() {
    if (!running) return;
    running = false;
    store.set("dd_booted", "1");
    el.classList.add("done");
    root.classList.remove("booting");
    document.removeEventListener("keydown", key);
    setTimeout(() => { el.hidden = true; el.classList.remove("done"); }, 650);
    document.dispatchEvent(new Event("booted"));
  }
  const key = e => { if (["Enter", "Escape", " "].includes(e.key)) { e.preventDefault(); skip = true; finish(); } };
  async function run() {
    running = true; skip = false;
    el.hidden = false; root.classList.add("booting");
    lines.innerHTML = ""; bar.style.width = "0";
    document.addEventListener("keydown", key);
    $("#bootSkip").focus({ preventScroll: true });
    const ls = L();
    for (let i = 0; i < ls.length && !skip; i++) {
      const [cls, txt] = ls[i];
      const d = document.createElement("div");
      d.className = cls;
      d.textContent = (i && i < ls.length - 1 ? "  " : "> ") + txt;
      lines.appendChild(d);
      if (i && i < ls.length - 1) {
        await sleep(160 + Math.random() * 180);
        if (skip) break;
        const ok = document.createElement("span");
        ok.className = "ok"; ok.textContent = "  [OK]";
        d.appendChild(ok);
      }
      const p = Math.round(((i + 1) / ls.length) * 100);
      bar.style.width = p + "%"; pct.textContent = p + "%";
      await sleep(140);
    }
    await sleep(420);
    finish();
  }
  $("#bootSkip").addEventListener("click", () => { skip = true; finish(); });
  return { run, get running() { return running; } };
})();

function startPage() { root.classList.add("ready"); }
if (root.classList.contains("booting")) {
  boot.run();
  document.addEventListener("booted", startPage, { once: true });
} else {
  requestAnimationFrame(startPage);
  setTimeout(() => document.dispatchEvent(new Event("booted")), 300);
}

/* ===== Navigation ===== */
const nav = $("#nav"), burger = $("#burger"), mmenu = $("#mmenu");
burger.addEventListener("click", () => {
  const o = mmenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", o);
  document.body.classList.toggle("no-scroll", o);
});
mmenu.addEventListener("click", e => {
  if (e.target.closest("a")) {
    mmenu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }
});

/* ===== HUD: Fortschritt, Sektion, Uhr ===== */
const sections = $$("main section[data-sec]");
const hud = { prog: $("#progress"), idx: $("#hudIdx"), bar: $("#hudBar"), name: $("#hudName"), pct: $("#hudPct") };
let curSec = -1;
function onScroll() {
  const max = (root.scrollHeight - innerHeight) || 1;
  const p = clamp(scrollY / max, 0, 1);
  hud.prog.style.setProperty("--p", p);
  hud.bar.style.setProperty("--p", p);
  hud.pct.textContent = String(Math.round(p * 100)).padStart(3, "0") + "%";
  nav.classList.toggle("scrolled", scrollY > 20);
  root.classList.toggle("past-hero", scrollY > innerHeight * 0.6);
  let i = 0;
  sections.forEach((s, k) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) i = k; });
  if (i !== curSec) {
    curSec = i;
    const s = sections[i];
    hud.idx.textContent = String(i).padStart(2, "0");
    hud.name.textContent = lang === "en" && s.dataset.secEn ? s.dataset.secEn : s.dataset.sec;
    $$(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + s.id));
    document.dispatchEvent(new CustomEvent("section", { detail: s.id }));
  }
}
addEventListener("scroll", onScroll, { passive: true });
document.addEventListener("langchange", () => { curSec = -1; onScroll(); });
onScroll();

const clockFmt = (o) => new Intl.DateTimeFormat("de-DE", Object.assign({ timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit" }, o));
const fmtS = clockFmt({ second: "2-digit" }), fmtM = clockFmt({});
function tick() { $("#hudClock").textContent = fmtS.format(new Date()); $("#heroClock").textContent = fmtM.format(new Date()); }
tick(); setInterval(tick, 1000);

/* ===== Reveals ===== */
const rio = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
$$(".rv,.rv-mask").forEach(el => rio.observe(el));

/* ===== Cursor + magnetische Buttons ===== */
const pointer = { x: innerWidth / 2, y: innerHeight / 2, nx: 0, ny: 0 };
addEventListener("pointermove", e => {
  pointer.x = e.clientX; pointer.y = e.clientY;
  pointer.nx = e.clientX / innerWidth * 2 - 1; pointer.ny = e.clientY / innerHeight * 2 - 1;
}, { passive: true });

if (FINE) {
  root.classList.add("has-cursor");
  const c = $("#cursor"), d = $("#cursorDot"), lbl = $("#cursorLabel");
  c.style.opacity = d.style.opacity = 0;
  addEventListener("pointermove", () => { c.style.opacity = d.style.opacity = ""; }, { once: true });
  let cx = pointer.x, cy = pointer.y;
  (function loop() {
    cx = lerp(cx, pointer.x, RM ? 1 : 0.2); cy = lerp(cy, pointer.y, RM ? 1 : 0.2);
    c.style.transform = `translate(${cx}px,${cy}px)`;
    d.style.transform = `translate(${pointer.x}px,${pointer.y}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", e => {
    const t = e.target.closest("a,button,[data-cursor],summary,label");
    const txt = e.target.closest("input,textarea");
    c.classList.toggle("is-hover", !!t && !txt);
    c.classList.toggle("is-text", !!txt);
    lbl.textContent = t && t.dataset.cursor ? t.dataset.cursor : "";
  });
  document.addEventListener("mouseleave", () => { c.style.opacity = 0; d.style.opacity = 0; });
  document.addEventListener("mouseenter", () => { c.style.opacity = 1; d.style.opacity = 1; });

  if (!RM) $$(".mag").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.3, y = (e.clientY - r.top - r.height / 2) * 0.4;
      b.style.transform = `translate(${x}px,${y}px)`;
    });
    b.addEventListener("pointerleave", () => {
      b.style.transition = "transform .5s cubic-bezier(.2,.8,.2,1),border-color .25s,color .25s";
      b.style.transform = "";
      setTimeout(() => (b.style.transition = ""), 500);
    });
  });
}

/* ===== Service-Karten: Spotlight + Tilt ===== */
$$(".tilt").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", x * 100 + "%");
    card.style.setProperty("--my", y * 100 + "%");
    if (FINE && !RM) card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 6}deg)`;
  });
  card.addEventListener("pointerleave", () => (card.style.transform = ""));
});
$$(".tilt-b").forEach(b => {
  b.addEventListener("pointermove", e => {
    if (!FINE || RM) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 8 + "deg");
    b.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 6 + "deg");
  });
  b.addEventListener("pointerleave", () => { b.style.setProperty("--ry", "0deg"); b.style.setProperty("--rx", "0deg"); });
});

/* ===== Parallax ===== */
const para = $$("[data-speed]");
if (!RM && para.length) {
  (function p() {
    para.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      const c = r.top + r.height / 2 - innerHeight / 2;
      el.style.transform = `translateY(${c * parseFloat(el.dataset.speed)}px)`;
    });
    requestAnimationFrame(p);
  })();
}

/* ===== Hero: WebGL-Partikel-Logo ===== */
const hero = (() => {
  const host = $("#heroCanvas"), fallback = $("#heroFallback");
  const api = { pink: 0 };
  if (RM) return api;
  const cv = document.createElement("canvas");
  const gl = cv.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
  if (!gl) return api;

  const VS = `
    attribute vec3 aT; attribute vec3 aS; attribute vec3 aC; attribute float aR;
    uniform float uTime, uForm, uScroll, uAspect, uScale, uPx, uRotX, uRotY, uPink, uAlpha;
    uniform vec2 uOff, uMouse;
    varying vec3 vC; varying float vA;
    void main(){
      float k = clamp(uForm*1.6 - aR*0.6, 0.0, 1.0);
      k = k*k*(3.0-2.0*k);
      vec3 p = mix(aS, aT, k);
      p += vec3(sin(uTime*1.1+aR*40.0), cos(uTime*0.9+aR*31.0), sin(uTime*0.7+aR*23.0)) * (0.012 + uScroll*0.05);
      p += normalize(aS + 0.0001) * uScroll * (0.4 + aR) * 1.4;
      float cy = cos(uRotY), sy = sin(uRotY), cx = cos(uRotX), sx = sin(uRotX);
      p = vec3(p.x*cy + p.z*sy, p.y, -p.x*sy + p.z*cy);
      p = vec3(p.x, p.y*cx - p.z*sx, p.y*sx + p.z*cx);
      float persp = 2.4 / (2.4 - p.z);
      vec2 s = p.xy * persp * uScale + uOff;
      vec2 d = s - uMouse;
      float f = exp(-dot(d,d) * 22.0);
      s += normalize(d + 0.0001) * f * 0.16;
      gl_Position = vec4(s.x / uAspect, s.y, 0.0, 1.0);
      gl_PointSize = uPx * (0.7 + aR * 1.3) * persp * (1.0 + f * 1.5);
      vC = mix(aC, vec3(1.0, 0.48, 0.9), uPink * 0.7) + f * 0.4;
      vA = uAlpha * (0.75 + aR * 0.25) * (1.0 - clamp(uScroll * 0.7, 0.0, 0.85));
    }`;
  const FS = `
    precision mediump float; varying vec3 vC; varying float vA;
    void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d); gl_FragColor = vec4(vC, a * vA); }`;
  function sh(t, src) { const s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s); return s; }
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return api;
  gl.useProgram(pr);
  const U = {};
  ["uTime", "uForm", "uScroll", "uAspect", "uScale", "uPx", "uRotX", "uRotY", "uOff", "uMouse", "uPink", "uAlpha"].forEach(n => (U[n] = gl.getUniformLocation(pr, n)));

  const img = new Image();
  img.src = "/assets/img/logo-mark.webp";
  let N = 0, W = 0, H = 0, aspect = 1, run = false, t0 = 0, mobile = false;
  const st = { rx: 0, ry: 0, mx: 9, my: 9, scroll: 0 };

  img.decode().then(() => {
    mobile = innerWidth < 760;
    const S = mobile ? 150 : 210, step = 2;
    const oc = document.createElement("canvas"); oc.width = oc.height = S;
    const ox = oc.getContext("2d"); ox.drawImage(img, 0, 0, S, S);
    const px = ox.getImageData(0, 0, S, S).data;
    const T_ = [], S_ = [], C_ = [], R_ = [];
    const rnd = () => Math.random() * 2 - 1;
    function sphere(r) { const u = Math.random() * 2 - 1, th = Math.random() * 6.283, s = Math.sqrt(1 - u * u); const rr = r * Math.cbrt(Math.random()); return [rr * s * Math.cos(th), rr * u, rr * s * Math.sin(th)]; }
    for (let y = 0; y < S; y += step) for (let x = 0; x < S; x += step) {
      const i = (y * S + x) * 4;
      if (px[i + 3] < 150) continue;
      T_.push((x / S - 0.5) * 2, -(y / S - 0.5) * 2, rnd() * 0.05);
      S_.push(...sphere(2.6));
      C_.push(Math.min(1, px[i] / 255 * 1.35 + 0.08), px[i + 1] / 255 * 1.2 + 0.04, Math.min(1, px[i + 2] / 255 * 1.3 + 0.08));
      R_.push(Math.random());
    }
    const stars = mobile ? 260 : 700;
    for (let k = 0; k < stars; k++) {
      const p = sphere(3.2);
      T_.push(...p); S_.push(...p);
      C_.push(0.55, 0.3, 0.75); R_.push(Math.random() * 0.5);
    }
    N = R_.length;
    function buf(name, data, size) {
      const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      const l = gl.getAttribLocation(pr, name); gl.enableVertexAttribArray(l);
      gl.vertexAttribPointer(l, size, gl.FLOAT, false, 0, 0);
    }
    buf("aT", T_, 3); buf("aS", S_, 3); buf("aC", C_, 3); buf("aR", R_, 1);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    host.appendChild(cv);
    size();
    addEventListener("resize", size);
    onVisible(host, v => { if (v && !run) { run = true; requestAnimationFrame(frame); } else if (!v) run = false; });
    const go = () => { t0 = performance.now(); fallback.style.transition = "opacity .8s"; fallback.style.opacity = 0; };
    if (root.classList.contains("booting")) document.addEventListener("booted", go, { once: true }); else go();
  }).catch(() => {});

  function size() {
    const r = host.getBoundingClientRect();
    W = cv.width = Math.round(r.width * DPR); H = cv.height = Math.round(r.height * DPR);
    gl.viewport(0, 0, W, H);
    aspect = W / H;
    mobile = innerWidth < 960;
    gl.uniform1f(U.uAspect, aspect);
    if (mobile) { gl.uniform2f(U.uOff, 0.3 * aspect, -0.2); gl.uniform1f(U.uScale, Math.min(0.62, 0.42 * aspect + 0.2)); }
    else { gl.uniform2f(U.uOff, aspect * 0.52, 0.02); gl.uniform1f(U.uScale, 0.6); }
    gl.uniform1f(U.uPx, (mobile ? 2.6 : 3.4) * DPR);
    gl.uniform1f(U.uAlpha, mobile ? 0.5 : 1);
  }
  function frame(now) {
    if (!run) return;
    const t = (now - (t0 || now)) / 1000;
    const form = t0 ? clamp(t / 2.4, 0, 1) : 0;
    st.scroll = lerp(st.scroll, clamp(scrollY / innerHeight, 0, 1.4), 0.12);
    st.ry = lerp(st.ry, pointer.nx * 0.45 + Math.sin(now / 3200) * 0.18 + st.scroll * 1.4, 0.06);
    st.rx = lerp(st.rx, pointer.ny * 0.28, 0.06);
    const mx = pointer.nx * aspect, my = -pointer.ny;
    st.mx = lerp(st.mx, mx, 0.25); st.my = lerp(st.my, my, 0.25);
    gl.uniform1f(U.uTime, now / 1000);
    gl.uniform1f(U.uForm, form);
    gl.uniform1f(U.uScroll, st.scroll);
    gl.uniform1f(U.uRotX, st.rx);
    gl.uniform1f(U.uRotY, st.ry);
    gl.uniform2f(U.uMouse, FINE ? st.mx : 99, FINE ? st.my : 99);
    gl.uniform1f(U.uPink, api.pink);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, N);
    requestAnimationFrame(frame);
  }
  return api;
})();

/* ===== Politics AI Demo: Mini-Globus, Feed, Kaskaden ===== */
(() => {
  const cv = $("#miniGlobe"); if (!cv) return;
  const g = cv.getContext("2d"), S = 220;
  cv.width = cv.height = S;
  const MB = Uint8Array.from(atob(GEO.m), c => c.charCodeAt(0));
  const pts = [];
  const v3 = (la, lo) => { la *= Math.PI / 180; lo *= Math.PI / 180; return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)]; };
  for (let i = 0; i < GEO.w * GEO.h; i++) {
    if (!((MB[i >> 3] >> (i & 7)) & 1)) continue;
    const lo = -180 + (i % GEO.w) * 2 + 1, la = 90 - Math.floor(i / GEO.w) * 2 - 1;
    if (Math.random() < 0.55) pts.push(v3(la, lo));
  }
  const hot = [[39.9, 116.4], [52.2, 21], [38.9, -77], [55.75, 37.6], [39.9, 32.9], [52.5, 13.4]].map(([a, b]) => v3(a, b));
  let rot = -0.3, run = false;
  const tilt = 0.45, ct = Math.cos(tilt), stt = Math.sin(tilt), R = S * 0.44;
  function frame(t) {
    if (!run) return;
    if (!RM) rot += 0.004;
    const cr = Math.cos(rot), sr = Math.sin(rot);
    g.clearRect(0, 0, S, S);
    g.strokeStyle = "rgba(192,32,184,.4)"; g.beginPath(); g.arc(S / 2, S / 2, R, 0, 7); g.stroke();
    const P = p => { const x = p[0] * cr + p[2] * sr, z = -p[0] * sr + p[2] * cr; return [S / 2 + x * R, S / 2 - (p[1] * ct - z * stt) * R, p[1] * stt + z * ct]; };
    for (const p of pts) { const q = P(p); if (q[2] < 0) continue; g.fillStyle = `rgba(230,200,245,${0.25 + q[2] * 0.6})`; g.fillRect(q[0], q[1], 1.6, 1.6); }
    hot.forEach((h, i) => {
      const q = P(h); if (q[2] < 0.05) return;
      const ph = ((t / 1000 + i * 0.4) % 1.5) / 1.5;
      g.strokeStyle = `rgba(255,122,230,${1 - ph})`; g.beginPath(); g.arc(q[0], q[1], 2 + ph * 10, 0, 7); g.stroke();
      g.fillStyle = i === 5 ? "#fff" : "#ff7ae6"; g.fillRect(q[0] - 1.5, q[1] - 1.5, 3, 3);
    });
    requestAnimationFrame(frame);
  }
  onVisible(cv, v => { if (v && !run) { run = true; requestAnimationFrame(frame); } else if (!v) run = false; });

  const feed = $("#miniFeed");
  const F = () => [
    ["14:02", T("PEKING: Warnung an Taipeh", "BEIJING: warning to Taipei")],
    ["14:07", T("WARSCHAU: Anfrage nach Truppenpräsenz", "WARSAW: requests troop presence")],
    ["14:11", T("WASHINGTON: Handelszölle angekündigt", "WASHINGTON: tariffs announced")],
    ["14:19", T("MOSKAU: Botschafter einbestellt", "MOSCOW: ambassador summoned")],
    ["14:26", T("ANKARA: Vermittlung angeboten", "ANKARA: offers mediation")]
  ];
  let fi = 0;
  function pushFeed() {
    const [t, m] = F()[fi++ % 5];
    const d = document.createElement("div");
    d.innerHTML = `<span>${t}</span>`; d.append(m);
    feed.appendChild(d);
    while (feed.children.length > 4) feed.firstElementChild.remove();
  }
  for (let k = 0; k < 4; k++) pushFeed();
  setInterval(pushFeed, 2600);

  /* Kaskaden-Simulation mit Beispielwerten */
  const KEYS = [["eco", "Wirtschaft", "Economy"], ["mil", "Militär", "Military"], ["dip", "Diplomatie", "Diplomacy"], ["pop", "Bevölkerung", "Population"]];
  const val = { eco: 64, mil: 52, dip: 58, pop: 71 };
  const box = $("#paiStats"), log = $("#paiLog"), round = $("#paiRound");
  let r = 1, busy = false;
  function render(changed = {}) {
    box.innerHTML = KEYS.map(([k, de, en]) => {
      const d = changed[k];
      return `<div class="stat"><span>${T(de, en)}</span><span class="trk"><i style="--v:${val[k]}%"></i></span><b class="${d > 0 ? "up" : d < 0 ? "down" : ""}">${val[k]}${d ? (d > 0 ? " ▲" : " ▼") : ""}</b></div>`;
    }).join("");
  }
  render();
  document.addEventListener("langchange", () => render());
  const DEC = {
    def: [[0, { mil: 8, eco: -3 }, "Rüstungsetat erhöht", "Defence budget raised"], [1, { dip: -4 }, "Moskau reagiert verstimmt", "Moscow reacts coldly"], [2, { pop: -2 }, "Haushaltsdebatte im Bundestag", "Budget debate in parliament"]],
    trade: [[0, { eco: 6 }, "Handelsabkommen unterzeichnet", "Trade deal signed"], [1, { dip: 5 }, "Partner rücken näher", "Partners move closer"], [2, { pop: 3, mil: -1 }, "Jobs entstehen, Fokus verschiebt sich", "Jobs created, focus shifts"]],
    sanc: [[0, { eco: -5, dip: 2 }, "Sanktionen verhängt", "Sanctions imposed"], [1, { mil: 2 }, "Gegenseite mobilisiert", "Other side mobilises"], [2, { pop: -3 }, "Energiepreise steigen", "Energy prices rise"]]
  };
  $$("[data-dec]").forEach(b => b.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    $$("[data-dec]").forEach(x => (x.disabled = true));
    log.innerHTML = "";
    for (const [rr, fx, de, en] of DEC[b.dataset.dec]) {
      if (rr) { await sleep(900); r++; round.textContent = "R " + String(r).padStart(2, "0"); }
      for (const k in fx) val[k] = clamp(val[k] + fx[k], 0, 100);
      render(fx);
      const line = document.createElement("div");
      const deltas = Object.entries(fx).map(([k, v]) => `${KEYS.find(x => x[0] === k)[lang === "en" ? 2 : 1]} ${v > 0 ? "+" : ""}${v}`).join(" · ");
      line.innerHTML = `<span class="r">R+${rr}</span> `;
      line.append(`${T(de, en)} → ${deltas}`);
      log.appendChild(line);
      requestAnimationFrame(() => line.classList.add("on"));
    }
    await sleep(400);
    $$("[data-dec]").forEach(x => (x.disabled = false));
    busy = false;
  }));
})();

/* ===== Fahrzeugfolierung: Konzepte ===== */
(() => {
  const body = $("#vanBody"); if (!body) return;
  const dots = $("#frostDots"), frost = $("#frostLayer");
  let s = "";
  for (let i = 0; i < 120; i++) s += `<circle cx="${(Math.random() * 600).toFixed(1)}" cy="${(Math.random() * 200).toFixed(1)}" r="${(Math.random() * 2.2 + 0.4).toFixed(1)}"/>`;
  dots.innerHTML = s;
  $$("#concepts button").forEach(b => b.addEventListener("click", () => {
    $$("#concepts button").forEach(x => x.setAttribute("aria-pressed", x === b));
    body.setAttribute("fill", `url(#${b.dataset.c})`);
    const fr = b.dataset.c === "pfr";
    frost.style.opacity = dots.style.opacity = fr ? "" : 0;
  }));
})();

/* ===== April-App: Chat-Blasen ===== */
(() => {
  const ph = $("#phone"); if (!ph) return;
  let done = false;
  onVisible(ph, async v => {
    if (!v || done) return;
    done = true;
    for (const b of $$(".bub", ph)) { await sleep(700); b.classList.add("on"); }
  }, { threshold: 0.5 });
})();

/* ===== Galerie-Lightbox ===== */
(() => {
  const lb = $("#lightbox"), arts = $$(".art[data-lb]");
  if (!arts.length) return;
  let idx = 0, last = null;
  function show(i) {
    idx = (i + arts.length) % arts.length;
    const a = arts[idx];
    const media = a.querySelector(".art-img img") || a.querySelector(".art-img svg");
    const box = $("#lbImg"); box.innerHTML = "";
    const clone = media.cloneNode(true);
    if (a.classList.contains("locked")) clone.style.filter = "blur(10px)";
    box.appendChild(clone);
    $("#lbTitle").textContent = a.querySelector("h3").textContent;
    $("#lbText").textContent = a.querySelector(".art-cap p").textContent;
    $("#lbTag").textContent = a.querySelector(".art-cap .pill").textContent;
  }
  function open(i) { last = document.activeElement; show(i); lb.classList.add("open"); document.body.classList.add("no-scroll"); $(".lb-x", lb).focus(); }
  function close() { lb.classList.remove("open"); document.body.classList.remove("no-scroll"); last && last.focus(); }
  arts.forEach((a, i) => a.addEventListener("click", () => open(i)));
  $(".lb-prev", lb).addEventListener("click", () => show(idx - 1));
  $(".lb-next", lb).addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", e => { if (e.target === lb || e.target.closest("[data-lb-close]")) close(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();

/* ===== Buch: 3D-Neigung ===== */
(() => {
  const book = $("#book"); if (!book || RM) return;
  const stage = book.parentElement;
  stage.addEventListener("pointermove", e => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    book.style.transform = `rotateY(${-28 + x * 40}deg) rotateX(${6 - y * 16}deg)`;
  });
  stage.addEventListener("pointerleave", () => (book.style.transform = ""));
})();

/* ===== Prozess: Linie folgt dem Scroll ===== */
(() => {
  const proc = $("#proc"); if (!proc) return;
  const line = $("#procLine"), steps = $$(".step", proc);
  function upd() {
    const r = proc.getBoundingClientRect();
    const p = clamp((innerHeight * 0.75 - r.top) / (r.height * 0.9), 0, 1);
    line.style.setProperty("--p", p);
    steps.forEach((s, i) => s.classList.toggle("on", p >= i / steps.length + 0.02));
  }
  addEventListener("scroll", upd, { passive: true }); upd();
})();

/* ===== Kontaktformular ===== */
(() => {
  const f = $("#contactForm"); if (!f) return;
  const st = $("#formStatus");
  f.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (d.website) { st.textContent = T("Danke! Nachricht ist raus.", "Thanks! Message sent."); f.reset(); return; } // Honeypot
    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim()) {
      st.textContent = T("Bitte Name, gültige E-Mail und Nachricht ausfüllen.", "Please fill in name, a valid email and a message.");
      (f.querySelector(":invalid") || f.querySelector("input")).focus();
      return;
    }
    const ep = f.dataset.endpoint;
    if (ep) {
      st.textContent = T("Sende …", "Sending …");
      try {
        const res = await fetch(ep, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } });
        if (!res.ok) throw 0;
        st.textContent = T("Danke! Ich melde mich so schnell wie möglich.", "Thanks! I'll get back to you as soon as I can.");
        f.reset();
      } catch (err) {
        st.textContent = T("Hat nicht geklappt. Schreib mir direkt an ", "That didn't work. Email me directly at ") + CONFIG.email;
      }
    } else {
      const sub = encodeURIComponent(T("Projektanfrage von ", "Project request from ") + d.name);
      const body = encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`);
      location.href = `mailto:${CONFIG.email}?subject=${sub}&body=${body}`;
      st.textContent = T("Dein E-Mail-Programm öffnet sich mit der fertigen Nachricht.", "Your email app opens with the message ready to send.");
    }
  });
})();

/* ===== Modale Hilfen ===== */
let lastFocus = null;
function openModal(m, focusEl) { lastFocus = document.activeElement; m.classList.add("open"); document.body.classList.add("no-scroll"); setTimeout(() => focusEl.focus(), 10); }
function closeModal(m) { m.classList.remove("open"); document.body.classList.remove("no-scroll"); lastFocus && lastFocus.focus && lastFocus.focus(); }
$$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m) closeModal(m); }));

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" });
}
function copyMail() {
  (navigator.clipboard ? navigator.clipboard.writeText(CONFIG.email) : Promise.reject()).then(
    () => toast(T("E-Mail kopiert: ", "Email copied: ") + CONFIG.email),
    () => toast(CONFIG.email));
}

/* ===== Kommandozentrale (Strg/Cmd + K) ===== */
const palette = (() => {
  const m = $("#palette"), inp = $("#palIn"), list = $("#palList");
  let items = [], sel = 0;
  const I = () => [
    [T("Sektionen", "Sections"), [
      ["Start", "top", "hero home"], [T("Über mich", "About"), "about", "shaquille gründer"], ["Services", "services", "leistungen webdesign 3d logo"],
      [T("Projekte", "Work"), "projekte", "cases"], [T("Foto & Kunst", "Photo & Art"), "kunst", "menschlichkeit ausrutscher galerie"],
      [T("Buch", "Book"), "buch", "finde deine mitte"], ["Lab / Side Quests", "lab", "duisport rc jet minecraft"],
      [T("Prozess", "Process"), "prozess", "ablauf"], [T("Kontakt", "Contact"), "kontakt", "mail anfrage"]]],
    [T("Projekte", "Projects"), [
      ["Politics AI", "p-politics", "ki simulator kanzler"], ["Zimmerei Weberhof", () => window.open(CONFIG.zimmerei, "_blank", "noopener"), "handwerk demo live"],
      ["Berlingo-Wrap", () => { scrollToId("projekte"); }, "folierung frosted"], ["April", () => april.say(T("Hi! Ich bin April. Die App ist noch in Entwicklung, aber ich bin schon da.", "Hi! I'm April. The app is still in development, but I'm already here.")), "companion app"]]],
    [T("Aktionen", "Actions"), [
      [T("Politics-AI-Seite öffnen", "Open Politics AI page"), () => (location.href = "/politics-ai/"), "lagezentrum"],
      [T("E-Mail-Adresse kopieren", "Copy email address"), copyMail, "mail kontakt"],
      [T("Sprache wechseln (DE/EN)", "Switch language (DE/EN)"), () => $("#langBtn").click(), "english deutsch language"],
      [T("Terminal öffnen", "Open terminal"), () => term.open(), "shell console befehle"],
      [T("Boot-Sequenz abspielen", "Replay boot sequence"), () => boot.run(), "start jarvis"],
      ["GitHub: short1106", () => window.open(CONFIG.github, "_blank", "noopener"), "code"],
      [T("Impressum", "Imprint"), () => (location.href = "/impressum/"), "legal"],
      [T("Datenschutz", "Privacy"), () => (location.href = "/datenschutz/"), "legal dsgvo"]]]
  ];
  function build(q = "") {
    q = q.toLowerCase().trim();
    items = []; list.innerHTML = "";
    I().forEach(([grp, arr]) => {
      const hits = arr.filter(([l, , kw]) => !q || (l + " " + kw).toLowerCase().includes(q));
      if (!hits.length) return;
      const h = document.createElement("li"); h.className = "pal-group"; h.setAttribute("role", "presentation"); h.textContent = grp; list.appendChild(h);
      hits.forEach(([l, act]) => {
        const li = document.createElement("li");
        li.className = "pal-item"; li.setAttribute("role", "option"); li.id = "pal-" + items.length;
        li.innerHTML = `<span></span><span class="hint">${typeof act === "string" ? "#" + act : "↵"}</span>`;
        li.firstChild.textContent = l;
        const idx = items.length;
        li.addEventListener("click", () => run(idx));
        li.addEventListener("pointermove", () => mark(idx));
        list.appendChild(li); items.push({ li, act });
      });
    });
    if (!items.length) list.innerHTML = `<li class="pal-empty">${T("Nichts gefunden. Versuch's mit „terminal“.", "Nothing found. Try “terminal”.")}</li>`;
    mark(0);
  }
  function mark(i) {
    if (!items.length) return;
    sel = (i + items.length) % items.length;
    items.forEach((it, k) => it.li.setAttribute("aria-selected", k === sel));
    inp.setAttribute("aria-activedescendant", items[sel].li.id);
    items[sel].li.scrollIntoView({ block: "nearest" });
  }
  function run(i) {
    const it = items[i]; if (!it) return;
    close();
    setTimeout(() => (typeof it.act === "string" ? scrollToId(it.act) : it.act()), 30);
  }
  function open() { inp.value = ""; build(); openModal(m, inp); }
  function close() { closeModal(m); }
  inp.addEventListener("input", () => build(inp.value));
  inp.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); mark(sel + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); mark(sel - 1); }
    else if (e.key === "Enter") { e.preventDefault(); run(sel); }
  });
  $("#cmdkBtn").addEventListener("click", open);
  return { open, close, get isOpen() { return m.classList.contains("open"); } };
})();

/* ===== Terminal ===== */
const term = (() => {
  const m = $("#terminal"), out = $("#tOut"), inp = $("#tIn");
  const hist = []; let hi = 0, greeted = false;
  function print(txt, cls = "") { const d = document.createElement("div"); if (cls) d.className = cls; d.textContent = txt; out.appendChild(d); out.scrollTop = out.scrollHeight; }
  const CMDS = {
    help: () => T(
      "Verfügbare Befehle:\n  help       diese Hilfe\n  about      wer steckt dahinter\n  services   was ich mache\n  projects   Projekte anzeigen\n  open <n>   Projekt öffnen (1-4)\n  contact    Kontaktdaten\n  april      April rufen\n  lang       Sprache wechseln\n  boot       Startsequenz erneut\n  clear      Ausgabe leeren\n  exit       Terminal schließen",
      "Available commands:\n  help       this help\n  about      who's behind this\n  services   what I do\n  projects   list projects\n  open <n>   open project (1-4)\n  contact    contact details\n  april      summon April\n  lang       switch language\n  boot       replay boot sequence\n  clear      clear output\n  exit       close terminal"),
    about: () => T("Shaquille, 19. Geboren in Duisburg, sitzt in Öhringen. Gründer von Dulidan Studios seit dem 11.06.2026.", "Shaquille, 19. Born in Duisburg, based in Öhringen. Founder of Dulidan Studios since 11 June 2026."),
    services: () => "01 Webdesign\n02 " + T("Werbe-Content (Ads, Social, Visuals)", "Ad content (ads, social, visuals)") + "\n03 " + T("3D-Modeling & Rendering", "3D modeling & rendering") + "\n04 " + T("Logo-Erneuerung", "Logo refresh"),
    projects: () => "[1] Politics AI          Alpha 3\n[2] Zimmerei Weberhof    live\n[3] Berlingo-Wrap        Frosted\n[4] April                " + T("in Entwicklung", "in development") + "\n\n" + T("Tippe „open 1“ …", "Type “open 1” …"),
    open: a => {
      const n = parseInt(a, 10);
      const act = { 1: () => (location.href = "/politics-ai/"), 2: () => window.open(CONFIG.zimmerei, "_blank", "noopener"), 3: () => { close(); scrollToId("projekte"); }, 4: () => { close(); scrollToId("projekte"); april.say(T("Das bin ich! Bzw. werde ich.", "That's me! Or will be.")); } }[n];
      if (!act) return T("Nutzung: open 1-4", "Usage: open 1-4");
      setTimeout(act, 200); return T("Öffne …", "Opening …");
    },
    contact: () => `E-Mail:  ${CONFIG.email}\nGitHub:  github.com/short1106\n${T("Adresse", "Address")}: Theodor-Fontane-Weg 11, 74613 Öhringen`,
    april: () => { april.say(T("Du hast gerufen? ✦", "You called? ✦")); return T("April ist unterwegs …", "April is on her way …"); },
    lang: () => { $("#langBtn").click(); return T("Sprache: Deutsch", "Language: English"); },
    boot: () => { close(); setTimeout(() => boot.run(), 200); return ""; },
    clear: () => { out.innerHTML = ""; return ""; },
    exit: () => { close(); return ""; },
    whoami: () => "guest",
    ls: () => "about/  services/  projects/  art/  book/  lab/  contact/  secrets.txt",
    "cat": a => a === "secrets.txt" ? T("↑ ↑ ↓ ↓ ← → ← → B A", "↑ ↑ ↓ ↓ ← → ← → B A") : T("Datei nicht gefunden.", "File not found."),
    sudo: () => T("Netter Versuch. Root hat hier nur April.", "Nice try. Only April has root here."),
    date: () => new Date().toLocaleString(lang === "en" ? "en-GB" : "de-DE", { timeZone: "Europe/Berlin" }),
    echo: a => a || ""
  };
  function exec(line) {
    const [c, ...rest] = line.trim().split(/\s+/);
    const f = CMDS[c.toLowerCase()];
    print("guest@dulidan:~$ " + line, "u");
    const r = f ? f(rest.join(" ")) : T(`Befehl nicht gefunden: ${c}. Tippe „help“.`, `Command not found: ${c}. Type “help”.`);
    if (r) print(r);
  }
  $("#tForm").addEventListener("submit", e => {
    e.preventDefault();
    const v = inp.value; inp.value = "";
    if (!v.trim()) return;
    hist.push(v); hi = hist.length; exec(v);
  });
  inp.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && hist.length) { e.preventDefault(); hi = Math.max(0, hi - 1); inp.value = hist[hi]; }
    if (e.key === "ArrowDown" && hist.length) { e.preventDefault(); hi = Math.min(hist.length, hi + 1); inp.value = hist[hi] || ""; }
    if (e.key === "Tab") { e.preventDefault(); const k = Object.keys(CMDS).find(k => k.startsWith(inp.value)); if (k) inp.value = k; }
  });
  function open() {
    if (!greeted) { greeted = true; print("DULIDAN_OS v1.0 · " + T("Tippe „help“ für alle Befehle.", "Type “help” for all commands."), "p"); }
    openModal(m, inp);
  }
  function close() { closeModal(m); }
  $$(".js-term").forEach(b => b.addEventListener("click", open));
  return { open, close, get isOpen() { return m.classList.contains("open"); } };
})();

/* ===== Tastatur: Strg+K, `, Esc, Konami ===== */
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let kpos = 0;
document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    palette.isOpen ? palette.close() : (term.isOpen && term.close(), palette.open());
    return;
  }
  if (e.key === "Escape") {
    if (palette.isOpen) palette.close();
    if (term.isOpen) term.close();
    if (mmenu.classList.contains("open")) burger.click();
    return;
  }
  const typing = e.target.closest && e.target.closest("input,textarea");
  if (typing) return;
  if (e.code === "Backquote" || e.key === "`") { e.preventDefault(); term.open(); return; }
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  kpos = k === KONAMI[kpos] ? kpos + 1 : (k === KONAMI[0] ? 1 : 0);
  if (kpos === KONAMI.length) { kpos = 0; aprilMode(); }
});
function aprilMode() {
  const on = root.classList.toggle("april-mode");
  hero.pink = on ? 1 : 0;
  toast(on ? T("✦ April-Modus aktiviert ✦", "✦ April mode activated ✦") : T("April-Modus aus", "April mode off"));
  if (on) april.say(T("Konami-Code? Respekt. Alles pink jetzt. Wie es sich gehört.", "Konami code? Respect. Everything's pink now. As it should be."));
}

/* ===== April: Begleiterin ===== */
const april = (() => {
  const bub = $("#aprilBubble"), txt = $("#aprilText"), btn = $("#aprilBtn");
  let t;
  const seen = new Set();
  function say(msg, ms = 6500) {
    txt.textContent = msg;
    bub.classList.add("on");
    clearTimeout(t);
    t = setTimeout(() => bub.classList.remove("on"), ms);
  }
  bub.addEventListener("click", () => bub.classList.remove("on"));
  const tips = () => [
    T("Tipp: Strg+K (oder Cmd+K) öffnet die Kommandozentrale.", "Tip: Ctrl+K (or Cmd+K) opens the command center."),
    T("Drück mal die Taste ^ oder `. Da wartet ein Terminal.", "Press the ` key. There's a terminal waiting."),
    T("Auf dieser Seite sind drei von mir versteckt. Viel Glück.", "There are three of me hidden on this page. Good luck."),
    T("Ich sag nur: ↑ ↑ ↓ ↓ … den Rest kennst du.", "Just saying: ↑ ↑ ↓ ↓ … you know the rest."),
    T("Shaq antwortet auf Mails wirklich selbst. Versprochen.", "Shaq really answers emails himself. Promise.")
  ];
  let ti = 0;
  btn.addEventListener("click", () => say(tips()[ti++ % tips().length]));
  const SEC = {
    projekte: () => T("Das große Ding? Politics AI. Probier unten die Entscheidungen aus.", "The big one? Politics AI. Try the decisions in the demo."),
    lab: () => T("Psst: Hier in der Nerd-Ecke hat sich eine von uns versteckt.", "Psst: one of us is hiding here in the nerd corner."),
    kontakt: () => T("Schreib ruhig. Keine Bots, nur Shaq.", "Go ahead and write. No bots, just Shaq.")
  };
  document.addEventListener("section", e => {
    const f = SEC[e.detail];
    if (f && !seen.has(e.detail)) { seen.add(e.detail); setTimeout(() => say(f()), 900); }
  });
  document.addEventListener("booted", () => {
    if (store.get("dd_april_hi")) return;
    store.set("dd_april_hi", "1");
    setTimeout(() => say(T("Hi, ich bin April! Tipp: Strg+K öffnet die Kommandozentrale.", "Hi, I'm April! Tip: Ctrl+K opens the command center.")), 2200);
  }, { once: true });
  const meet = $("#meetApril");
  if (meet) meet.addEventListener("click", () => say(T("Hallo zurück! Die App kommt, ich übe schon mal hier.", "Hi back! The app is coming, I'm practising here.")));
  return { say };
})();

/* ===== Versteckte Aprils ===== */
(() => {
  let found = new Set((store.get("dd_aprils") || "").split(",").filter(Boolean));
  const btns = $$("[data-april]");
  const total = btns.length;
  btns.forEach(b => {
    if (found.has(b.dataset.april)) b.classList.add("found");
    b.addEventListener("click", () => {
      if (found.has(b.dataset.april)) { toast(T(`Die hast du schon. ${found.size}/${total}`, `Already found that one. ${found.size}/${total}`)); return; }
      found.add(b.dataset.april);
      b.classList.add("found");
      store.set("dd_aprils", [...found].join(","));
      if (found.size === total) {
        toast(T(`Alle ${total} Aprils gefunden!`, `All ${total} Aprils found!`));
        april.say(T("Alle gefunden! Du bist jetzt offiziell Ehrenmitglied der Dulidan-Crew. ✦", "Found them all! You're now an honorary member of the Dulidan crew. ✦"), 9000);
      } else toast(T(`April gefunden: ${found.size}/${total}`, `April found: ${found.size}/${total}`));
    });
  });
})();

})();

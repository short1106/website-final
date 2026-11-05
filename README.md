# Dulidan Studios · Website

Portfolio von Dulidan Studios plus eigene Seite für **Politics AI**. Reines HTML/CSS/JS, kein Build-Schritt, keine Abhängigkeiten, keine Tracker, keine externen Requests (Fonts sind selbst gehostet).

```
/                     Startseite: Epic-Hero, Leistungen, Für wen, Demos, Warum, Weltkugel, Konfigurator, Kontakt
/portfolio/           Portfolio: Politics AI, Webbrowser, Dulidan Works, Demos
/partials/showroom.html  Geparkter 3D-Showroom (nicht eingebunden)
/politics-ai/         Politics AI , EINE selbstständige HTML-Datei (~75 KB, alles inline)
/impressum/           Impressum
/datenschutz/         Datenschutzerklärung
/demos/restaurant/    Demo-Website Restaurant „Herzhaft“ (eigene Datei, eigene Fonts)
/404.html             Fehlerseite
/assets/css/main.css  Styles für Startseite, Portfolio und Rechtsseiten
/assets/js/main.js    Gemeinsames JS (Vanilla): Hero-Morph, Globus, Konfigurator, Palette, Terminal, April …
/assets/js/showroom.js 3D-Showroom, geparkt
/assets/vendor/three/ three.js r169 + Addons (MIT, selbst gehostet)
/assets/models/       Platz für .glb-Modelle (Showroom geparkt)
/assets/fonts/        Space Grotesk + JetBrains Mono (OFL, selbst gehostet)
/assets/img/          Logo (WebP), Icons, Open-Graph-Bilder
CNAME, robots.txt, sitemap.xml, site.webmanifest, favicon.ico, apple-touch-icon.png
```

## Lokal starten

```bash
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

Wichtig: über einen Server öffnen, nicht per Doppelklick (`file://`), weil die Seite mit absoluten Pfaden (`/assets/...`) arbeitet. Die Politics-AI-Datei funktioniert auch per Doppelklick.

## Deployment

**Alternativ klassischer Webspace:** Den kompletten Ordnerinhalt (ohne `.git`, `README.md`, `OFFICIAL`) per SFTP oder Webspace-Explorer in das Root-Verzeichnis der Domain hochladen. Fertig, kein Build nötig.

**GitHub Pages (aktiv):** Dieses Repo (`short1106/website-final`) wird über GitHub Pages unter `dulidan-studios.com` veröffentlicht. Jeder Merge nach `main` geht automatisch live. Die Datei `CNAME` legt die Domain fest, nicht löschen.

**Netlify:** Ordner per Drag & Drop auf app.netlify.com ziehen oder Repo verbinden (Build command leer, Publish directory `/`). Domain unter „Domain management“ hinzufügen.

## Features

**Startseite (Fokus: Kunden gewinnen)**
- Epic-Hero „Dream. Design. Develop. Dominate.“: Beim Scrollen verwandeln sich die Partikel vom Dulidan-D in einen Nebel, eine Design-Fläche, eine Weltkugel und zurück ins D
- Fünf Leistungen: Webdesign, Werbe-Content, 3D-Modeling & Rendering, Logo-Erneuerung, Software & Apps (mit Machbarkeits-Check)
- Für wen, Demos für lokale Betriebe (Zimmerei Weberhof, Restaurant Herzhaft), Warum Dulidan
- Weltkugel mit Öhringen als Basis und Bögen für den weltweiten Service
- Projekt-Konfigurator inklusive „Individuelle Software / App“, Briefing wird ins Kontaktformular übernommen
- Über mich mit Profilfoto, Ablauf, Kontakt, Slogan-Band im Footer

**Portfolio** (`/portfolio/`)
- Politics AI (mit Live-Demo), eigener Webbrowser, Dulidan Works, Demos für lokale Betriebe

**Politics AI** (`/politics-ai/`)
- Weltsimulator-Seite: Du führst ein Land deiner Wahl. Der Vergleich mit Wahl-O-Mat ist entfernt

**Überall**
- Kommandozentrale **Strg/Cmd + K**, Terminal (Taste **^** bzw. **`**), Konami-Code, April als Begleiterin unten rechts, DE/EN
- `prefers-reduced-motion` schaltet Animationen ab

**Geparkt (im Code, aber nicht auf der Seite)**
- 3D-Showroom: `assets/js/showroom.js`, three.js unter `assets/vendor/three/`, Markup und Anleitung zum Aktivieren in `partials/showroom.html`. Wird eingebaut, sobald echte 3D-Modelle da sind

## Konfiguration

- **Eigene 3D-Modelle:** `.glb` nach `/assets/models/` legen und in `assets/js/showroom.js` oben in `MODELS` eintragen, z. B. `{ id: "produkt", name: "Produkt", tag: "Rendering", src: "/assets/models/produkt.glb" }`. Danach den Showroom laut `partials/showroom.html` wieder einbinden. Das Modell wird automatisch zentriert und skaliert. Tipp: Modelle vorher mit gltf.report oder Blender komprimieren (Draco/Meshopt), damit sie schnell laden.

- **Spiel-Link Politics AI:** in `politics-ai/index.html` ganz oben im Script `const PLAY_URL = "";` setzen. Leer = „Spielen“ öffnet ein Overlay mit Zugangsanfrage per Mail.
- **LinkedIn / Discord:** in `assets/js/main.js` → `CONFIG.linkedin` / `CONFIG.discord`. Sobald gesetzt, erscheinen die Kanäle im Kontaktbereich.
- **Formular-Backend:** in `index.html` am `<form id="contactForm">` das Attribut `data-endpoint` setzen (z. B. `https://formspree.io/f/XXXX`). Dann den Anbieter in der Datenschutzerklärung ergänzen.

## TODOs und Platzhalter

| Wo | Was |
|---|---|
| April | Finale Illustration statt Platzhalter-Vektor (`<symbol id="april">` oben in den Seiten) |
| Eigener Webbrowser | Name und echte Screenshots statt Konzeptdarstellung |
| Dulidan Works | Echte Screenshots, Beschreibung bei Bedarf schärfen |
| Zimmerei Weberhof | Echten Screenshot statt Skizze |
| Restaurant-Demo „Herzhaft“ | Live unter `/demos/restaurant/` (fiktiver Betrieb, noindex). Für echte Kunden: Food-Fotos statt Illustrationen, echte Bestell-/Reservierungsanbindung |
| 3D-Showroom | Aktivieren, sobald `.glb`-Modelle da sind (siehe `partials/showroom.html`) |
| Kontakt | LinkedIn-URL, Discord-Link, optional Formular-Endpoint |
| Politics AI | `PLAY_URL`; Text im „Spielen“-Overlay bestätigen |

## Bewusste Entscheidungen

- **Kein Build, kein GSAP/Lenis.** Startseite und Hero laufen mit eigenem WebGL-Shader ohne Abhängigkeiten. three.js wird nur auf der Portfolio-Seite und erst beim Hinscrollen zum Showroom geladen (selbst gehostet, kein CDN). Scroll-Effekte laufen über IntersectionObserver und `requestAnimationFrame`. Natives Scrollen statt Lenis, weil Scroll-Hijacking auf Handys und mit Screenreadern oft Probleme macht.
- **Gesamtgewicht der Startseite:** ca. 140 KB HTML/CSS/JS + ~70 KB Fonts + ~30 KB Bilder.
- **Druck/Print** ist raus, die Services sind: Webdesign, Werbe-Content, 3D-Modeling & Rendering, Logo-Erneuerung.
- **Länderzahl** überall „über 190“ (auf Politics AI so vorgegeben, im Portfolio angeglichen).
- **Politics AI** enthält keine Releasedaten, Nutzerzahlen, Förderhinweise oder Preise. Im Portfolio steht „Alpha 3“ und „Launch geplant: Januar 2027“, wie im Briefing angegeben.
- Rechtsgrundlagen im Impressum aktualisiert: § 5 DDG statt TMG, § 18 Abs. 2 MStV statt RStV.

## Claim-Varianten für den Hero

0. **Dream. Design. Develop. Dominate.** (Slogan, im Hero und Footer eingebaut)
1. Design, das hochfährt.
2. Websites, Content & 3D, die auffallen. (aktuell Hero-Headline)
3. Websites, die man nicht wegscrollt.

## Drei Ideen, um die Seite noch krasser zu machen

1. **Echtes Politics-AI-Mini-Gespräch im Portfolio:** ein Eingabefeld, in dem Besucher einen Satz an „Warschau“ schreiben und eine echte, kurze KI-Antwort bekommen (mit Rate-Limit über eine kleine Serverless-Funktion).
2. **April als animierter 3D-Charakter:** Low-Poly-Modell (passt zum 3D-Service), das dem Cursor mit den Augen folgt und bei Easter Eggs reagiert. Gleichzeitig ein Showcase für 3D-Modeling.
3. **Case-Study-Unterseiten mit Scroll-Film:** pro Projekt eine eigene Seite, auf der Entwürfe, Zwischenstände und Endergebnis beim Scrollen ineinander überblenden.

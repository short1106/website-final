# Dulidan Studios · Website

Portfolio von Dulidan Studios plus eigene Seite für **Politics AI**. Reines HTML/CSS/JS, kein Build-Schritt, keine Abhängigkeiten, keine Tracker, keine externen Requests (Fonts sind selbst gehostet).

```
/                     Startseite: Epic-Hero, Leistungen, Für wen, Warum, Weltkugel, Konfigurator, Kontakt
/portfolio/           Portfolio: Projekte, 3D-Showroom, Foto & Kunst, Buch, Lab
/politics-ai/         Politics AI – EINE selbstständige HTML-Datei (~75 KB, alles inline)
/impressum/           Impressum
/datenschutz/         Datenschutzerklärung
/404.html             Fehlerseite
/assets/css/main.css  Styles für Startseite, Portfolio und Rechtsseiten
/assets/js/main.js    Gemeinsames JS (Vanilla): Hero-Morph, Globus, Konfigurator, Palette, Terminal, April …
/assets/js/showroom.js 3D-Showroom (lädt three.js erst beim Hinscrollen)
/assets/vendor/three/ three.js r169 + Addons (MIT, selbst gehostet)
/assets/models/       Hier eigene .glb-Modelle für den Showroom ablegen
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
- Epic-Hero „Dream. Design. Develop. Dominate.“: Beim Scrollen verwandeln sich die Partikel vom Dulidan-D in einen Nebel (Dream), eine Design-Fläche (Design), eine Weltkugel aus echten Landmassen (Develop) und zurück ins D mit Schockwelle, Flash und Glitch (Dominate). Am Ende steht der komplette Slogan
- Leistungen mit „Das bekommst du“-Listen und „Das will ich“-Button, der direkt in den Konfigurator springt
- Für wen (Handwerk, Gründer, Creator, Hersteller), Warum Dulidan als Bento-Grid mit rotierendem 3D-D
- Interaktive Weltkugel (ziehen zum Drehen) mit Öhringen, Duisburg und Stuttgart
- Projekt-Konfigurator: Kunde klickt Leistungen, Stand, Zeitrahmen und Ziel an, daraus entsteht ein Briefing, das per Klick ins Kontaktformular übernommen wird
- Portale zu Portfolio und Politics AI (mit Live-Globus), Über mich, Ablauf, Kontakt
- Footer mit laufendem Slogan-Band
- Boot-Sequenz beim ersten Besuch, Custom Cursor, magnetische Buttons, HUD, Seitenübergänge mit Logo-Wipe

**Portfolio** (`/portfolio/`)
- Index aller Arbeiten, Politics-AI-Case mit Live-Demo, Zimmerei, Berlingo-Wrap, April
- **3D-Showroom** über die volle Bildschirmhöhe: Dulidan-D als echtes 3D-Modell, Globus, Material-Test und ein freier Slot. Drehen, zoomen, Auto-Rotation, Wireframe, drei Licht-Stimmungen (Studio, Neon, Sunset), Vollbild, Live-Anzeige von Vertices und Dreiecken
- Foto & Kunst mit Lightbox, Buch, Lab

**Überall**
- Kommandozentrale **Strg/Cmd + K**, Terminal (Taste **^** bzw. **`**, Befehle u. a. `help`, `projects`, `slogan`, `april`), Konami-Code, drei versteckte Aprils (2× Startseite, 1× Portfolio), April als Begleiterin, DE/EN
- `prefers-reduced-motion` schaltet Animationen, Morph und Pinning ab

**Politics AI** (`/politics-ai/`)
- Holo-Weltkugel aus Punkten (echte Landmasse, Natural-Earth-Daten als 2°-Raster), reagiert auf die Maus, Hotspots pulsieren, das gerade gemeldete Land wird markiert
- Headline entschlüsselt sich beim Laden, Live-Meldungen tippen sich im Loop
- Chat mit Warschau tippt sich beim Scrollen, Werte Polen 61→68 / Weltspannung 42→47 laufen mit
- Weltkarte: „Aktion ausführen“ färbt Länder in drei Phasen (Reaktion, Folge, Eskalation) und zeichnet Pfeile
- Bündnis-Kreis mit Abstimmung (Dafür/Dagegen/Enthaltung), Russland wird rot und verlässt den Kreis
- Vier Rundinstrumente + Kreisdiagramm, klar als „Beispielansicht“ markiert
- Fadenkreuz-Cursor rastet auf Buttons und Globus-Hotspots ein
- Konsole mit Taste **K**: `status`, `lage`, `hilfe` (+ `leeren`, `exit`)
- Weltspannungs-Balken oben rechts läuft beim Scrollen mit
- Impressum/Datenschutz als Overlay, Jahr per JS

## Konfiguration

- **Eigene 3D-Modelle:** `.glb` nach `/assets/models/` legen und in `assets/js/showroom.js` oben in `MODELS` eintragen, z. B. `{ id: "van", name: "Berlingo", tag: "Frosted", src: "/assets/models/berlingo.glb" }`. Das Modell wird automatisch zentriert und skaliert. Tipp: Modelle vorher mit gltf.report oder Blender komprimieren (Draco/Meshopt), damit sie schnell laden.

- **Spiel-Link Politics AI:** in `politics-ai/index.html` ganz oben im Script `const PLAY_URL = "";` setzen. Leer = „Spielen“ öffnet ein Overlay mit Zugangsanfrage per Mail.
- **LinkedIn / Discord:** in `assets/js/main.js` → `CONFIG.linkedin` / `CONFIG.discord`. Sobald gesetzt, erscheinen die Kanäle im Kontaktbereich.
- **Formular-Backend:** in `index.html` am `<form id="contactForm">` das Attribut `data-endpoint` setzen (z. B. `https://formspree.io/f/XXXX`). Dann den Anbieter in der Datenschutzerklärung ergänzen.

## TODOs und Platzhalter

| Wo | Was |
|---|---|
| Über mich | Foto von Shaquille (Platzhalter-SVG „FOTO FOLGT“), z. B. `/assets/img/shaquille.webp` |
| April | Finale Illustration statt Platzhalter-Vektor (`<symbol id="april">` oben in `index.html`) |
| Zimmerei Weberhof | Echten Screenshot einsetzen (Kommentar im HTML zeigt das `<img>`); aktuell gezeichnete Skizze |
| Berlingo-Wrap | Echte Namen der Konzepte K01–K04 und Renderings der fünf Entwürfe; aktuell schematische Platzhalter |
| Menschlichkeit | Echtes Foto statt Platzhalter-Illustration |
| Ausrutscher | Teaser-Bild, sobald es eins gibt |
| Buch | Echtes Cover, selbst gewählter Kurzauszug („Kurzauszug folgt“) |
| Kontakt | LinkedIn-URL, Discord-Link, optional Formular-Endpoint |
| 3D-Showroom | Eigene Modelle (z. B. Berlingo, Produkt-Renderings) als `.glb` ergänzen; der Slot „Dein Produkt?“ ist ein Platzhalter |
| Politics AI | `PLAY_URL`; Text im „Spielen“-Overlay („Zugang anfragen:“) ist nicht Teil der Textvorgabe, bitte bestätigen |
| Politics AI | Datenschutz-Overlay steht wie vorgegeben auf „Wird ergänzt“ |

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
4. Von Duisburg ins Display.

## Drei Ideen, um die Seite noch krasser zu machen

1. **Echtes Politics-AI-Mini-Gespräch im Portfolio:** ein Eingabefeld, in dem Besucher einen Satz an „Warschau“ schreiben und eine echte, kurze KI-Antwort bekommen (mit Rate-Limit über eine kleine Serverless-Funktion).
2. **April als animierter 3D-Charakter:** Low-Poly-Modell (passt zum 3D-Service), das dem Cursor mit den Augen folgt und bei Easter Eggs reagiert. Gleichzeitig ein Showcase für 3D-Modeling.
3. **Case-Study-Unterseiten mit Scroll-Film:** pro Projekt eine eigene Seite, auf der Entwürfe, Zwischenstände und Endergebnis beim Scrollen ineinander überblenden (z. B. Berlingo: Skizze → 5 Konzepte → Frosted auf dem echten Auto).

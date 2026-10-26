# Dulidan Studios · Website

Portfolio von Dulidan Studios plus eigene Seite für **Politics AI**. Reines HTML/CSS/JS, kein Build-Schritt, keine Abhängigkeiten, keine Tracker, keine externen Requests (Fonts sind selbst gehostet).

```
/                     Portfolio (index.html)
/politics-ai/         Politics AI – EINE selbstständige HTML-Datei (~75 KB, alles inline)
/impressum/           Impressum
/datenschutz/         Datenschutzerklärung
/404.html             Fehlerseite
/assets/css/main.css  Styles Portfolio + Rechtsseiten
/assets/js/main.js    Alle Features der Portfolio-Seite (Vanilla JS)
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

**Portfolio**
- Boot-Sequenz (nur beim ersten Besuch, mit Enter/Esc/Button überspringbar, gespeichert in `localStorage`)
- WebGL-Partikel-Logo im Hero: das Dulidan-„D“ setzt sich aus Partikeln zusammen, weicht der Maus aus, explodiert beim Scrollen. Eigener Shader, ohne Three.js. Fallback: statisches Logo
- Custom Cursor mit Labels, magnetische Buttons, Spotlight- und Tilt-Karten, Text-Reveals, Parallax
- HUD: Scroll-Fortschritt, Sektionsnummer, Uhrzeit Öhringen, Status
- Kommandozentrale **Strg/Cmd + K** (Sektionen, Projekte, Aktionen, Pfeiltasten + Enter)
- Terminal (Taste **`** bzw. **^** oder „> terminal“ im Footer): `help`, `projects`, `open 1`, `contact`, `april`, `about`, `services`, `lang`, `boot`, `clear`, `ls`, `cat secrets.txt`, `sudo` …
- Easter Eggs: Konami-Code (↑↑↓↓←→←→BA) = April-Modus, drei versteckte Aprils (Über mich, Lab, Footer)
- April als Begleiterin unten rechts (Tipps, reagiert auf Sektionen, nervt nicht: jede Meldung einmal)
- Politics-AI-Mini-Demo: rotierender Mini-Globus, Live-Feed, Deutschland-Panel mit Entscheidungen und Kaskadeneffekten über drei Runden
- Berlingo-Wrap: fünf Konzepte zum Durchklicken, „Frosted“ als gewählt markiert
- Galerie mit Lightbox (Tastatur: ←/→/Esc), 3D-Buch, Lab als Terminal-Liste, Prozess-Linie folgt dem Scroll
- DE/EN-Umschalter (Texte stehen als `data-en` direkt im HTML)
- Kontaktformular mit Honeypot; ohne Endpoint öffnet es das E-Mail-Programm mit fertiger Nachricht
- `prefers-reduced-motion` schaltet Animationen, Boot und WebGL ab; Tastaturbedienung, Fokus-Stile, Skip-Link

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
| Politics AI | `PLAY_URL`; Text im „Spielen“-Overlay („Zugang anfragen:“) ist nicht Teil der Textvorgabe, bitte bestätigen |
| Politics AI | Datenschutz-Overlay steht wie vorgegeben auf „Wird ergänzt“ |

## Bewusste Entscheidungen

- **Kein Astro/Vite, kein GSAP/Lenis/Three.js.** Die Seite läuft ohne Build und ohne Abhängigkeiten, lässt sich also einfach hochladen. Der eigene WebGL-Shader ersetzt Three.js (spart ~150 KB), Scroll-Effekte laufen über IntersectionObserver und `requestAnimationFrame`. Natives Scrollen statt Lenis, weil Scroll-Hijacking auf Handys und mit Screenreadern oft Probleme macht.
- **Gesamtgewicht der Startseite:** ca. 140 KB HTML/CSS/JS + ~70 KB Fonts + ~30 KB Bilder.
- **Druck/Print** ist raus, die Services sind: Webdesign, Werbe-Content, 3D-Modeling & Rendering, Logo-Erneuerung.
- **Länderzahl** überall „über 190“ (auf Politics AI so vorgegeben, im Portfolio angeglichen).
- **Politics AI** enthält keine Releasedaten, Nutzerzahlen, Förderhinweise oder Preise. Im Portfolio steht „Alpha 3“ und „Launch geplant: Januar 2027“, wie im Briefing angegeben.
- Rechtsgrundlagen im Impressum aktualisiert: § 5 DDG statt TMG, § 18 Abs. 2 MStV statt RStV.

## Claim-Varianten für den Hero

1. **Design, das hochfährt.** (aktuell eingebaut)
2. Websites, die man nicht wegscrollt.
3. Von Duisburg ins Display.

## Drei Ideen, um die Seite noch krasser zu machen

1. **Echtes Politics-AI-Mini-Gespräch im Portfolio:** ein Eingabefeld, in dem Besucher einen Satz an „Warschau“ schreiben und eine echte, kurze KI-Antwort bekommen (mit Rate-Limit über eine kleine Serverless-Funktion).
2. **April als animierter 3D-Charakter:** Low-Poly-Modell (passt zum 3D-Service), das dem Cursor mit den Augen folgt und bei Easter Eggs reagiert. Gleichzeitig ein Showcase für 3D-Modeling.
3. **Case-Study-Unterseiten mit Scroll-Film:** pro Projekt eine eigene Seite, auf der Entwürfe, Zwischenstände und Endergebnis beim Scrollen ineinander überblenden (z. B. Berlingo: Skizze → 5 Konzepte → Frosted auf dem echten Auto).

# Architekturentscheidungen

Wird pro Phase ergänzt. Jede Entscheidung mit Begründung und Trade-off.

## Globales Fundament (Phase 2)

### Design-Tokens als SCSS-Variablen
- **Entscheidung:** Alle Farben, Abstände, Radien, Schriftgrößen und z-index-Stufen stehen in `src/styles/_variables.scss`. Komponenten laden sie per `@use "variables" as v;` (über `stylePreprocessorOptions.includePaths`).
- **Warum:** Eine Quelle für das Design, Änderungen wirken überall. Hex-Werte und Magic Numbers erscheinen in Komponenten-Styles nicht.
- **Trade-off:** SCSS-Variablen werden zur Build-Zeit aufgelöst und lassen sich zur Laufzeit nicht ändern (anders als CSS Custom Properties). Ein Laufzeit-Theme gibt es nicht, ist auch nicht gefordert.

### Breakpoints
- **Entscheidung:** Mobile-first mit `respond-to(md | lg | xl)` = 768 / 1024 / 1440 px.
- **Warum:** Figma liefert nur 390 px (Mobile) und 1440 px (Desktop). `xl` entspricht dem Desktop-Frame, `md` und `lg` sind Zwischenstufen für Tablets, die das Design nicht zeigt. Die Checkliste erlaubt hier eigene Entscheidungen nach den Prinzipien des Mockups.
- **Trade-off:** Zwischen 1024 und 1439 px ist das Verhalten abgeleitet, nicht vorgegeben. Phase 12 prüft diese Bereiche.

### Schriften lokal
- **Entscheidung:** Poppins (400, 700) über `@fontsource/poppins`, Subset `latin`, eingebunden in `angular.json`.
- **Warum:** Kein Google-CDN, damit werden keine IP-Adressen an Dritte übertragen (DSGVO). Das Subset `latin` deckt ä, ö, ü, ß ab.
- **Trade-off:** Die Schrift liegt im eigenen Build (etwas mehr Auslieferung), dafür kein externer Request.

### Routing
- **Entscheidung:** `ROUTES` mit Home (direkt gebunden) sowie Legal Notice und Privacy Policy per `loadComponent` (lazy). Unbekannte Pfade leiten auf `''`. `withInMemoryScrolling` aktiviert Anker-Scrolling.
- **Warum:** Rechtsseiten werden selten besucht und müssen nicht im Start-Bundle liegen. Anker-Scrolling erlaubt `routerLink` mit Fragment auf Sektionen der Startseite, auch von den Rechtsseiten aus.
- **Trade-off:** Ein Redirect statt einer 404-Seite. Für ein Ein-Personen-Portfolio ausreichend.

### Zoneless
- **Entscheidung:** Kein `zone.js`, kein Zone-Provider. Änderungserkennung läuft über Signals und Events.
- **Warum:** Angular-22-Standard, weniger Laufzeit-Overhead, klarere Datenflüsse.
- **Trade-off:** Zustand muss in Signals liegen, sonst aktualisiert sich die Ansicht nicht.

## Header und Content-Infrastruktur (Phase 3)

### Texte aus Wörterbüchern statt im Template
- **Entscheidung:** Alle sichtbaren Texte liegen in `src/app/content/` (`content.de.ts`, `content.en.ts`), typisiert über das Interface `SiteContent`. `LanguageService` hält die aktive Sprache als Signal und setzt `<html lang>`, `ContentService` liefert per `computed` die Texte der aktiven Sprache.
- **Warum:** Die Sprache lässt sich ohne Reload wechseln, es gibt einen Build, und der Compiler erzwingt, dass beide Sprachen dieselben Schlüssel haben.
- **Trade-off:** Gegenüber Angular-i18n gibt es keine Pluralregeln/ICU, und beide Übersetzungen liegen im Bundle. Für den Umfang eines Portfolios ist das vertretbar.

### Ein Menü für Desktop und Mobil
- **Entscheidung:** Das Menü (Navigation plus Sprachwahl) existiert einmal im DOM. Ab `lg` (1024 px) ist es eine Zeile in der Kopfleiste, darunter ein Vollbild-Overlay. Der Eintrag "Kontakt" ist nur im Overlay sichtbar.
- **Warum:** Kein doppeltes `nav`-Landmark, keine doppelten Texte, ein einziger Zustand (`isMenuOpen`).
- **Trade-off:** Die Darstellung wechselt rein über CSS, deshalb ist das Overlay im Test über Klassen und ARIA-Attribute prüfbar, nicht über Sichtbarkeit.

### Zustand des Overlays
- Schließen per Klick auf Link, `Escape`, Routenwechsel und Wechsel in die Desktop-Breite. Solange es offen ist, wird das Scrollen der Seite dahinter gesperrt.
- Der Header ist `position: fixed` und liegt über dem Hero. Die Rechtsseiten bekommen deshalb oben einen Abstand in Höhe des Headers.

## Hero und About me (Phase 4 und 5)

### Hintergrund-Glows per CSS
- **Entscheidung:** Die violetten und grünen Flächen im Hero sind weichgezeichnete `div`s (`aria-hidden`), keine Bilder.
- **Warum:** Kein Bildgewicht, skaliert mit jeder Breite, ändert sich über Design-Tokens.
- **Trade-off:** Die Form ist ein Kreis statt der organischen Vektorform aus Figma.

### Ankerziele unter dem fixierten Header
- **Entscheidung:** `.section` setzt `scroll-margin-top` in Höhe des Headers.
- **Warum:** Ohne diesen Abstand landet die Sektionsüberschrift nach einem Klick auf einen Navigationslink unter dem fixierten Header.

### Bild-Prüfung
- **Entscheidung:** `npm run check:images` (`scripts/check-images.mjs`) prüft alle Bilder in `public/` auf Größe (≤ 500 KB) und doppelte Dateien (Hash).
- **Warum:** Die Abnahmekriterien verlangen schlanke, nicht doppelte Bilder; die Prüfung läuft ohne Zusatzpaket.

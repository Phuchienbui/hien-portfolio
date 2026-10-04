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

## Kontaktformular (Phase 9)

### Senden-Button reagiert live, Meldungen erst nach dem Verlassen

- **Entscheidung:** Der Senden-Button wird über ein Signal aktiviert, das aus `form.statusChanges` entsteht (`toSignal`). Validierungsmeldungen erscheinen erst, wenn das Feld `touched` und ungültig ist.
- **Warum:** `touched` ändert sich nur beim Verlassen eines Feldes, die Gültigkeit aber bei jedem Tastendruck. Würde der Button an `touched` hängen, wäre er nach dem Ausfüllen des letzten Feldes erst nach einem weiteren Klick aktiv. So bleiben die Meldungen ruhig (Checkliste: Validierung beim Verlassen), und der Button zeigt trotzdem sofort, dass das Formular abschickbar ist.
- **Trade-off:** Zwei Zustände (Gültigkeit live, Fehleranzeige verzögert) statt einem. Das ist gewollt, aber im Code getrennt zu halten.

### Kein Layout-Shift bei Meldungen

- **Entscheidung:** Jedes Feld hat einen Meldungsbereich mit fester Mindesthöhe, der immer im DOM ist. Der Inhalt erscheint nur bei Fehler, verknüpft per `aria-describedby`.
- **Warum:** Die Seite springt nicht, wenn eine Meldung erscheint oder verschwindet.

### Versand und Mock-Modus

- **Entscheidung:** `ContactService` sendet per `HttpClient` an `CONTACT_ENDPOINT` (`core/config.ts`). Ist er leer, antwortet der Entwicklungsmodus mit einem Mock-Erfolg, der Produktionsbuild mit einem Fehler.
- **Warum:** Der Server existiert noch nicht. Ein stiller Erfolg im Produktionsbuild würde Nachrichten verschlucken, ohne dass die Besucher es merken. Im Frontend stehen keine Zugangsdaten.
- **Trade-off:** Solange kein Endpoint gesetzt ist, kann ein Besucher der veröffentlichten Seite keine Nachricht senden. Das ist ehrlicher als ein Scheinerfolg.

### Honeypot

- **Entscheidung:** Ein verstecktes Feld (`aria-hidden`, `tabindex="-1"`, aus dem Sichtbereich) fängt einfache Spam-Bots. Ist es gefüllt, wird nichts gesendet, der Besucher sieht aber den normalen Erfolg.
- **Trade-off:** Schützt nur gegen einfache Bots. Echter Schutz braucht serverseitige Prüfung.

## Footer und rechtliche Seiten (Phase 10)

### Ein Layout für beide Rechtstexte

- **Entscheidung:** Impressum und Datenschutzerklärung nutzen eine gemeinsame Komponente (`shared/legal-document`). Die Texte liegen als typisierte Daten (`LegalDocument`: Titel, Abschnitte, Absätze) in den Content-Dateien, getrennt nach Sprache.
- **Warum:** Beide Seiten haben dieselbe Struktur (ein `h1`, `h2` je Abschnitt). Eine Komponente hält das Layout einheitlich, und die Sprache wechselt wie überall ohne Reload.
- **Trade-off:** Absätze sind reiner Text ohne Links oder Listen. Für die aktuellen Texte reicht das, für Verlinkungen im Text müsste das Modell erweitert werden.

### Gemeinsame Social-Links

- **Entscheidung:** Hero und Footer beziehen ihre Links aus `SocialLinksService`. Ein fehlender Link (LinkedIn ohne URL) verschwindet überall zugleich.
- **Warum:** Eine Quelle für die Links verhindert, dass Hero und Footer auseinanderlaufen oder ein Eintrag in nur einem von beiden fehlt.

### Inhalte nur aus belegten Fakten

- **Entscheidung:** Name, Anschrift und E-Mail stehen einmal in `content/owner.ts` und werden in beide Sprachen eingesetzt. Alles Unbelegte (Hosting, Speicherdauer, Empfänger der Nachrichten) bleibt als `[TODO_CONTENT: …]` sichtbar.
- **Warum:** Rechtstexte dürfen keine erfundenen Angaben enthalten. Sichtbare Marker verhindern, dass ein unvollständiger Text unbemerkt veröffentlicht wird.

## Mehrsprachigkeit (Phase 11)

### Sprache wird nicht gespeichert

- **Entscheidung:** Die Seite startet immer auf Deutsch. Die gewählte Sprache wird weder in `localStorage` noch in einem Cookie abgelegt.
- **Warum:** Die Datenschutzerklärung sagt, dass die Seite nichts im Browser speichert. Ein gespeicherter Sprachwunsch würde diese Aussage ändern und einen Hinweis im Text nötig machen. Der Preis ist gering, weil der Sprachwechsel ein Klick ist.
- **Trade-off:** Wer Englisch bevorzugt, muss bei jedem Besuch erneut umschalten. Wird das später gewünscht, ist die Änderung klein (Speichern im `LanguageService`), erfordert aber eine angepasste Datenschutzerklärung.

### Absicherung gegen fehlende Übersetzungen

- **Entscheidung:** Das Interface `SiteContent` erzwingt zur Compile-Zeit, dass beide Sprachen dieselben Schlüssel haben. Zusätzlich vergleicht ein Test alle verschachtelten Pfade und prüft, dass kein Text leer ist. Ein Test über die ganze App stellt sicher, dass ein Sprachwechsel Header, Formular, Footer, Rechtsseiten, `lang` und Tab-Titel aktualisiert.
- **Warum:** Die Typen fangen fehlende Schlüssel, der Test fängt leere Texte und Abweichungen in verschachtelten Listen (z. B. Abschnitte der Rechtstexte), die ein Typ nicht erzwingt.

### Tab-Titel je Sprache

- **Entscheidung:** `App` setzt `document.title` aus dem Wörterbuch (`meta.title`), reaktiv über ein `effect`.
- **Trade-off:** Alle Seiten teilen einen Titel. Seitenspezifische Titel und Meta-Tags kommen mit Phase 13 (SEO).

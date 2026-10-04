# Offene Punkte

Fehlende Inhalte, die Hien liefern muss. Im Code als `[TODO_CONTENT: …]` oder durch fehlende Elemente sichtbar.

## Hero

- LinkedIn-URL (`site.linkedinUrl`). Ohne Angabe wird das Icon nicht gerendert.
- Hero-Foto: bewusst später, derzeit kein Foto.

## Über mich (`about` in `content.de.ts` / `content.en.ts`)

- Intro-Text DE und EN.
- Punkt 1: Remote-Bereitschaft DE und EN (Standort Dortmund steht bereits).
- Punkt 2: Offenheit und Lernbereitschaft DE und EN.
- Punkt 3: Problemlösung DE und EN.
- Foto: Pfad in `site.aboutPhotoSrc` setzen, sobald die Datei in `public/` liegt (≤ 500 KB). Bis dahin zeigt die Sektion einen sichtbaren Platzhalter.

## Skills (`skills` in `content.de.ts` / `content.en.ts`)

- Text neben dem Skill-Raster DE und EN.
- Text unter "Looking for another skill?" DE und EN.
- Skill-Icons: HTML, CSS, JavaScript, TypeScript, Angular und Git stammen aus simple-icons (CC0), weil der Figma-Export nur ein Platzhalter-Icon enthält. Optik bei Bedarf prüfen.

## Portfolio (`portfolio` in `content.de.ts` / `content.en.ts`, `src/app/data/projects.ts`)

- Beschreibungen aller vier Projekte bestätigen oder ersetzen (DE und EN). Die Entwürfe stammen aus den öffentlichen Repositories `memory-duel` (README und Repo-Beschreibung), `El-Pollo-Loco` (keine README, nur Sprachanteile) und `pokedex` (README: "Work in progress").
- BestellApp: Das Repository ist privat bzw. nicht lesbar, deshalb gibt es weder Beschreibung noch Technologie-Tags noch einen GitHub-Button. Repo auf public stellen oder Button weglassen, Beschreibung und Tags liefern.
- Live-URLs: keine vorhanden, die Live-Buttons werden nicht gerendert. Eintragen in `projects.ts`, sobald die Projekte laufen.
- Vorschaubilder: nur vom User, `Project.image` in `projects.ts` setzen (Datei in `public/`, höchstens 500 KB). Bis dahin zeigt jede Karte einen sichtbaren Platzhalter.
- Text unter dem Titel Portfolio DE und EN.
- Tags für `El-Pollo-Loco` und `pokedex` sind aus den Sprachanteilen der Repositories abgeleitet. Ob das Pokédex-Projekt eine REST-API nutzt, ist nicht belegt.

## Testimonials (`src/app/data/testimonials.ts`)

- Es gibt keine echten Testimonials. Die Sektion wird deshalb nicht gerendert (Projektregel: keine erfundenen Zitate). Sobald echte vorliegen, in `TESTIMONIALS` eintragen (Zitat, Name, Rolle, optional Foto). Ab zwei Einträgen erscheinen Pfeile und Punkte automatisch.

## Kontaktformular (`src/app/core/config.ts`, `contact` in `content.de.ts` / `content.en.ts`)

- `CONTACT_ENDPOINT` ist leer, weil der Server noch nicht existiert. Im Entwicklungsmodus (`ng serve`) läuft ein Mock, der Erfolg meldet, aber nichts versendet. Der Produktionsbuild zeigt bewusst eine Fehlermeldung, damit keine Nachricht unbemerkt verloren geht. Endpoint-URL eintragen, sobald der Empfänger steht.
- Empfänger-E-Mail: Vorschlag `phuchienbui2@gmail.com`, bitte bestätigen.
- Text unter der Überschrift „Kontakt“ DE und EN.
- Die Überschrift „Hast du ein Problem zu lösen?“ und der Satz „Suchst du einen Entwickler? Schreib mir!“ sind sinngemäße Übersetzungen der Figma-Texte. Bitte prüfen oder ersetzen.
- Die Datenschutzerklärung (`/privacy-policy`) ist noch ein Platzhalter, bis Phase 10 sie füllt.

## Footer, Impressum und Datenschutz (`legal.de.ts` / `legal.en.ts`, `owner.ts`)

- **Die Rechtstexte sind ein Entwurf, keine Rechtsberatung.** Sie stammen ausschließlich aus den Fakten in `CONTENT_INPUT.md` und müssen vor der Veröffentlichung von dir geprüft werden, gern mit einem Generator oder einer Beratungsstelle.
- Hosting-Anbieter mit Anschrift und Speicherdauer der Server-Logfiles (Datenschutz, Abschnitt „Hosting“).
- Kontaktformular: Empfänger, Übertragungsweg und Speicherdauer der Nachrichten (Datenschutz, Abschnitt „Kontaktformular“), sobald der Versand eingerichtet ist.
- Annahme „keine Analyse- und Tracking-Dienste“ aus `CONTENT_INPUT.md`: Die Seite setzt im Code keine Cookies und nutzt keinen Browser-Speicher. Bitte bestätigen, dass das auch für den Server gilt.
- Impressum: Telefon ist nicht angegeben (nicht erfunden). Wenn für deine Situation weitere Pflichtangaben nötig sind (z. B. Umsatzsteuer-ID, Berufsbezeichnung), ergänzen.
- Die Rechtstexte verwenden Poppins statt Open Sans wie im Figma-Entwurf, damit keine zweite Schrift geladen werden muss.

## Sprachen (Phase 11)

- Die englischen UI-Texte (Navigation, Formular, Meldungen, Footer, Rechtsseiten) stammen von mir. Laut Checkliste (User Story 3) bitte mit deepl.com oder grammarly.com gegenprüfen, die deutschen Texte z. B. mit languagetool.org.
- Die Sprache wird bewusst nicht gespeichert: Die Seite startet immer auf Deutsch. Dadurch bleibt die Aussage der Datenschutzerklärung richtig, dass nichts im Browser abgelegt wird.
- Persönliche Texte (Über mich, Skills, Portfolio, Kontakt) haben beide Sprachen als `[TODO_CONTENT: …]`-Marker, bis du sie lieferst. Die Beschreibungen der Projekte sind Entwürfe in beiden Sprachen und müssen bestätigt werden.

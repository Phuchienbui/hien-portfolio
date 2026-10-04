# Offene Punkte

Fehlende Inhalte, die Hien liefern muss. Im Code als `[TODO_CONTENT: …]` oder durch fehlende Elemente sichtbar.

## Hero

- LinkedIn-URL (`site.linkedinUrl`). Ohne Angabe wird das Icon nicht gerendert.
- Hero-Foto: bewusst später, derzeit kein Foto.

## Über mich (`about` in `content.de.ts` / `content.en.ts`)

- Die deutschen Texte (Intro, Ort und Remote, Offenheit, Problemlösung) sind eingebaut. Die englischen Fassungen sind meine 1:1-Übersetzung und mit `[TODO_CONTENT: Übersetzung prüfen]` markiert, bitte prüfen und die Marker entfernen.
- Foto: `public/images/about-portrait.jpg` (480 × 640 px, 26 KB) ist ein Ausschnitt deines Fotos, weil im Original andere Gäste zu sehen waren. Die Quelle ist klein und weich (906 × 1600 px). Ein schärferes Porträt wäre besser. Das Repository ist öffentlich: Das Foto ist damit für alle sichtbar.

## Skills (`skills` in `content.de.ts` / `content.en.ts`)

- Skills-Texte: Deutsch ist geliefert und eingebaut. Die englische Fassung ist meine 1:1-Übersetzung und mit `[TODO_CONTENT: Übersetzung prüfen]` markiert, bitte prüfen und den Marker entfernen.
- Skill-Icons: HTML, CSS, JavaScript, TypeScript, Angular und Git stammen aus simple-icons (CC0), weil der Figma-Export nur ein Platzhalter-Icon enthält. Optik bei Bedarf prüfen.

## Portfolio (`portfolio` in `content.de.ts` / `content.en.ts`, `src/app/data/projects.ts`)

- Join und DABubble: Es gibt keine GitHub- und keine Live-URL, deshalb erscheinen für beide keine Buttons. Eintragen in `projects.ts` (`githubUrl`, `liveUrl`), sobald es sie gibt.
- Live-URLs: keine vorhanden, die Live-Buttons werden nicht gerendert. Eintragen in `projects.ts`, sobald die Projekte laufen.
- Vorschaubilder: Laptop-Mockups für El Pollo Loco, Join, DABubble und Pokédex liegen in `public/images/projects/`. Bitte bestätigen, dass die Screenshots darin deine eigenen Projekte zeigen (das Repository `pokedex` ist fast leer).
- Text unter dem Titel Portfolio DE und EN.
- Tags für `El-Pollo-Loco` und `pokedex` stammen aus den Sprachanteilen der Repositories und deinem Skills-Text (Pokédex mit REST-API). Bitte prüfen.

## Testimonials (`src/app/data/testimonials.ts`)

- Es gibt keine echten Testimonials. Die Sektion wird deshalb nicht gerendert (Projektregel: keine erfundenen Zitate). Sobald echte vorliegen, in `TESTIMONIALS` eintragen (Zitat, Name, Rolle, optional Foto). Ab zwei Einträgen erscheinen Pfeile und Punkte automatisch.

## Kontaktformular (`src/app/core/config.ts`, `contact` in `content.de.ts` / `content.en.ts`)

- `CONTACT_ENDPOINT` ist leer, weil der Server noch nicht existiert. Im Entwicklungsmodus (`ng serve`) läuft ein Mock, der Erfolg meldet, aber nichts versendet. Der Produktionsbuild zeigt bewusst eine Fehlermeldung, damit keine Nachricht unbemerkt verloren geht. Endpoint-URL eintragen, sobald der Empfänger steht.
- Empfänger-E-Mail: Vorschlag `phuchienbui2@gmail.com`, bitte bestätigen.
- Kontakt-Text: Deutsch ist eingebaut, die englische Fassung ist meine Übersetzung mit `[TODO_CONTENT: Übersetzung prüfen]` und muss geprüft werden.
- Die Überschrift „Hast du ein Problem zu lösen?“ und der Satz „Suchst du einen Entwickler? Schreib mir!“ sind sinngemäße Übersetzungen der Figma-Texte. Bitte prüfen oder ersetzen.
- Die Datenschutzerklärung (`/privacy-policy`) ist noch ein Platzhalter, bis Phase 10 sie füllt.

## Footer, Impressum und Datenschutz (`legal.de.ts` / `legal.en.ts`, `owner.ts`)

- **Die Rechtstexte sind ein Entwurf, keine Rechtsberatung.** Sie stammen ausschließlich aus den Fakten in `CONTENT_INPUT.md` und müssen vor der Veröffentlichung von dir geprüft werden, gern mit einem Generator oder einer Beratungsstelle.
- Datenschutz, Abschnitt „Hosting“ (Hetzner ist eingetragen): Serverstandort (Deutschland oder Finnland), welche Daten die Logfiles genau enthalten, Löschfrist in Tagen. Bitte bestätigen, dass mit Hetzner ein Vertrag zur Auftragsverarbeitung besteht. Die englische Fassung ist mit `[TODO_CONTENT: Übersetzung prüfen]` markiert.
- Datenschutz, Abschnitt „Kontaktformular“: Anbieter des Postfachs (Name und Anschrift) und Löschfrist in Monaten. Die Aussagen „verschlüsselt per HTTPS“ und „Empfänger ausschließlich ich“ stimmen erst, wenn der Versand eingerichtet ist (`CONTACT_ENDPOINT`). Die englische Fassung ist mit `[TODO_CONTENT: Übersetzung prüfen]` markiert.
- Annahme „keine Analyse- und Tracking-Dienste“ aus `CONTENT_INPUT.md`: Die Seite setzt im Code keine Cookies und nutzt keinen Browser-Speicher. Bitte bestätigen, dass das auch für den Server gilt.
- Impressum: Telefon ist nicht angegeben (nicht erfunden). Wenn für deine Situation weitere Pflichtangaben nötig sind (z. B. Umsatzsteuer-ID, Berufsbezeichnung), ergänzen.
- Die Rechtstexte verwenden Poppins statt Open Sans wie im Figma-Entwurf, damit keine zweite Schrift geladen werden muss.

## Sprachen (Phase 11)

- Die englischen UI-Texte (Navigation, Formular, Meldungen, Footer, Rechtsseiten) stammen von mir. Laut Checkliste (User Story 3) bitte mit deepl.com oder grammarly.com gegenprüfen, die deutschen Texte z. B. mit languagetool.org.
- Die Sprache wird bewusst nicht gespeichert: Die Seite startet immer auf Deutsch. Dadurch bleibt die Aussage der Datenschutzerklärung richtig, dass nichts im Browser abgelegt wird.
- Persönliche Texte (Über mich, Skills, Portfolio, Kontakt) haben beide Sprachen als `[TODO_CONTENT: …]`-Marker, bis du sie lieferst. Die Beschreibungen der Projekte sind von dir bestätigt.

## Responsive und Zugänglichkeit (Phase 12, siehe `docs/responsive-check.md`)

- Bitte bestätige die **Abweichungen vom Figma-Design**, die der Lesbarkeit dienen: dunkler Text auf grünen Buttons (statt weiß), dunkleres Grün für die Tags in den Projektkarten, helleres Violett für kleine violette Texte, helleres Rot für Fehlermeldungen. Wenn du das Design wörtlich willst, ändert man nur wenige Tokens in `_variables.scss`, der Kontrast sinkt dann aber unter die WCAG-AA-Grenze.
- Die Messungen stammen aus Edge (headless), nicht von echten Geräten. Sieh dir die Seite bitte einmal auf deinem Handy und mit Tastatur (Tab) an. Mit Screenreadern wurde nicht getestet.

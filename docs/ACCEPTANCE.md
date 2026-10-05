# Abnahme gegen die Portfolio-Checkliste

Stand: Phase 15. Quelle der Kriterien: `Portfolio Checkliste.md` (8 User Stories). Status: `erfüllt` = von mir geprüft, `teilweise` = Rest hängt an Inhalten oder an dir, `offen` = noch nicht möglich oder nicht vorhanden.

Messmethode: Produktions-Build (`dist/hien-portfolio/browser`) lokal ausgeliefert und mit Edge (headless) auf allen drei Routen, in Deutsch und Englisch, bei 1440×900 und 390×844 geprüft (Konsole, Netzwerk, Überschriften, `alt`, kaputte Bilder, horizontales Scrollen). Lighthouse-Werte stehen in `performance.md`. Nicht geprüft: echte Geräte, Screenreader, andere Browser als Edge/Chrome.

## Zusammenfassung

| User Story | Status |
| --- | --- |
| 1 Design wie in Figma | teilweise |
| 2 Fotos | teilweise |
| 3 Texte, Deutsch und Englisch | teilweise |
| 4 Projekte | offen |
| 5 Social Media | teilweise |
| 6 Domain, HTTPS, Favicon | teilweise |
| 7 Kontaktformular | teilweise |
| 8 Rechtliches | teilweise |

## User Story 1 – Design

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Mobile und Desktop wie in Figma | Pro Sektion Vergleich mit Figma-Daten und den Screenshots (`design-inventory.md`, `figma-cache/`). Das Figma-Kontingent war erschöpft, spätere Korrekturen stützen sich auf die Screenshots. Kein pixelgenauer Abgleich. | teilweise |
| Abstände, Farben, Typografie, Bildgrößen wie im Mockup | Alle Werte aus Tokens in `src/styles/_variables.scss`. Bewusste Abweichungen: dunkler Text auf grünen Buttons, dunkleres Grün auf Weiß, helleres Violett und Rot für Kontrast (`ARCHITECTURE.md`, „Kontrast“). Die Abweichungen sind noch nicht von dir bestätigt. | teilweise |
| Zwischengrößen eigenständig gelöst | Layout bei 320 bis 1920 px ohne Überlauf (`responsive-check.md`), im Abnahmelauf nochmals bei 390 und 1440 px: kein horizontales Scrollen auf allen Routen. | erfüllt |
| Hero 100 % der Viewport-Höhe | `src/app/sections/hero/hero.scss`: `min-height: 100vh`. Ich habe `min-height` statt `height` gewählt, damit Inhalt auf sehr niedrigen Fenstern nicht abgeschnitten wird. Wörtlich verlangt die Checkliste `height: 100vh`. | erfüllt (mit Hinweis) |

## User Story 2 – Fotos

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Hero- und About-Foto vorhanden | About: `images/about-portrait.webp`. Das Hero enthält im Entwurf kein Foto, nur Text und Icons (`hero.html`). Ob Figma im Hero ein Foto vorsieht, habe ich ohne Figma-Zugriff nicht erneut geprüft. | teilweise |
| Keine verzerrten Bilder | Feste Maße über `NgOptimizedImage`, `object-fit: cover` bzw. `contain` (`about.scss`, `project-card.scss`). Im Abnahmelauf keine kaputten Bilder. | erfüllt |
| Max. 500 KB | `npm run check:images`: 71 Bilder, 0 Probleme. Größtes Bild ca. 25 KB (El Pollo Loco). | erfüllt |
| Kein Bild mehrfach | Dasselbe Skript prüft Duplikate über Inhalts-Hash: 0 Funde. | erfüllt |
| Fotos wirken professionell | Das Urteil liegt bei dir. | offen |

## User Story 3 – Texte

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Umschalten DE/EN per Button im Header und im mobilen Menü | `layout/header`, `LanguageService`. Im Abnahmelauf: Klick wechselt `<html lang>` auf allen Routen. Schlüssel-Parität DE/EN per Test (`content.keys.spec.ts`). | erfüllt |
| Echte Texte, kein Lorem Ipsum | Kein Lorem Ipsum im Code. Es stehen noch `[TODO_CONTENT]`-Marker (siehe unten). | teilweise |
| Englisch mit DeepL/Grammarly, Deutsch mit LanguageTool geprüft | Nicht geprüft. Die englischen Texte stammen von mir und sind nicht gegengeprüft. Einzelne Absätze tragen `[TODO_CONTENT: Übersetzung prüfen]`. | offen |

Sichtbare Marker im Abnahmelauf: Startseite DE 1 (Text unter „Portfolio“), Startseite EN 8, Datenschutz DE 5, Datenschutz EN 8, Impressum 0.

## User Story 4 – Projekte

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Live-Link und GitHub je Projekt, eigene Subdomain | GitHub-Links nur für El Pollo Loco und Pokédex (beide mit HTTP 200 geprüft). Für Join und DABubble fehlt die GitHub-URL, für alle vier die Live-URL. Nach Projektregel werden fehlende Buttons nicht gerendert. Subdomains existieren nicht, Server und Domain fehlen. | offen |
| Projekte lassen sich testen, ohne Bugs | Nicht möglich ohne Live-Versionen. | offen |
| Stimmige Vorschaubilder | Vier Laptop-Mockups von dir, WebP. Optik von mir mit Screenshots geprüft, Urteil bei dir. | erfüllt |

## User Story 5 – Social Media

| Kriterium | Beleg | Status |
| --- | --- | --- |
| LinkedIn und GitHub mit https:// | GitHub `https://github.com/Phuchienbui` (HTTP 200). LinkedIn-URL fehlt (`content.de.ts`, `linkedinUrl: ""`), der Link wird deshalb nicht gerendert (Test in `social-links.spec.ts`). | teilweise |
| Keine privaten Netzwerke | Es existieren nur GitHub, E-Mail, LinkedIn. | erfüllt |
| Externe Links sicher | Im Abnahmelauf: kein `target="_blank"`-Link ohne `noopener noreferrer`. | erfüllt |

## User Story 6 – Domain und HTTPS

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Eigene Domain | Noch keine Domain. Platzhalter in `deploy/` und `public/sitemap.xml`. | offen |
| SSL, HTTPS erzwungen | Vorbereitet in `deploy/nginx.conf` (Weiterleitung auf HTTPS, HSTS), nicht auf einem Server getestet. | offen |
| Favicon und Seitentitel individuell | `public/favicon.svg`, `favicon.ico`, `index.html` (Titel „Phuc Hien Bui – Portfolio“). Im Abnahmelauf kein Standardlogo. Die Rechtsseiten behalten denselben Titel wie die Startseite. | erfüllt |

## User Story 7 – Kontaktformular

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Validierung erst beim Verlassen des Feldes | `contact.ts`: Fehler nur bei `touched && invalid`. Test „shows a validation message only after the field was left“. | erfüllt |
| Meldungen ohne Layoutverschiebung | Fester Platz für Fehlertext (`contact.scss`, `min-height`). Test „always renders the message container …“. | erfüllt |
| Senden nur aktiv bei gültigem Formular inkl. Datenschutzhäkchen | `[disabled]="!canSubmit()"`. Tests für ungültig, gültig, fehlendes Häkchen. | erfüllt |
| Autovervollständigung stört Design nicht | `contact.scss`: `:-webkit-autofill`-Regel. Mit echter Browser-Autovervollständigung nicht getestet. | teilweise |
| Klares Feedback nach dem Senden | Erfolg und Fehler mit `role="alert"`, getestet. Im Produktionsbuild ohne `CONTACT_ENDPOINT` meldet das Formular ehrlich einen Fehler und sendet nichts. | teilweise |
| Echter Versand | `CONTACT_ENDPOINT` ist leer, Optionen in `deploy/DEPLOY.md`. | offen |

## User Story 8 – Rechtliches

| Kriterium | Beleg | Status |
| --- | --- | --- |
| Links zu Impressum und Datenschutz im Footer | Footer auf allen Routen, Links `/legal-notice` und `/privacy-policy`. | erfüllt |
| Klar strukturiert, verständlich | Genau ein `h1`, Überschriften lückenlos. Inhalt ist ein Entwurf aus deinen Angaben, keine Rechtsberatung. Offene Marker in Hosting und Kontaktformular. | teilweise |
| Responsiv, gut lesbar | Kein Überlauf bei 390 und 1440 px, Kontrast geprüft (`responsive-check.md`). | erfüllt |

## Qualitätsschranken

| Schranke | Ergebnis |
| --- | --- |
| `ng build` | ohne Fehler und Warnungen (Initial 374,6 kB roh, 95,8 kB Transfer) |
| `npm run lint` | sauber |
| `ng test` | 23 Dateien, 89 Tests grün |
| `npm run check:images` | 71 Bilder, 0 Probleme |
| Konsole und Netzwerk | Keine Fehler, keine Warnungen, keine HTTP-Fehler, 3 Routen × 2 Sprachen × 2 Größen |
| `h1` | genau eins je Seite, Überschriftenfolge ohne Sprünge |
| `alt` | alle 40 Bilder auf der Startseite und 11 auf den Rechtsseiten haben `alt` (dekorativ: leer) |
| Externe Links | 3 GitHub-Adressen geantwortet mit 200. `https://github.com/Phuchienbui/join` liefert 404, steht aber nur in `project-card.spec.ts` als Testdaten, nicht auf der Seite |
| `TODO_CONTENT` gegen `OPEN_ITEMS.md` | Abgleich siehe `OPEN_ITEMS.md` |

## Was nur du prüfen kannst

- Vergleich mit Figma bei 1440 und 390 px und die Kontrast-Abweichungen bestätigen.
- Englische Texte mit DeepL/Grammarly, deutsche mit LanguageTool gegenprüfen.
- Rechtstexte (Impressum, Datenschutz) prüfen und die Marker füllen.
- Seite einmal auf dem Handy und mit der Tastatur durchgehen.
- Live-Links, LinkedIn-URL, GitHub-URLs für Join und DABubble liefern, Domain, Server und Kontaktweg festlegen.

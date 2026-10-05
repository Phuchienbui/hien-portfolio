# Portfolio – Phuc Hien Bui

Portfolio-Website für die Bewerbung als Fachinformatiker für Anwendungsentwicklung. Zweisprachig (Deutsch, Englisch), responsiv, mit Kontaktformular, Impressum und Datenschutzerklärung.

Stack: Angular 22 (Standalone-Komponenten, zoneless, Signals), TypeScript (strict), SCSS, ESLint, Prettier.

## Setup

Voraussetzung: Node.js (siehe `packageManager` in `package.json`) und npm.

```bash
npm ci
npm start
```

Die Seite läuft dann auf `http://localhost:4200/`.

## Skripte

| Befehl | Zweck |
| --- | --- |
| `npm start` | Entwicklungsserver |
| `npm run build` | Produktionsbuild nach `dist/hien-portfolio/browser` |
| `npm run lint` | ESLint (u. a. max. 14 Zeilen pro Funktion, Barrierefreiheit im Template) |
| `npm test -- --watch=false` | Unit-Tests einmalig |
| `npm run check:images` | Bilder höchstens 500 KB, kein Bild doppelt |
| `npm run format` | Prettier |

## Struktur

```
src/app/
  layout/     Header, Footer, Hintergrundformen
  sections/   Hero, About, Skills, Portfolio, Testimonial, Contact
  pages/      Startseite, Impressum, Datenschutz
  shared/     Projektkarte, Skill-Eintrag, Rechtstext-Layout
  core/       Services (Sprache, Content, Kontakt, Social-Links), Konfiguration
  models/     Typen
  data/       Projekte, Skills, Testimonials
  content/    Texte DE/EN, Rechtstexte, Angaben zum Betreiber
src/styles/   Design-Tokens, Breakpoints, Typografie, Reset, Layout
public/       Bilder, Icons, Favicon, robots.txt, sitemap.xml
deploy/       nginx-Konfigurationen und Anleitung
docs/         Architekturentscheidungen, Abnahme, Messungen
```

## Wichtige Entscheidungen

- **Texte als typisierte Wörterbücher** statt im Template: fehlende Übersetzungen fallen beim Kompilieren und im Test auf.
- **Sprache per Signal**, nicht gespeichert: Es werden keine Daten im Browser abgelegt.
- **Mobile-first** mit festen Breakpoints (768, 1024, 1440 px), fließende Größen über `clamp()`.
- **Design-Tokens** in SCSS, keine Hex-Werte in Komponenten.
- **Schriften lokal** (`@fontsource/poppins`), kein Google-CDN.
- **Bilder als WebP** mit `NgOptimizedImage`.
- **Kontaktformular** mit Reactive Forms: Fehler erst nach dem Verlassen eines Feldes, kein Layout-Sprung, Honeypot gegen Bots.

Begründungen und Trade-offs: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Abgleich mit der Abnahme-Checkliste: [docs/ACCEPTANCE.md](docs/ACCEPTANCE.md).

## Deployment

Anleitung für einen eigenen Server mit nginx und HTTPS: [deploy/DEPLOY.md](deploy/DEPLOY.md). Das Kontaktformular verschickt erst Nachrichten, wenn `CONTACT_ENDPOINT` in `src/app/core/config.ts` gesetzt ist.

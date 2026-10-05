# Performance, Bilder und SEO (Phase 13)

**Methode:** Der Produktionsbuild (`ng build`) wurde lokal von einem einfachen Static-Server ausgeliefert (mit denselben Cache-Regeln, die ein echter Host setzen sollte). Gemessen wurde in Chrome über die DevTools: Lighthouse für Barrierefreiheit, Best Practices und SEO, ein Performance-Trace für die Core Web Vitals. Gemessen wurde auf localhost, ohne echten Server, ohne Komprimierung und ohne CDN. Die Werte sind deshalb Richtwerte.

## 1. Ergebnisse

| Messung                        | Desktop | Mobil (390 × 844, CPU 4× langsamer, „Fast 4G“) |
| ------------------------------ | ------- | ---------------------------------------------- |
| Lighthouse Accessibility       | 100     | 100                                            |
| Lighthouse Best Practices      | 100     | 100                                            |
| Lighthouse SEO                 | 100     | 100                                            |
| LCP (Largest Contentful Paint) | 0,25 s  | 1,2 s                                          |
| CLS (Layout-Verschiebung)      | 0,00    | 0,00                                           |

Grenzen der Core Web Vitals: LCP gut bis 2,5 s, CLS gut bis 0,1. Beide Werte liegen deutlich darunter.

**Eine Lücke in der Messung:** Das verfügbare Werkzeug liefert Lighthouse-Kategorien ohne „Performance“ und gibt die Leistung nur als Trace aus. Eine Performance-Zahl von 0 bis 100 liegt deshalb nicht vor. Du kannst sie selbst erzeugen: Produktionsbuild starten (`npx ng build`, dann den Ordner `dist/hien-portfolio/browser` lokal ausliefern) und in Chrome DevTools den Tab „Lighthouse“ nutzen. Oder auf der Kommandozeile `npx lighthouse http://localhost:4400 --view`. Nach den Trace-Werten ist ein Wert über 90 zu erwarten, belegt ist das aber nicht.

**Zusätzlich:** Lighthouse bewertet eine neue Kategorie „Agentic Browsing“ mit 67. Dort fehlt nur eine `llms.txt`. Das ist ein optionaler Vorschlag, kein Teil der Aufgabe, und wurde nicht umgesetzt.

## 2. Maßnahmen

| Bereich                 | Maßnahme                                                                                                                                                                                                               | Wirkung                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Bilder                  | Die vier Projekt-Mockups und das Porträt sind jetzt WebP (Qualität 85, Transparenz bleibt erhalten). Die Originale (PNG/JPG) liegen nicht mehr in `public/`.                                                           | Mockups 487 KB → 83 KB, Porträt 26 KB → 12 KB.                                                 |
| Bilder                  | Inhaltsbilder nutzen `NgOptimizedImage` (`ngSrc`) mit `width`/`height` und Lazy-Loading. Ein `priority`-Bild gibt es nicht, weil die Seite kein Bild im sichtbaren Bereich beim Laden hat (der Hero besteht aus Text). | Kein Layout-Sprung (CLS 0,00), Bilder unterhalb des sichtbaren Bereichs laden erst bei Bedarf. |
| Bilder                  | `npm run check:images` prüft weiter Größe (≤ 500 KB) und Duplikate.                                                                                                                                                    | –                                                                                              |
| Schrift                 | Poppins ist lokal eingebunden (Phase 2), nur Latin-Subset in zwei Schnitten (zusammen 44 KB).                                                                                                                          | Keine Verbindung zu Google.                                                                    |
| Bundle                  | Start-Bundle 374 KB roh, 96 KB übertragen. Rechtsseiten sind eigene Chunks (je ca. 0,5 KB).                                                                                                                            | –                                                                                              |
| Titel und Beschreibung  | `index.html` enthält deutsche Standardwerte (für Suchmaschinen ohne JavaScript). Beim Start und beim Sprachwechsel setzt `App` Titel, Beschreibung und Link-Vorschau-Daten je Sprache.                                 | Eine Sprache gleichzeitig, kein Mischtext.                                                     |
| Open Graph              | `og:type`, `og:site_name`, `og:title`, `og:description`, `og:locale`.                                                                                                                                                  | Ordentliche Link-Vorschau. Ein `og:image` fehlt bewusst (siehe unten).                         |
| Browser-Farbe           | `theme-color` ist der Hintergrund `#141d2f`.                                                                                                                                                                           | Mobile Browserleiste passt zur Seite.                                                          |
| Favicon                 | `favicon.svg` und `favicon.ico` zeigen nur den Text deines Logos („Hie“ mit grünem „n“). Das Angular-Standard-Favicon ist ersetzt.                                                                                     | Eigenes Favicon laut Checkliste.                                                               |
| robots.txt, sitemap.xml | `robots.txt` erlaubt alles. `sitemap.xml` listet Startseite und beide Rechtsseiten mit dem Platzhalter `[TODO_CONTENT: Domain]`.                                                                                       | Muss in Phase 14 mit der echten Domain gefüllt werden.                                         |

## 3. Bewusst nicht gemacht

- **`og:image`:** Es gibt kein Bild, das die Seite vertritt und keine Personen Dritter zeigt. Das Porträt wollte ich nicht ungefragt als Vorschaubild setzen, ein erfundenes Bild kommt nicht in Frage.
- **`canonical` und `og:url`:** Die Domain steht noch nicht fest.
- **AVIF:** WebP reicht für die wenigen Bilder, und WebP wird überall unterstützt.
- **Hero-Bild:** Es gibt keines (das Design hat nur das Foto im About-Bereich).
- **`Sitemap:`-Zeile in `robots.txt`:** Mit Platzhalter ist die Datei ungültig (Lighthouse: SEO 92). Ohne die Zeile ist sie gültig (SEO 100). Die Zeile kommt mit der Domain in Phase 14 dazu.

## 4. Für den echten Server (Phase 14)

- **Komprimierung** (Brotli oder Gzip) für HTML, JS und CSS aktivieren. Das spart auf dem Start-Bundle rund 75 %.
- **Langes Caching** für Dateien mit Hash im Namen (`main-…js`, Schriften, Bilder): `Cache-Control: public, max-age=31536000, immutable`. `index.html` mit `no-cache`.
- **Single-Page-App-Fallback:** Unbekannte Pfade (z. B. `/legal-notice`) müssen `index.html` liefern, sonst ergibt ein direkter Aufruf einen 404-Fehler.

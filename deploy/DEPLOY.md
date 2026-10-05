# Deployment – Anleitung

Diese Anleitung beschreibt, wie das Portfolio auf einem eigenen Linux-Server (Hetzner, Ubuntu) mit nginx und HTTPS veröffentlicht wird. Es werden keine Zugangsdaten im Repository gespeichert.

Platzhalter in den Dateien: `DEINE-DOMAIN.de` (eigene Domain), `PROJEKT` (Name bei Subdomain-Betrieb).

## Dateien im Ordner `deploy/`

| Datei | Zweck |
| --- | --- |
| `nginx-http-only.conf` | Erste Konfiguration nur mit HTTP, nötig zum Ausstellen des Zertifikats |
| `nginx.conf` | Endgültige Konfiguration: HTTPS, Weiterleitung www → ohne www, Caching, Security-Header |
| `nginx-subdomain.conf` | Variante, falls das Portfolio auf einer Subdomain neben anderen Projekten liegt |

## 1. Voraussetzungen

- Ein Server mit Ubuntu und SSH-Zugang (Schlüssel statt Passwort).
- Eine Domain. Beim DNS-Anbieter zwei Einträge setzen: `A` (und `AAAA` bei IPv6) für `DEINE-DOMAIN.de` und für `www` auf die Server-IP.
- Lokal: Node.js und `npm ci` ausgeführt.

## 2. Server einmalig vorbereiten

```bash
sudo apt update && sudo apt install -y nginx certbot
sudo mkdir -p /var/www/hien-portfolio /var/www/certbot
sudo ufw allow OpenSSH && sudo ufw allow "Nginx Full" && sudo ufw enable
```

## 3. Bauen und hochladen

Lokal bauen:

```bash
npm ci
npm run build
```

Das Ergebnis liegt in `dist/hien-portfolio/browser/`. Hochladen als neue Version (Release-Ordner mit Zeitstempel, danach Symlink umsetzen, damit ein Fehler nie die laufende Seite zerstört):

```bash
RELEASE=$(date +%Y%m%d%H%M%S)
ssh USER@SERVER "mkdir -p /var/www/hien-portfolio/releases/$RELEASE"
scp -r dist/hien-portfolio/browser/* USER@SERVER:/var/www/hien-portfolio/releases/$RELEASE/
ssh USER@SERVER "ln -sfn /var/www/hien-portfolio/releases/$RELEASE /var/www/hien-portfolio/current"
```

Rollback: Symlink `current` auf einen älteren Release-Ordner zeigen lassen.

Alte Releases gelegentlich löschen, die letzten drei reichen.

## 4. HTTPS einrichten

1. `nginx-http-only.conf` nach `/etc/nginx/sites-available/hien-portfolio` kopieren, `DEINE-DOMAIN.de` ersetzen, aktivieren:

   ```bash
   sudo ln -s /etc/nginx/sites-available/hien-portfolio /etc/nginx/sites-enabled/
   sudo rm -f /etc/nginx/sites-enabled/default
   sudo nginx -t && sudo systemctl reload nginx
   ```

2. Zertifikat ausstellen:

   ```bash
   sudo certbot certonly --webroot -w /var/www/certbot -d DEINE-DOMAIN.de -d www.DEINE-DOMAIN.de
   ```

3. Den Inhalt von `nginx.conf` an die Stelle von `nginx-http-only.conf` setzen (wieder `DEINE-DOMAIN.de` ersetzen), prüfen und neu laden:

   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   ```

Die automatische Zertifikatserneuerung richtet das Paket `certbot` selbst ein. Test: `sudo certbot renew --dry-run`.

## 5. Was die nginx-Konfiguration bewirkt

- **Single Page App:** `try_files … /index.html` sorgt dafür, dass `/legal-notice` und `/privacy-policy` auch beim direkten Aufruf oder Neuladen funktionieren.
- **Caching:** Dateien mit Hash im Namen (`main-AB12CD34.js`) werden ein Jahr gecacht. `index.html` wird nie gecacht, damit neue Versionen sofort ankommen. Bilder und Icons 30 Tage.
- **Komprimierung:** gzip für Text-Dateien.
- **Security-Header:** `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS.
- **Content-Security-Policy** ist bewusst noch nicht gesetzt. Sie lässt sich erst sinnvoll festlegen, wenn der Kontaktformular-Endpunkt feststeht (siehe unten).
- **HSTS** ist ohne `includeSubDomains` und `preload` gesetzt, damit es sich bei Fehlern leicht zurücknehmen lässt.

## 6. Domain eintragen (nach Kauf der Domain)

Diese Stellen enthalten noch Platzhalter und müssen angepasst werden:

1. `public/sitemap.xml`: `[TODO_CONTENT: Domain]` durch `https://DEINE-DOMAIN.de` ersetzen.
2. `public/robots.txt`: Zeile `Sitemap: https://DEINE-DOMAIN.de/sitemap.xml` ergänzen.
3. `src/index.html`: optional `<link rel="canonical">` und `og:url` ergänzen.
4. Erneut bauen und hochladen.

## 7. Kontaktformular im Live-Betrieb

Das Formular ist im Code fertig, `CONTACT_ENDPOINT` in `src/app/core/config.ts` ist aber leer. Solange er leer ist, läuft ein Mock und es wird **keine** Nachricht versendet. Vor dem Livegang muss einer der folgenden Wege gewählt werden:

| Option | Aufwand | Hinweis |
| --- | --- | --- |
| Formular-Dienst (z. B. Formspree, Web3Forms) | gering | Kein eigener Server-Code. Externer Anbieter, muss in der Datenschutzerklärung genannt werden. |
| Eigenes kleines Backend (Node/Express oder PHP) auf demselben Server | mittel | Volle Kontrolle, Daten bleiben beim Hosting. SMTP-Zugang liegt nur als Umgebungsvariable auf dem Server, nie im Repository. |
| `mailto:`-Link statt Formular | minimal | Kein Versand durch die Seite, aber zuverlässig und ohne Datenverarbeitung. |

Danach `CONTACT_ENDPOINT` setzen, die Datenschutzerklärung (`src/app/content/legal.de.ts` / `legal.en.ts`) an den gewählten Weg anpassen und die Content-Security-Policy so setzen, dass `connect-src` genau diese Adresse erlaubt.

Ein öffentliches Frontend darf **keine** Geheimnisse enthalten: API-Schlüssel oder SMTP-Passwörter gehören nie in den Angular-Code.

## 8. Subdomain-Betrieb (optional)

Soll das Portfolio neben anderen Projekten unter `PROJEKT.DEINE-DOMAIN.de` laufen, `nginx-subdomain.conf` verwenden. Zertifikat mit `certbot certonly --webroot -w /var/www/certbot -d PROJEKT.DEINE-DOMAIN.de` ausstellen. Dateien nach `/var/www/projekte/PROJEKT` kopieren.

## 9. Kontrolle nach dem Livegang

- `https://DEINE-DOMAIN.de` lädt, `http://` und `www` leiten weiter.
- `/legal-notice` und `/privacy-policy` funktionieren nach Neuladen.
- `curl -I https://DEINE-DOMAIN.de` zeigt die Security-Header und `Cache-Control: no-cache` für `index.html`.
- Browser-Konsole ohne Fehler.
- Impressum und Datenschutzerklärung enthalten keine `[TODO_CONTENT]`-Marker mehr (siehe `OPEN_ITEMS.md`).

## 10. Automatische Prüfung (CI)

`.github/workflows/ci.yml` führt bei jedem Push auf `master` und bei Pull Requests Lint, Build, Tests und Bildprüfung aus. Es wird bewusst **nicht** automatisch deployt: Dafür wären Server-Zugangsdaten als GitHub-Secrets nötig. Das lässt sich später ergänzen, sobald Server und Domain feststehen.

## 11. Alternative: Apache-Hosting per FileZilla (Developer Akademie)

Läuft die Seite auf einem Apache-Webhosting ohne eigenen Server (nur FTP-Zugang), entfallen nginx und Zertifikat. Das HTTPS-Zertifikat stellt der Hoster.

1. Lokal bauen: `npm ci` und `npm run build`.
2. In FileZilla mit „Erfordert explizites FTP über TLS“ verbinden. Der Webordner ist der Ordner mit der vorhandenen `index.html`. Auf dem Akademie-Server ist das die Wurzel `/`.
3. **Vorher sichern:** Vorhandene Dateien im Webordner (`index.html`, `robots.txt`, `Download.jpeg`) nach lokal herunterladen und ansehen. Die Projektordner (z. B. `bookstore`, `El pollo loco`) nicht anfassen, nicht löschen und nicht überschreiben.
4. Den **Inhalt** von `dist/hien-portfolio/browser/` in den Webordner hochladen (nicht den Ordner `browser` selbst). Dabei wird `index.html` überschrieben, die Namen der Projektordner kommen im Build nicht vor. **`robots.txt` und `sitemap.xml` nicht hochladen:** Die vorhandene `robots.txt` stammt von der Akademie (`Disallow: /`, sperrt Suchmaschinen für Übungsprojekte) und wird automatisch wiederhergestellt. Auf dieser Adresse wird die Seite deshalb nicht über Suchmaschinen gefunden.
5. `deploy/htaccess.txt` hochladen und auf dem Server in `.htaccess` umbenennen. Sie leitet HTTP auf HTTPS um, lässt `/legal-notice` und `/privacy-policy` nach dem Neuladen funktionieren und setzt das Caching. Bestehende Projektordner bleiben unberührt, weil die Regel nur diese zwei Pfade betrifft.
6. Kontrolle wie in Abschnitt 9. `.htaccess`-Dateien sind in FileZilla nur sichtbar, wenn unter Server → „Anzeige versteckter Dateien erzwingen“ aktiv ist.
7. Danach bei Änderungen: neu bauen und die geänderten Dateien hochladen. Dateien mit Hash im Namen (`main-XXXX.js`) ändern bei jedem Build ihren Namen, die alten kannst du auf dem Server löschen.

Ein Rollback ist hier nicht eingebaut: Behalte den vorherigen Build lokal als Kopie.

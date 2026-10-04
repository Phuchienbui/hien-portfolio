# Responsive- und Zugänglichkeitsprüfung (Phase 12)

**Methode:** Die Seite lief im Entwicklungsserver und wurde in Edge (headless) mit exakt vorgegebener Viewport-Größe geöffnet. Per DevTools-Protokoll wurden das DOM gemessen (Überlauf, Größen, Fokus), echte Tab-Tasten gesendet und Screenshots gemacht. Das Ergebnis lässt sich in Chrome oder Edge nachvollziehen: DevTools (`F12`) → Gerätesymbolleiste (`Strg+Shift+M`) → Breite einstellen.

**Grenzen:** Gemessen wurde in Edge, nicht auf echten Geräten. Mit Screenreadern wurde nicht getestet. Der Text-Kontrast über den unscharfen Hintergrund-Formen lässt sich nicht exakt messen (siehe Abschnitt 4).

## 1. Breiten

Figma liefert nur 390 px (Mobil) und 1440 px (Desktop). Die Zwischenbreiten sind aus dem Designprinzip abgeleitet (Begründung in [ARCHITECTURE.md](ARCHITECTURE.md), Abschnitt „Responsive Feinschliff“).

| Breite                 | Befund                                                                                                                                                                      | Korrektur                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 320 px                 | Horizontaler Überlauf. Im Hero war das Wort „Fachinformatiker“ bei fester Schriftgröße zu breit. Das Skill-Raster hatte drei feste Spalten (342 px) und war 62 px zu breit. | Schriftgrößen im Hero sind fließend (`clamp` mit `vw`). Das Skill-Raster füllt automatisch (`auto-fill`), bei 320 px sind es 2 Spalten. Danach kein Überlauf. |
| 360 px                 | Überlauf durch das Skill-Raster (22 px).                                                                                                                                    | Wie bei 320 px.                                                                                                                                               |
| 390 px                 | Kein Überlauf. Der türkise Hintergrund-Blob lag hinter dem Rollentext (violett auf türkis, Kontrast unbrauchbar).                                                           | Der Blob liegt jetzt in fester Entfernung vom oberen Rand, sodass er über dem Text endet. Mobile Blobs sind abgedunkelt (Deckkraft 0,5).                      |
| 768 px                 | Kein Überlauf. Die mobilen Blobs wuchsen mit der Fensterbreite (143 % von 768 px ≈ 1100 px) und wirkten zu groß.                                                            | Breite jedes Blobs ist auf die Dateigröße begrenzt (`min(143 %, 558 px)` usw.).                                                                               |
| 1024 px                | Kein Überlauf. Ab hier ist die Navigation sichtbar und der Burger verschwindet. Portfolio 2 × 2.                                                                            | Keine nötig.                                                                                                                                                  |
| 1280 px                | Kein Überlauf. Die 9 Skill-Icons stehen in einer Reihe (der Container ist breiter als im Design). Portfolio 2 × 2.                                                          | Keine nötig, entspricht dem Prinzip (Raster füllt den Platz).                                                                                                 |
| 1440 px                | Entspricht dem Design. Kein Überlauf.                                                                                                                                       | Keine nötig.                                                                                                                                                  |
| 1920 px                | Der Desktop-Hintergrund wuchs mit dem Fenster, der violette Blob schob sich unter den Rollentext. Der Inhalt bleibt wie vorgesehen 1240 px breit und zentriert.             | Formen behalten oberhalb von 1440 px ihre Designgröße und werden um die halbe Mehrbreite verschoben, also mit dem Inhalt.                                     |
| 844 × 390 (Handy quer) | Der Hero (feste Höhe `100vh`) schnitt den Inhalt ab.                                                                                                                        | Der Hero hat `min-height: 100vh` und wächst mit dem Inhalt.                                                                                                   |

**Menü-Overlay (Hoch- und Querformat):** Geprüft bei 390 × 844, 320 × 568, 844 × 390 und 667 × 375. In allen Fällen ist der letzte Eintrag erreichbar (bei 667 × 375 scrollt das Overlay um 4 px), die Seite dahinter ist gesperrt, und `Escape` schließt das Menü und gibt das Scrollen wieder frei.

## 2. Touch-Ziele (mindestens 44 × 44 px)

Gemessen wurde die tatsächlich anklickbare Fläche per Treffer-Test (inklusive des unsichtbaren Zusatzbereichs). Die Fläche wird mit dem Mixin `touch-target` ([_touch.scss](../src/styles/_touch.scss)) vergrößert, ohne dass sich das Aussehen ändert.

| Element                             | Vorher          | Nachher                                                           |
| ----------------------------------- | --------------- | ----------------------------------------------------------------- |
| Logo (Header, Footer)               | 74 × 38         | ≥ 74 × 44                                                         |
| Burger                              | 32 × 32         | 44 × 44                                                           |
| Navigationslinks, Sprachbuttons     | Höhe 32         | ≥ 44                                                              |
| Social-Icons (Hero, Footer)         | 30 × 30         | 44 × 44                                                           |
| „Nach unten scrollen“ (Desktop)     | 33 × 121        | ≥ 44 breit                                                        |
| Links der Projektkarten             | 75 × 31 (mobil) | 84 × 45 (mobil), 121 × 60 (Desktop)                               |
| Footer-Links Impressum, Datenschutz | Höhe 23         | ≥ 44                                                              |
| „Nach oben“                         | 39 × 39         | 44 × 44                                                           |
| Karussell-Pfeile und -Punkte        | 40 / 24         | ≥ 44 (derzeit nicht sichtbar, solange es keine Testimonials gibt) |

**Ausnahmen, bewusst so belassen**

- **Datenschutz-Checkbox** (24 × 24): Die ganze Zeile ist mindestens 44 px hoch, und der Text ist ein Label. Ein Tipp auf den Text schaltet die Checkbox. 24 px erfüllt das Minimum von WCAG 2.5.8 (AA).
- **Link „Datenschutzerklärung“ im Fließtext** der Checkbox-Zeile: Inline-Links im Text sind von der Mindestgröße ausgenommen (WCAG 2.5.8).

**Wichtiger Fund während der Messung:** Die Karten-Buttons waren auf Touch-Geräten nicht antippbar. Die unsichtbare Detail-Ebene setzt `pointer-events: none`, und die Buttons haben das geerbt. Die Unit-Tests konnten das nicht erkennen, weil sie keine CSS-Eigenschaften prüfen. Korrigiert: Der Toggle setzt `pointer-events: auto`. Außerdem reagieren die Links einer Karte nur noch, solange die Details sichtbar sind (vorher wären unsichtbare Links klickbar gewesen).

## 3. Tastatur: Fokus und Reihenfolge

Mit echten Tab-Tasten durchlaufen (1440 px, 33 Stopps). Jeder Stopp hat einen sichtbaren Fokusrahmen (global `:focus-visible`, 2 px grün; in den Projektkarten weiß).

Reihenfolge: Logo → Navigation → Sprachwahl → Hero-Button → Social-Icons → „Nach unten“ → Skills-Button → je Projekt Toggle und (falls vorhanden) GitHub-Link → Formularfelder → Datenschutz-Checkbox und -Link → „Nach oben“ → Footer. Das entspricht der visuellen Reihenfolge.

Mit dem Fokus öffnen sich auch die Projekt-Details (`:focus-within`), und `Escape` schließt das Mobil-Menü.

## 4. Farbkontrast (WCAG AA: 4,5 : 1, große Schrift 3 : 1)

Berechnet aus den Token-Farben (Hintergrund `#141d2f`).

| Farbpaar                                                                  | Verhältnis | Ergebnis                            | Maßnahme                                                                                                                           |
| ------------------------------------------------------------------------- | ---------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Weiß auf Hintergrund                                                      | 16,9 : 1   | OK                                  | –                                                                                                                                  |
| Grau (Platzhalter-Marker) auf Hintergrund                                 | 8,3 : 1    | OK                                  | –                                                                                                                                  |
| Grün `#70e61c` auf Hintergrund                                            | 10,5 : 1   | OK                                  | –                                                                                                                                  |
| Cyan auf Hintergrund                                                      | 9,8 : 1    | OK                                  | –                                                                                                                                  |
| Violett `#9747ff` auf Hintergrund                                         | 3,7 : 1    | Nur für große Schrift OK            | Große Texte (Rolle, Überschriften, „anderen Skill?“) bleiben. Für kleinen Text (Datenschutz-Link) neuer Token `#a97bff` (5,6 : 1). |
| Fehlerrot `#e61c40` auf Hintergrund                                       | 3,7 : 1    | Nicht OK                            | Token auf `#f4506a` (5,0 : 1). Das Rot im Design war ohnehin eine Schätzung.                                                       |
| Weiß auf Grün (Hero-Button, Skills-Button, Senden-Button, aktive Sprache) | 1,6 : 1    | Nicht OK                            | Dunkler Text auf Grün (10,5 : 1). **Abweichung vom Design.**                                                                       |
| Grün auf Weiß (Tags der Projektkarten)                                    | 1,6 : 1    | Nicht OK                            | Dunkleres Grün `#2a7d00` (5,2 : 1). **Abweichung vom Design.**                                                                     |
| Weiß auf Violett (Live-Test-Button)                                       | 4,5 : 1    | Knapp OK                            | –                                                                                                                                  |
| Violett auf Weiß (Projekttitel)                                           | 4,5 : 1    | OK                                  | –                                                                                                                                  |
| Schwarz auf Weiß (Projekttext)                                            | 21 : 1     | OK                                  | –                                                                                                                                  |
| Weiß auf Grau (deaktivierter Senden-Button)                               | 2,0 : 1    | Ausgenommen (deaktivierte Elemente) | Text ist dunkel (8,3 : 1), damit er lesbar bleibt.                                                                                 |

**Text über den Hintergrund-Formen:** Hellgrüne Formen hinter weißem Text würden den Kontrast stark senken. Deshalb sind die mobilen Formen abgedunkelt (Deckkraft 0,5), und der grüne Blob liegt hinter dem Foto statt hinter dem Text. Auf dem Desktop liegen die Formen im Design neben dem Text. Genaue Werte sind wegen des Weichzeichners nicht messbar.

## 5. Bewegung (`prefers-reduced-motion`)

- Das sanfte Scrollen zu den Sektionen ist nur bei `prefers-reduced-motion: no-preference` aktiv.
- Das Einblenden der Projekt-Details ist bei reduzierter Bewegung ohne Übergang.
- Weitere Animationen gibt es nicht (nicht vorhanden, per Suche im Code geprüft).

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

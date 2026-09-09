# Operationalizing Data Modernization — Conference Website

This is a static GitHub Pages site built from the October 1, 2026 agenda.

## Files
- `index.html` — home page and agenda
- `session.html` — reusable session-detail page
- `sessions.js` — conference content/data
- `script.js` — page rendering/filtering
- `styles.css` — responsive design

## Adding Teams links and recordings
Open `sessions.js` and add fields such as:
`"teamsUrl":"https://..."` and `"recordingUrl":"https://..."`

Then update the rendering in `script.js` if you want those URLs to appear as active buttons.

For a no-code content workflow later, the data can be moved into a CSV/JSON source or a simple CMS.

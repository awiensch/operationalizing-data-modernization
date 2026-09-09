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


## Current content notes
- Teams links are intentionally placeholders and should be added before the conference.
- Recording placeholders are intentionally shown until recordings are available after the conference.
- The Regenstrief Institute logo is displayed from a hosted image URL; for maximum reliability, you may later upload an approved logo image into the repository and point the site to that local file.

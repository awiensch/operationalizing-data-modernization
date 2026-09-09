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

## v3 updates
- Uses the supplied `regenstrief_horizontal_rgb.png` logo locally, so the Regenstrief Institute logo appears reliably on every page.
- Regenstrief Institute is the prominent host brand in the header, conference hero, and footer.
- The “Operationalizing Data Modernization” title is now in a straight, level bordered box.
- Removed the duplicate “Live session link coming soon” status panel from session pages.
- Kept a single green “Join the session” panel with the language: “The Teams link will be posted here before the conference.”
- Reduced the prominence of “About this site” by removing that large bottom section from the homepage.
- The conference-wide language still states that Teams links will be added before the conference and recordings after the conference.


## v4 fix
This version corrects the deployment/display issues reported after v3:
- Uses `regenstrief-logo.png`, a short local filename.
- Forces the browser to reload the stylesheet with `styles.css?v=4`.
- Constrains the Regenstrief logo to fixed, proportional dimensions in headers and footers.
- Removes the oversized logo from the hero card to prevent cropping.
- Keeps the Regenstrief logo in the header on both the homepage and every breakout-session page.
- Removes the obsolete About navigation link.

## v5 homepage refinement
- Removed the Regenstrief Institute logo from the dark conference/date card beside the date.
- Simplified that card to a cleaner date + conference information layout.
- Kept the Regenstrief Institute logo prominently in the site header and footer.
- Bumped asset versioning to `?v=5`.

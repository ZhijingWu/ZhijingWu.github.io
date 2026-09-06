# Zhijing Wu — academic homepage

Static HTML/CSS for GitHub Pages. No package installation, remote fonts,
or build step is needed. Open `index.html` directly in a browser; keep `style.css`
and `assets/` beside it. GitHub Pages can serve these files from the repository root.

## Files

- `index.html`: profile, education, interests, projects, news, awards, coursework.
- `style.css`: shared palette, typography, desktop/sidebar layout, responsive and print rules.
- `navigation.js`: optional active-section indicator and anchor clearance; anchors work without JavaScript.
- `assets/profile.jpg`: 480 × 600 portrait, cropped from the supplied photo without retouching.
- `assets/favicon.svg`: lightweight ZW monogram favicon.
- `assets/uav-planning.svg`, `language-modeling.svg`, `graph-learning.svg`: original
  conceptual diagrams; they are not screenshots, experimental results, or project evidence.

## Updating content

- The portrait uses a 4:5 crop to remove the upper sign and keep the head, shoulders
  and mountain background. It is resized and JPEG-compressed, without face editing.
  Keep explicit image dimensions when replacing it to avoid layout shifts.
- Once a real CV is available, replace both disabled CV spans with anchors to that
  file. No CV PDF is included. Scholar and LinkedIn are intentionally omitted until
  real profile URLs are supplied.
- Education dates, required-course GPA (not overall GPA), average, rank, and the two
  awards follow the information supplied for this revision.
- Original About paragraphs, existing project descriptions and coursework statuses
  are retained. The three expanded interest cards use the newly supplied descriptions.
- Graph Learning / GNN Preparation is presented as a study plan, not a paper or
  completed research result. Add dates, a repository, or outcomes only when available.
- News contains the supplied MCM milestone. The example GNN completion and research
  preparation dates were not treated as confirmed events.
- To hide News when empty, add `hidden` to both its section and its navigation `li`.
- Publications and its navigation entry already use `hidden`. Add actual entries
  before removing the attribute from both. Do not show empty sections.
- Project dates, Demo and Report links are omitted until supplied. Keep the existing
  GitHub destinations when updating project presentation.

The design independently interprets academic homepage principles: narrow identity
column, broad content area, restrained warm neutrals, serif headings, light research
cards and compact lists. No reference-site text, imagery or code is included.

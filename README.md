# Zhijing Wu — academic homepage

Static HTML/CSS for GitHub Pages. No package installation, remote fonts,
or build step is needed. Open `index.html` directly in a browser; keep `style.css`
and `assets/` beside it. GitHub Pages can serve these files from the repository root.

## Files

- `index.html`: profile, education, interests, projects, news, publications, awards, coursework.
- `style.css`: shared palette, typography, desktop/sidebar layout, responsive and print rules.
- `navigation.js`: optional active-section indicator and anchor clearance; anchors work without JavaScript.
- `assets/profile.jpg`: 480 × 600 portrait, cropped from the supplied photo without retouching.
- `assets/favicon.svg`: lightweight ZW monogram favicon.
- `assets/uav-planning.svg`, `language-modeling.svg`: original
  conceptual diagrams; they are not screenshots, experimental results, or project evidence.
- `assets/graph-learning.svg`: retained unused asset; no preparation project is displayed.

## Updating content

- The portrait uses a 4:5 crop to remove the upper sign and keep the head, shoulders
  and mountain background. It is resized and JPEG-compressed, without face editing.
  Keep explicit image dimensions when replacing it to avoid layout shifts.
- Once a real CV is available, replace the sidebar placeholder with a link and restore
  a top-navigation link. No CV PDF is included. Scholar and LinkedIn are omitted until
  real profile URLs are supplied.
- Education dates, required-course GPA (not overall GPA), average, rank, and the two
  awards follow the information supplied for this revision.
- About and research interests retain the established positioning. CS336 is completed
  independent coursework, including Assignments 1–5; its overview repository is retained.
- Selected Projects contains only the UAV planner and completed CS336 coursework.
  Graph/LLM/agent interests remain in Research Interests; preparation plans and
  upcoming unpublished work are not presented as project achievements.
- News includes the supplied MCM milestone, September 2026 BIBM regular-paper
  acceptance, and CS336 completion. Unconfirmed project plans remain omitted.
- To hide News when empty, add `hidden` to both its section and its navigation `li`.
- Publications and its navigation entry are visible with the supplied accepted
  IEEE BIBM 2026 citation. Add Paper / IEEE Xplore / BibTeX links only after real public
  URLs or files are supplied; the article includes an insertion-point comment.
- Project dates, Demo and Report links are omitted until supplied. Keep the existing
  GitHub destinations when updating project presentation.

The design independently interprets academic homepage principles: narrow identity
column, broad content area, restrained warm neutrals, serif headings, light research
cards and compact lists. No reference-site text, imagery or code is included.

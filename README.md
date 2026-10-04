# Zhijing Wu — academic homepage

Static HTML/CSS for GitHub Pages. No package installation, remote fonts,
or build step is needed. Open `index.html` directly in a browser; keep `style.css`
and `assets/` beside it. GitHub Pages can serve these files from the repository root.

## Files

- `index.html`: profile, education, interests, projects, news, publications, awards.
- `style.css`: shared palette, typography, desktop/sidebar layout, responsive and print rules.
- `navigation.js`: optional active-section indicator and anchor clearance; anchors work without JavaScript.
- `assets/profile.jpg`: 480 × 600 portrait, cropped from the supplied photo without retouching.
- `assets/favicon.svg`: lightweight ZW monogram favicon.
- `assets/uav-planning.svg`, `language-modeling.svg`, `graph-learning.svg`: original
  conceptual diagrams; they are not screenshots, experimental results, or project evidence.
- `assets/Zhijing_Wu_CV.pdf`: supplied CV updated October 4, 2026.

## Updating content

- The portrait uses a 4:5 crop to remove the upper sign and keep the head, shoulders
  and mountain background. It is resized and JPEG-compressed, without face editing.
  Keep explicit image dimensions when replacing it to avoid layout shifts.
- The sidebar links to the supplied CV. Scholar and LinkedIn remain omitted until real URLs are supplied.
- Education dates, required-course GPA (not overall GPA), average, rank, and the two
  awards follow the information supplied for this revision.
- The research identity centers on LLM agents, planning, memory, reliability, and
  structured reasoning. Graph ML is a methodological foundation; systems and
  post-training are supporting tools.
- Projects are ordered: CS336 independent coursework, Graph Machine Learning
  independent study, and the UAV planner. There is no separate coursework section.
- AgentHijack timing work and GTD reproduction appear only as brief independent-study
  News items, without project cards, report links, or collaboration claims.
- News retains the BIBM, CS336, and MCM milestones after the two October 2026 entries.
- To hide News when empty, add `hidden` to both its section and its navigation `li`.
- Publications and its navigation entry are visible with the supplied accepted
  IEEE BIBM 2026 citation. Add Paper / IEEE Xplore / BibTeX links only after real public
  URLs or files are supplied; the article includes an insertion-point comment.
- Project dates, Demo and Report links are omitted until supplied. Keep the existing
  GitHub destinations when updating project presentation.

The design independently interprets academic homepage principles: narrow identity
column, broad content area, restrained warm neutrals, serif headings, light research
cards and compact lists. No reference-site text, imagery or code is included.

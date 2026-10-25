# Zhijing Wu — Academic Homepage

Static homepage at https://zhijingwu.github.io/, deployed from this repository's
`main` branch through GitHub Pages. No build step, external fonts or dependencies.

## Local preview

Run `python -m http.server 8771 --bind 127.0.0.1` from this directory and open
http://127.0.0.1:8771/.

## Design and content

The October 2026 redesign uses a cool gray background, white surfaces, restrained
blue links and system/serif typography. A compact profile card sits beside the
main content on desktop and above it on mobile. Research interests are four
understated cards; six selected projects use brief descriptions and direct
links to full methods, results and limitations.

Section order: About Me, Research Interests, Selected Projects / Research,
Publications, Education & Academic Background (including awards),
News, Contact. Technical skills remain available in a native disclosure.

Featured projects, in order:

1. UAV Inspection Planner — team contribution to topology-aware mission planning,
   start/end replanning and workflow integration; a simulation/research prototype,
   not verified real-flight autonomy.
2. EgoWM Planning Audit — independent audit of an existing world model;
   seed-sensitive rankings and coupled sampling. The prespecified variance target
   was not met; no navigation-success improvement is claimed.
3. Dynamic Web-Agent Reliability — independent controlled browser-UI study.
   Fresh observations prevented tested stale actions, but subsequent retries could
   undo the goal. One UI state machine, not independent websites or physical robots.
4. AgentHijack Timing Extension — independent within-step timing extension of the
   upstream project; three Chrome tasks and uncontrolled sampling. The link stays
   on `exp/within-step-timing`, with its actual research-note PDF.
5. CPC Memory Mechanism Diagnostic — exploratory symbolic mechanism study on ten
   archived worlds. The 250/640 versus 494/640 result belongs to this study, not
   WorldCoder and not the independent ExpeL/WebShop trust-metadata audit. The
   homepage omits the numeric table; the linked evidence retains its provenance.
6. GTD Execution-Semantics Audit — independent reproduction on the fork's
   `reproduction` branch; graph-fidelity changes do not establish task gains.

Cardiff, LATS, ExpeL, ProtocolBench and the former full AutumnBench project entry
are removed from the homepage's featured listing. Their repositories and hosted
assets are not deleted. AutumnBench's latest public release remains in News.
The former inline list of recipient-communication and TabPFN artifacts is replaced
by a GitHub-profile link. The final refinement removes the CS336 coursework block
and its Code link from Education; its repositories and the existing CV are unchanged.

## Evidence checked for the redesign

Read-only source review; no research experiments or inference were run.

| Project | Inspected revision | Main source |
| --- | --- | --- |
| UAV | `7be6d25903d1045ca27bd9693ab3fb891308b151` | README; previously reviewed homepage role description |
| EgoWM | `b337d1de40fbc84d0323c04e8fd19b7131fa1c8f` | README and existing verified audit |
| Dynamic Web-Agent | `ce744f6675279fb68f00de33dadb20020faa6c1b` | README |
| AgentHijack | `9ad209728b11ec957c6aec462567d73878867e72` | timing_study/README.md |
| CPC | `27d911af5b9805b268d07394d209e5d42942c71b` | README |
| GTD | `e89ab32d49a782f7718b125ad096a4cafd7392d7` | README and REPRODUCTION.md |

Publication title, author order, venue and “Regular Paper, Accepted” status match
the existing general CV. No DOI, paper URL or contribution claim is invented.
Education retains B.Eng. in Computer Science, Sep 2025–Jun 2030, required-course
GPA 4.0/4.0, average 94.7 and rank 2/288. Awards match the existing CV; no separate
certificate verification was performed. Existing dated milestones support the
three curated News entries.

## Contact and CV

Email: `zhijingwu.cs@gmail.com`.
LinkedIn: https://www.linkedin.com/in/zhijing-wu-scu/ (user-confirmed final URL).
Both the profile and Contact use Email, GitHub, LinkedIn, CV in that order, with
22px sidebar icons, 44px touch targets, accessible names and native tooltips.
Contact retains compact labeled links. External links open in a new tab with
`rel="noopener noreferrer"`. No social embeds, widgets or trackers.

LinkedIn returned HTTP 999 during automated verification (after normalizing the
trailing slash). No old profile URL was observed, but profile availability and
post-login redirects could not be verified. Preserve the exact user-supplied URL.

The generic CV remains at `assets/Zhijing_Wu_CV.pdf`; its bytes are unchanged.
It reflects an earlier project selection and does not cover every newly featured
study. It has not been rewritten or replaced with a targeted CV.

## Files and maintenance

- `index.html`: semantic content, metadata, navigation and inline social icons.
- `style.css`: responsive layout, palette, focus states and print rules.
- `navigation.js`: existing optional active-section/anchor enhancement, unchanged.
- `assets/profile.jpg`: original portrait, unchanged.
- `assets/favicon.svg`: original ZW monogram in the new palette.
- Existing PDFs and illustrations: retained at their original public paths.

All navigation and content remain usable without JavaScript. Keep future project
summaries short and link to evidence; only add genuine public resources.
Screenshots and verification reports are stored outside the repository.

Baseline: `c86ae17496c325acd853b5a355febb858c8a34f4`, retained locally on
`backup/pre-redesign-live-20261025`. The user authorized the redesign and a normal
push to `main` after visual, factual and functional checks.

## Final visual refinement — 25 October 2026

About uses the user's approved two-paragraph replacement verbatim (with the
existing university link retained). Project selection, order and descriptions,
publication, education figures, awards and technical skills are unchanged.
The visible footer is removed; Contact ends with the existing section padding.
Both project-note labels are “Research Note”; their PDF destinations are unchanged.
The deployed favicon already matches the cool palette, so its SVG bytes are
preserved. The icon reference is versioned (`?v=20261025-2`) to refresh browser
caches. The title is unchanged; theme-color is aligned with the page background.

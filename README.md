# Zhijing Wu — academic homepage

Static HTML/CSS for GitHub Pages, with no build step, external fonts, or framework.
Open `index.html` directly, or run `python -m http.server 8771 --bind 127.0.0.1`
from this directory and visit http://127.0.0.1:8771/.

## Content and hierarchy

The profile centers on how representation, memory, feedback and execution
interfaces shape language-agent behavior and reliability. Four interest areas
cover planning and structured reasoning, experience-based memory, multi-agent
coordination, and execution-grounded evaluation. Graph reasoning and ML systems
remain supporting foundations.

The page contains About, Research Interests, Selected Projects / Research,
Publications, Technical Skills, News and Awards. Navigation also links to the
existing generic CV. No availability line is displayed.

Selected projects, in order:

1. Execution-Reliability Diagnostics of Language Agent Tree Search — independent LATS/WebShop audit.
2. Communication-Cost Sensitivity in LLM Multi-Agent Protocol Assignment — independent ProtocolBench diagnostic.
3. Execution-Semantics Audit of Guided Topology Diffusion — reproduction study.
4. Within-Step Corruption Timing for Computer-Use Agents — independent AgentHijack extension.
5. Trust-Metadata Inheritance in Continually Updated LLM Memory — independent ExpeL follow-up.
6. Language Modeling Systems from Scratch — Stanford CS336 independent study.

All six entries have public GitHub resource links. Projects use open, separated
entries with a question, key evidence, visible scope, and native HTML disclosures
for full descriptions. All original scientific project paragraphs remain in the
disclosures, which work without JavaScript. The existing five projects retain
their relative order and resource URLs.

## LATS evidence and scope

Public artifact: https://github.com/ZhijingWu/LATS-Execution-Reliability-Audit.

- B1: 35/45 invalid generated actions; 32/32 incomplete evaluator scores at the
  100-token cap; no successful purchase in one bounded baseline prefix.
- B2: syntax compliance 0/15 → 15/15; all compliant outputs were `think[...]`,
  with no navigation demonstrated. Each condition used 3 requests × 5 completions.
- B3: complete scores 0/6 at 100 tokens → 6/6 at 300 tokens; native parser agreed
  with only 3/6, with all three mismatches attributable to the digit 5 in `$50`.
- B4: 81/81 private CPU checks; the public artifact contains 64 synthetic tests,
  not the private recorded-response suite. Raw real-model responses are withheld.

The homepage describes these as the audit's recorded results. It does not claim
benchmark-wide prevalence, task-success improvement, a new LATS algorithm,
real mixed-frontier child/value alignment exposure, or endorsement by the original
authors. Public synthetic tests establish the parser mechanism, not independent
reproduction of the withheld real-model observations. No research experiments
were run as part of the homepage update.

## Visual design and files

- `index.html`: content, metadata, navigation, semantic sections, and native disclosures.
- `style.css`: existing warm palette and two-column architecture, refined serif
  heading hierarchy, an open 2×2 interest layout, project index, restrained featured
  entry, subtle separators, visible keyboard focus, and mobile stacking.
- `navigation.js`: unchanged optional active-section and anchor-clearance enhancement.
- `assets/profile.jpg` and `assets/favicon.svg`: unchanged portrait and favicon.
- Existing graph, UAV, and language-model SVGs remain unused assets; they are
  conceptual illustrations, not empirical evidence.
- `assets/Zhijing_Wu_CV.pdf`: unchanged generic CV supplied by the user; both CV
  links retain this filename.
- `homepage_redesign_review.md`: local review scope, factual checks and visual QA.

No new assets, dependencies, fonts or build tooling were introduced. Reduced
motion is respected. Interest areas are questions, independent project evidence
is distinguished from coursework, and publications retain their original status.

## Contact and CV consistency

The user confirmed `zhijingwu.cs@gmail.com` on 12 October 2026. Both visible email
and mailto now use this address, matching the current generic CV.

The generic CV at baseline commit `a83f7fa` already includes ExpeL and the 2026
mathematics award; the earlier README warning about their absence was stale.
It does not yet include LATS. A separate general academic CV update is recommended;
no professor-specific CV was substituted and no PDF was changed here.

Education remains Sichuan University, B.Eng. in Computer Science, Sep 2025–Jun 2030;
required-course GPA 4.0/4.0, average 94.7, rank 2/288. Awards retain MCM (May 2026,
Meritorious Winner) and the mathematics competition First Prize (Sichuan Division,
2026 as recorded in the current CV; no independent certificate review was performed).
BIBM remains “Regular Paper, Accepted,” without invented paper links.

ProtocolBench preserves assignment sensitivity separately from the later
120-workflow latency calibration; the linked public artifact documents the former.
GTD reports graph fidelity, not established task-performance gains. AgentHijack
retains failure/cap and sampling limitations. ExpeL retains its unresolved downstream
finding. CS336 remains independent study of publicly available course materials.

This revision is prepared on `codex/lats-homepage-refinement` for local review.
Publishing requires the user's approval; this task does not commit, push or deploy.

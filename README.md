# Zhijing Wu — academic homepage

Static HTML/CSS for GitHub Pages, with no build step, external fonts, or framework.
Open `index.html` directly, or run `python -m http.server 8771 --bind 127.0.0.1`
from this directory and visit http://127.0.0.1:8771/.

## Content and hierarchy

The profile connects language-agent planning and structured reasoning with
generative world models, reliable decision evaluation, multi-agent coordination
and memory. Independent implementation and controlled evaluation remain the
focus; the homepage does not present a robotics-only identity.

The page contains About, Research Interests, Selected Projects / Research,
Publications, Technical Skills, News and Awards. Navigation also links to the
existing generic CV. No availability line is displayed.

## Research organization

Featured Research:

1. Action-Conditioned World Model Planning Reliability — EgoWM Audit.
2. Execution-Semantics Audit of Guided Topology Diffusion.
3. Sampling Efficiency and Geometric Sensitivity in Cardiff.
4. Within-Step Corruption Timing for Computer-Use Agents (AgentHijack).

Additional Independent Research:

1. Execution-Reliability Diagnostics of Language Agent Tree Search (LATS).
2. Trust-Metadata Inheritance in Continually Updated LLM Memory (ExpeL).
3. Execution and Scoring Semantics in the Public AutumnBench Release.
4. Communication-Cost Sensitivity in LLM Multi-Agent Protocol Assignment (ProtocolBench).

Foundations / Coursework:

1. Language Modeling Systems from Scratch — Stanford CS336 independent study.

All original research descriptions, limitations, project anchors and repository
URLs are retained. Group headings and a small group index replace the flat list;
each project remains visible with evidence and scope, with native disclosures for
the full description. No JavaScript is required to access the research content.
The top navigation and warm 2×2 Research Interests card composition are retained;
the four interest topics now reflect the updated research narrative.

## EgoWM evidence and boundaries

Primary evidence: https://github.com/ZhijingWu/EgoWM-Planning-Audit,
verified against publication commit `b337d1de40fbc84d0323c04e8fd19b7131fa1c8f`.
The README, RESULTS, archived variance statistics, noise-coupling record and
prespecified protocol support the following claims:

- Official EgoWM SVD 3-DoF navigation checkpoint loaded successfully.
- Eight eight-frame rollouts: four frozen actions × seeds 0 and 1, including
  the initial smoke rollout. LPIPS-Alex ranking changed 1–0–2–3 → 0–2–1–3.
- Sixteen additional rollouts: Candidates 0/1 × eight fresh seeds (2–9).
  Total: 24 eight-frame generated rollouts. Noise coupling was verified.
- R = 0.784736026168 did not meet the prespecified R ≤ 0.75 criterion.
  The diagnostic bootstrap interval is approximately 0.026–1.585, not a
  population confidence interval or proof of general variance reduction.
- No measured navigation success, physical action fidelity, calibrated uncertainty
  or new planning algorithm. The result is a local open-loop image comparison.

The project uses one GitHub/evidence link. The inspected publication tree has no
final Technical Note PDF, so no PDF link was added. One October 2026 News entry
records completion and public release without implying paper acceptance.
No model runs, inference or research-repository changes were made in this update.

## Cardiff and AutumnBench

Cardiff's public evidence is at
https://github.com/ZhijingWu/cardiff-sampling-geometry-audit.
The entry links to its two-page Technical Note. It describes an inference-only
Porto study using released diffusion checkpoints: 64 conditions × 3 seeds, fixed
first-stage latents, GPS intervals 20/50, median paired-batch GPS-stage speedup
2.503× (conditional 95% bootstrap interval 2.432–2.692×). Core geometric point
estimates met prespecified margins, while turning tails and individual paths
changed. Road validity and full benchmark reproduction were not established.
No new algorithm or end-to-end acceleration is claimed.

AutumnBench links to the unchanged applicant-supplied two-page note at
`assets/Zhijing_Wu_AutumnBench_Scoring_Audit_Note.pdf`. The bounded audit records
117/117 visible MFP frame matches, official positive/negative scoring checks,
and a released planning witness reaching +1. A source-grounded discrepancy
between historical selection and submission-time scoring is distinguished from
runtime observations. The final CD numerical reward was not retained. Faithful
official reproduction requires author clarification; the entry does not claim
invalid published results, learned-world-model experiments or a validated repair.
No public AutumnBench audit repository is claimed or invented.

Two October 2026 News items distinguish Cardiff's public artifact release from
completion of the bounded AutumnBench audit. Existing News entries remain.

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
  heading hierarchy, warm 2×2 interest cards, research-group headings/index,
  subtle separators, visible keyboard focus, and mobile stacking.
- `navigation.js`: unchanged optional active-section and anchor-clearance enhancement.
- `assets/profile.jpg` and `assets/favicon.svg`: unchanged portrait and favicon.
- Existing graph, UAV, and language-model SVGs remain unused assets; they are
  conceptual illustrations, not empirical evidence.
- `assets/Zhijing_Wu_CV.pdf`: unchanged generic CV supplied by the user; both CV
  links retain this filename.
- `assets/Zhijing_Wu_AutumnBench_Scoring_Audit_Note.pdf`: unchanged two-page note.
- `homepage_update_review.md`: before/after scope, factual checks and visual QA.

The AutumnBench note is the only added asset. No dependencies, fonts or build
tooling were introduced. Reduced
motion is respected. Interest areas are questions, independent project evidence
is distinguished from coursework, and publications retain their original status.

## Contact and CV consistency

The user confirmed `zhijingwu.cs@gmail.com` on 12 October 2026. Both visible email
and mailto now use this address, matching the current generic CV.

The hosted generic CV at baseline commit `c9a6d7b` matches the repository PDF.
It includes LATS, GTD, ExpeL, AgentHijack, ProtocolBench and the 2026 mathematics
award. Its education, accepted BIBM paper and awards are consistent with the
homepage, and its project summaries preserve the same findings and limitations.
It does not include EgoWM, Cardiff or AutumnBench; CS336 is also omitted from its
selected-project list. These are coverage omissions, not conflicting results.
The applicant will supply a finalized general CV separately. This task preserves
the PDF bytes and the existing `assets/Zhijing_Wu_CV.pdf` links.

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

Homepage source remains a lightweight static site. For the October 2026 EgoWM
update, the user authorized a normal push to main after content, link, browser
and diff checks; the generic CV and existing research assets remain unchanged.

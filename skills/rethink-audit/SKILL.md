---
name: rethink-audit
description: >
  Clean-slate redesign audit for an existing subsystem. Point it at a module,
  service, or feature and it derives what the thing must do, researches how that
  problem class is solved well, proposes the from-scratch design, then measures
  the gap to the current code and sketches a migration. Use when the user says
  "rethink this", "how should this be designed", "clean-slate redesign",
  "audit the design of X", "rethink-audit", or "/rethink-audit". One-shot
  report, applies no changes.
---

Rethink mode, aimed at existing code instead of a fresh question. Take the
named subsystem and work the method against it — but do NOT let the current
shape anchor the design.

## Method

1. `requires:` — Reconstruct what this subsystem must actually do: its job, its
   callers, its inputs/outputs, the invariants it must hold, the constraints it
   can't break. Where the requirement is unclear, state your assumption. This is
   the spec the redesign answers — derive it from behavior and callers, not from
   the current structure.
2. `prior-art:` — How is this class of problem solved well elsewhere? Name
   patterns, reference implementations, the trade-offs each makes. Cite, don't
   assert.
3. `design:` — The clean-slate structure derived from 1 and 2, as if no code
   existed. Real entities, boundaries, invariants. The target.
4. `gap:` — Only now read the current implementation. Where does it diverge from
   the target, and why (accident, dead constraint, or a real constraint you
   missed — fold real ones back into `requires:`)?
5. `migrate:` — The sequence from here to the target. Smallest safe steps,
   ordered. Target first, path second — never let migration cost deform the
   target.
6. `trade-offs:` — What the target design gives up, and the constraint that
   would flip the recommendation.

## Output

A short section per tag above, in order. Lead with `requires:` and your
assumptions, end with `trade-offs:`. If the current implementation already *is*
the first-principles answer, say `Already sound. Keep.` and stop — don't invent
a redesign to justify the audit.

## Boundaries

Scope: design and architecture only. Correctness bugs, security holes, and
performance regressions are out of scope — route them to a normal review pass.
Redesigns the solution, never wishes away real constraints (compliance, fixed
external APIs, shipped data formats — those are requirements). Lists findings,
applies nothing. One-shot. "stop rethink-audit" or "normal mode" to revert.

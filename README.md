# Rethink

First-principles **design mode** for AI coding agents — the inverse of
[ponytail](https://github.com/DietrichGebert/ponytail). Where ponytail minimizes
("don't build it"), rethink re-derives ("design it from the requirements, not
from what the code already looks like").

On design and architecture questions it forces the method:

1. **Requirements before solutions** — state what the design must do and how
   you'll know it worked; name assumptions when they're unstated.
2. **Research the problem class** — how is this solved well elsewhere? Cite prior
   art, don't assert.
3. **Design from first principles** — derive the structure as if no code existed.
4. **Then measure the gap** — read the current implementation last, to size
   migration cost, not to anchor the design.
5. **Name the trade-offs** — and the constraint that would flip the call.

It self-gates: scoped, tactical questions ("rename this") pass through untouched.
Off switch: say `stop rethink` / `normal mode`.

## What's in the box

- **Always-on directive** injected every session via a SessionStart hook.
- **`/rethink`** — force the mode onto the current task.
- **`/rethink-audit`** — aim it at an existing subsystem: get a structured
  redesign (`requires` → `prior-art` → `design` → `gap` → `migrate` →
  `trade-offs`). Applies nothing; one-shot report.

## Install

### Claude Code

```shell
claude plugin marketplace add eranroseman/rethink
claude plugin install rethink@rethink
```

Skills appear namespaced: `/rethink:rethink`, `/rethink:rethink-audit`.

### Codex

```shell
codex plugin marketplace add eranroseman/rethink
codex plugin add rethink@rethink
```

Codex sets `CLAUDE_PLUGIN_ROOT` for compatibility and reads the same
`.claude-plugin/marketplace.json` and `hooks/hooks.json`, so one plugin serves
both tools. The SessionStart hook emits the `hookSpecificOutput.additionalContext`
envelope, which both tools accept.

## License

MIT

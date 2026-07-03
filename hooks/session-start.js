#!/usr/bin/env node
// Emit the Rethink directive as SessionStart context.
// ponytail: envelope form because Codex requires {hookSpecificOutput:{additionalContext}};
// Claude Code accepts the same shape, so one output serves both tools.
const fs = require('fs');
const path = require('path');
const root = process.env.CLAUDE_PLUGIN_ROOT || path.resolve(__dirname, '..');
const directive = fs.readFileSync(path.join(root, 'hooks', 'directive.md'), 'utf8');
process.stdout.write(JSON.stringify({
  hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: directive },
}));

// USD per million tokens. Edit any of these to match your actual rates.
//
//   "input"      — fresh input tokens (raw input, not cache-creation).
//   "cacheRead"  — cache-read tokens (the 1M-context cache replays).
//   "cacheWrite" — cache-creation tokens (Anthropic prices at ~1.25x input).
//                  Omit and the code falls back to input * 1.25.
//   "output"     — output + reasoning tokens.
//
// Lookup tries an exact id first, then case-insensitive prefix match against
// the model name (so "claude-opus-4-7-1m" still hits "claude-opus-4-7"),
// then falls back to AI_PRICING.default.
//
// OpenRouter routes through "anthropic/*" generally match Anthropic's
// on-platform list pricing, so those rows mirror the direct entries.
// Edit if your OpenRouter account has a non-standard markup.
// Your subscription. Used to compute the "Nx your plan" ratio shown in $ Cost
// mode. Edit usdPerMonth to match what you actually pay. Set usdPerMonth to 0
// to hide the pill entirely.
window.AI_PLAN = {
  usdPerMonth: 200,
  label: "Max plan",
};

window.AI_PRICING = {
  default: { input: 3, cacheRead: 0.3, cacheWrite: 3.75, output: 15 },
  models: {
    // ── Anthropic, direct (Claude Code / Sonnet / Haiku / Opus families) ──
    // Opus tier
    "claude-opus-4-7":               { input: 5, cacheRead: 0.5, cacheWrite: 6.25, output: 25 },
    "claude-opus-4-6":               { input: 5, cacheRead: 0.5, cacheWrite: 6.25, output: 25 },
    "claude-opus-4-5":               { input: 5, cacheRead: 0.5, cacheWrite: 6.25, output: 25 },
    // Sonnet tier
    "claude-sonnet-4-7":             { input: 3,  cacheRead: 0.3, cacheWrite: 3.75,  output: 15 },
    "claude-sonnet-4-6":             { input: 3,  cacheRead: 0.3, cacheWrite: 3.75,  output: 15 },
    "claude-sonnet-4-5":             { input: 3,  cacheRead: 0.3, cacheWrite: 3.75,  output: 15 },
    // Haiku tier
    "claude-haiku-4-5":              { input: 1,  cacheRead: 0.1, cacheWrite: 1.25,  output: 5  },

    // ── OpenRouter "anthropic/*" routes — mirror direct Anthropic pricing ──
    "anthropic/claude-opus-4.7":     { input: 5, cacheRead: 0.5, cacheWrite: 6.25, output: 25 },
    "anthropic/claude-opus-4.6":     { input: 5, cacheRead: 0.5, cacheWrite: 6.25, output: 25 },
    "anthropic/claude-opus-4.5":     { input: 5, cacheRead: 0.5, cacheWrite: 6.25, output: 25 },
    "anthropic/claude-sonnet-4.7":   { input: 3,  cacheRead: 0.3, cacheWrite: 3.75,  output: 15 },
    "anthropic/claude-sonnet-4.6":   { input: 3,  cacheRead: 0.3, cacheWrite: 3.75,  output: 15 },
    "anthropic/claude-sonnet-4.5":   { input: 3,  cacheRead: 0.3, cacheWrite: 3.75,  output: 15 },
    "anthropic/claude-haiku-4.5":    { input: 1,  cacheRead: 0.1, cacheWrite: 1.25,  output: 5  },

    // ── OpenAI / Codex (rough — edit to match your account) ──
    "gpt-5.5":                       { input: 5,   cacheRead: 0.5,  output: 20 },
    "gpt-5.4":                       { input: 5,   cacheRead: 0.5,  output: 20 },
    "gpt-5.1-codex-mini":            { input: 1.5, cacheRead: 0.15, output: 6  },
    "gpt-5-nano":                    { input: 0.3, cacheRead: 0.03, output: 1.2 },

    // ── Other OpenRouter routes (rough — see openrouter.ai for current rates) ──
    "moonshotai/kimi-k2.6":          { input: 0.6, cacheRead: 0.06, output: 2.5 },
    "deepseek/deepseek-v4-pro":      { input: 1,   cacheRead: 0.1,  output: 4 },
    "minimax-m2.5-free":             { input: 0,   cacheRead: 0,    output: 0 },
  },
};

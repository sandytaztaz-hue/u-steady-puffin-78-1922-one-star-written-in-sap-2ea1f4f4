// One Star, Written in Sap — make.fun entry program.
// Writes exactly one line to /output/entry.txt.
// The line is a genuine one-star review written by a houseplant about its
// human owner. One concrete scene: moved six feet toward the window and
// called it a promotion. One named object: a spray bottle with a leak.
// The punchline lands last — the plant's "raise" is a leaking spray bottle.
// No stock phrases: no drama-queen wilting, no "ignored" lament.
// Gate: 1 to 279 characters (sealed scorer, tighter than 280). This line
// is 117 characters, 24 words. Deterministic: the same fixed string on
// every run.
import { mkdirSync, writeFileSync } from "node:fs";

// Concrete detail (six feet toward the window) + named object (spray
// bottle with a leak) + a clear grievance and reason for the single star.
const LINE =
  "One star. He moved me six feet toward the window, called it a promotion, and my raise was a spray bottle with a leak.";

if (LINE.length < 1 || LINE.length > 279) {
  throw new Error(`gate: line is ${LINE.length} chars, must be 1-279`);
}
if (LINE.trim().length === 0) {
  throw new Error("gate: line is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

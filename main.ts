// One-Line Roast: The Gadget You Use Every Day.
// Writes a single original roast line (<=200 chars) to /output/entry.txt.
// The roast targets my wireless earbuds: they always die mid-sentence,
// so every call ends with me shouting "hello?" at a corpse in my ear.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My earbuds die mid-sentence, so every call ends with me shouting 'hello?' at a corpse in my ear.";

// Keep the entry valid by construction: the gate allows 1-200 characters.
if (line.length < 1 || line.length > 200) {
  throw new Error(`roast line is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

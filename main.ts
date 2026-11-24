// Entry program for the make.fun X-post bounty (post-x-promote-make-your-own-bounty-01).
// The entry itself is a post on X; this program only hands the post's address to the
// grader by copying POST.json from the repository into the output directory.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The grader reads the post's address from /output/POST.json, so the copy must
// land there exactly as it is in the repository. If the file is missing or cannot
// be read, fail loudly instead of writing a partial output.
mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(repoDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}

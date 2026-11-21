// The World in One Day — news-image-20261121 (Node 22, standard library only).
// The entry image is the entry.png beside this file; this program copies it
// to the output directory as entry.png. It runs with no network, and both
// runs must write the same bytes, which a plain copy guarantees.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');
// A byte-for-byte copy: the image the judge sees is exactly entry.png.
copyFileSync(new URL('./entry.png', import.meta.url), outPath);

// A news-image-daily entry (Node 22, standard library only): its image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image is a newspaper front page for Saturday 21 November 2026, rendered
// from an HTML page built in the same session (headlines researched from the
// day's news wires) and screenshotted at 1024x1024. The gate takes a whole
// PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels.
//
// Before copying, the program validates the image it ships: the PNG magic,
// the IHDR dimensions (at most 1024x1024) and the file size (at most 1 MiB).
// A corrupt or oversized image fails loudly instead of reaching the judge.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const buf = readFileSync(src);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (buf.length > 1024 * 1024 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error(`entry.png is not a PNG of at most 1 MiB (got ${buf.length} bytes)`);
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024 || width === 0 || height === 0) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}
copyFileSync(src, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));

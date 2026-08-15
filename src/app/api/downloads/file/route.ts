import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

export const dynamic = "force-dynamic";
const parts = ["Elenii-0.1.0-debug.apk.part-00", "Elenii-0.1.0-debug.apk.part-01"];

export async function GET() {
  const files = parts.map(name => path.join(process.cwd(), "public", "downloads", name));
  const sizes = await Promise.all(files.map(file => stat(file).then(item => item.size)));
  async function* joinedFile() {
    for (const file of files) for await (const chunk of createReadStream(file)) yield chunk;
  }
  return new Response(Readable.toWeb(Readable.from(joinedFile())) as ReadableStream, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": "attachment; filename=\"Elenii-0.1.0-debug.apk\"",
      "Content-Length": String(sizes.reduce((total, size) => total + size, 0)),
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

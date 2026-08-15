import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";
const counterPath = path.join(process.cwd(), "data", "downloads.json");

async function readCount() {
  try { return JSON.parse(await fs.readFile(counterPath, "utf8")).count as number; }
  catch { return 0; }
}

export async function GET() {
  return NextResponse.json({ count: await readCount() }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST() {
  const downloadUrl = process.env.APK_DOWNLOAD_URL;
  if (!downloadUrl) {
    return NextResponse.json({ error: "The prototype download is temporarily unavailable." }, { status: 503 });
  }
  const count = (await readCount()) + 1;
  try { await fs.writeFile(counterPath, JSON.stringify({ count }), "utf8"); }
  catch (error) { console.error("Download counter storage is not writable", error); }
  return NextResponse.json({ count, downloadUrl });
}

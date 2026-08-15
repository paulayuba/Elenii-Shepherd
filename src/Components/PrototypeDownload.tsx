"use client";
import { useEffect, useState } from "react";
import { FaAndroid, FaDownload } from "react-icons/fa";

export default function PrototypeDownload() {
  const [count, setCount] = useState<number | null>(null);
  const [starting, setStarting] = useState(false);
  useEffect(() => { fetch("/api/downloads").then(r => r.json()).then(d => setCount(d.count)).catch(() => null); }, []);
  async function download() {
    setStarting(true);
    try {
      const response = await fetch("/api/downloads", { method: "POST" });
      const data = await response.json();
      setCount(data.count);
      window.dispatchEvent(new CustomEvent("elenii:prototype-download", { detail: { version: "0.1.0" } }));
      const analyticsWindow = window as typeof window & { dataLayer?: Record<string, unknown>[] };
      analyticsWindow.dataLayer?.push({ event: "prototype_download", prototype_version: "0.1.0" });
      window.location.assign(data.downloadUrl);
    } finally { setStarting(false); }
  }
  return <div className="border-y border-slate-300 py-8"><button onClick={download} disabled={starting} className="flex w-full items-center justify-between gap-6 bg-[#071e33] px-6 py-6 text-left text-white disabled:opacity-70 sm:px-8"><span className="flex items-center gap-4"><FaAndroid className="text-3xl text-secondary"/><span><strong className="block text-xl">{starting ? "Preparing download…" : "Download Android prototype"}</strong><small className="mt-1 block text-slate-300">Version 0.1.0 · APK · 130 MB</small></span></span><FaDownload className="shrink-0 text-xl"/></button><div className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-slate-600"><span>{count === null ? "Loading download count…" : `${count.toLocaleString()} download${count === 1 ? "" : "s"} tracked since public testing opened`}</span><span>SHA-256: <code className="break-all">8d06ad57…cd3c65</code></span></div></div>;
}

import Image from "next/image";
import type { Metadata } from "next";
import PrototypeDownload from "@/Components/PrototypeDownload";
import { SitePage } from "@/Components/SitePage";
export const metadata: Metadata = { title: "Download the Android Prototype", description: "Download and test the official Elenii Shepherd Android accessibility prototype, version 0.1.0.", alternates: { canonical: "/prototype" } };

export default function PrototypePage() {
  return <SitePage eyebrow="PUBLIC TEST BUILD" title="Try the Elenii Shepherd Android prototype." intro="The prototype is available for testing so visually impaired users, accessibility practitioners and partners can help shape what comes next.">
    <section className="px-5 py-20"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">VERSION 0.1.0</p><h2 className="section-title">A working prototype—not a finished consumer release.</h2><p className="body-copy">This debug build is intended for evaluation and field feedback. Because it is distributed directly, Android may ask you to allow installation from your browser or file manager.</p><PrototypeDownload/><div className="mt-8 border-l-4 border-secondary pl-5 text-sm leading-6 text-slate-600"><strong className="text-slate-950">Before installing:</strong> only download the APK from this official page. The current build may contain unfinished functionality, and testers should avoid relying on it as their only navigation aid.</div></div><div className="relative min-h-[580px]"><Image src="/media/community-testing.jpeg" alt="A participant testing the Elenii Shepherd wearable prototype" fill className="object-cover" sizes="40vw"/></div></div></section>
  </SitePage>;
}

import Link from "next/link";
import type { Metadata } from "next";
import DailyNote from "@/Components/DailyNote";
import { SitePage } from "@/Components/SitePage";
export const metadata: Metadata = { title: "Partnership and Programme Opportunities", description: "Partner with Elenii Shepherd on accessibility research, hardware development, mentorship, media and the upcoming visually impaired-centred incubator.", alternates: { canonical: "/opportunities" } };
const openings = [
  ["Research & user testing", "Open", "NAB chapters, schools, universities and organisations of persons with disabilities can host or join accessible research sessions."],
  ["Mentors & coaches", "Expressions of interest", "Business, finance, marketing and product practitioners can support the entrepreneurship pathway."],
  ["Hardware collaboration", "Open", "Engineers, manufacturers and assistive-technology specialists can help refine the wearable for practical production."],
  ["Funding & programme partners", "Open", "Funders and development partners can support accessible curriculum, devices, participant support and venture pathways."],
  ["Media & documentary", "Open", "Journalists and storytellers can request interviews, field access, product demonstrations and background material."],
];
export default function OpportunitiesPage() { return <SitePage eyebrow="OPPORTUNITIES" title="There is room in this work for you." intro="Current routes for collaborators, mentors, researchers, funders, journalists and accessibility communities to take part.">
  <section className="px-5 py-20"><div className="mx-auto max-w-7xl"><DailyNote/><div className="mt-16">{openings.map(([title,status,text])=><article key={title} className="grid gap-5 border-t border-slate-300 py-8 md:grid-cols-[1fr_180px_1.5fr]"><h2 className="text-2xl font-bold">{title}</h2><div><span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800"><span className="h-2 w-2 rounded-full bg-emerald-500"/>{status}</span></div><p className="leading-7 text-slate-600">{text}</p></article>)}</div><div className="mt-12 bg-secondary p-8 sm:p-12"><p className="text-sm font-bold uppercase tracking-[.16em]">Launching later in 2026</p><h2 className="mt-4 max-w-3xl text-3xl font-bold">The Elenii Shepherd Incubator is the next major programme.</h2><p className="mt-5 max-w-2xl leading-7 text-slate-800">The programme will support visually impaired entrepreneurs through accessible training, mentorship, venture development, pitching and funding pathways. Programme, mentorship, accessibility and funding partnerships are open now; participant applications will be announced separately.</p><Link href="/contact" className="mt-7 inline-block border-b-2 border-slate-950 pb-1 font-bold">Build the incubator with us →</Link></div></div></section>
  </SitePage>; }

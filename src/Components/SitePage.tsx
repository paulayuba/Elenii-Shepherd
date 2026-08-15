import Navbar from "./Navbar";
import { Footer } from "./Footer";

export function SitePage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#f7f4ed] text-slate-950"><Navbar/><header className="border-b border-slate-300 px-5 pb-16 pt-36"><div className="mx-auto max-w-7xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[1.02] tracking-[-.045em] sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{intro}</p></div></header>{children}<Footer/></main>;
}

import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return <footer className="bg-[#061a2c] px-5 py-14 text-white"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
    <div className="max-w-md"><Image src="/media/wordmark-white.webp" alt="Elenii Shepherd" width={270} height={72} className="mb-6 h-16 w-auto"/><p className="leading-relaxed text-slate-300">Building accessible technology and entrepreneurship pathways with visually impaired people across Nigeria.</p></div>
    <div><h2 className="mb-4 font-bold">Explore</h2><div className="space-y-3 text-sm text-slate-300"><Link className="block hover:text-white" href="/about">About</Link><Link className="block hover:text-white" href="/work">Our work</Link><Link className="block hover:text-white" href="/gallery">Gallery</Link><Link className="block hover:text-white" href="/opportunities">Opportunities</Link></div></div>
    <div><h2 className="mb-4 font-bold">Stay connected</h2><p className="mb-4 text-sm leading-relaxed text-slate-300">Follow current field work, programme news and partnership updates from the team.</p><a href="https://ng.linkedin.com/company/elenii-shepherd" target="_blank" rel="noreferrer" className="block font-semibold text-secondary hover:underline">Follow on LinkedIn ↗</a><Link href="/contact" className="mt-3 block font-semibold text-secondary hover:underline">Contact the team →</Link></div>
  </div><div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">© {new Date().getFullYear()} Elenii Shepherd. Built for inclusion.</div></footer>;
}

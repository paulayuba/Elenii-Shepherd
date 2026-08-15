"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
const links = [["About", "/about"], ["Our work", "/work"], ["Gallery", "/gallery"], ["Opportunities", "/opportunities"], ["Test the app", "/prototype"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
      <Link href="/" className="block" aria-label="Elenii Shepherd home"><Image src="/media/wordmark-black.webp" alt="Elenii Shepherd" width={225} height={60} className="h-12 w-auto" priority/></Link>
      <div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-primary">{label}</Link>)}<Link href="/contact" className="border-b-2 border-secondary px-1 py-2 text-sm font-bold text-slate-900">Talk to us</Link></div>
      <button className="rounded-lg p-2 text-2xl md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <HiX/> : <HiOutlineMenuAlt3/>}</button>
    </nav>
    {open && <div className="border-t border-slate-100 bg-white px-5 pb-6 md:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-4 font-semibold">{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-5 block border-b-2 border-secondary px-1 py-3 text-center font-bold">Talk to us</Link></div>}
  </header>;
}

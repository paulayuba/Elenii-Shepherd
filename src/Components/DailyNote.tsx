"use client";
const notes = [
  "Accessibility designed for perfect connectivity will fail people where connectivity is imperfect.",
  "More than 80 visually impaired participants shaped the early direction of Elenii Shepherd's work.",
  "The wearable began with a practical question: how can obstacle sensing become affordable enough for everyday use?",
  "Inclusion is not charity. It is investment in human potential.",
  "A useful assistive device can support independence; business opportunity can support economic independence.",
  "The incubator is being designed around entrepreneurial potential—not university qualifications.",
  "People affected by accessibility barriers should be part of designing and leading the solutions.",
];
export default function DailyNote() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const day = Math.floor((today.getTime() - start.getTime()) / 86400000);
  return <aside className="border-y border-slate-300 py-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">A thought for today · {today.toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}</p><p className="mt-4 max-w-4xl text-2xl font-semibold leading-snug sm:text-3xl">{notes[day % notes.length]}</p></aside>;
}

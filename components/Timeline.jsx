import Container from "./Container";

const EVENTS = [
  {
    title: "Upisi & nastava u vrtiću Videk i Maslačak (sve lokacije)",
    date: "08.09. – 26.09.",
    note: "Info telefonski"
  },
  {
    title: "Upisi na lokaciji (II Rakitovec br. 3, Zaprešić)",
    date: "22.09.",
    note: "17–20h"
  },
  {
    title: "Početak nastave",
    date: "Srijeda, 01.10.2025.",
    note: ""
  }
];

export default function Timeline() {
  return (
    <section id="raspored" className="py-16">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl">Raspored upisa</h2>
          <p className="mt-3 text-white/70">
            Ključni datumi i gdje nas možete pronaći.
          </p>
        </div>

        <ol className="mt-10 relative border-l border-white/15 pl-6 space-y-8">
          {EVENTS.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
              <div className="glass rounded-2xl p-5">
                <div className="text-sm text-brand-200">{e.date}</div>
                <div className="font-semibold mt-1">{e.title}</div>
                {e.note && <div className="text-sm text-white/70 mt-1">{e.note}</div>}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

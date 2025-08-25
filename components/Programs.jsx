import Container from "./Container";

const PROGRAMS = [
  {
    title: "Škola",
    subtitle: "1. razred na dalje",
    desc:
      "Sustavne jezične radionice i priprema za školu uz jasne ciljeve i evaluaciju.",
    cta: "Upiši se",
    href: "/upisi"
  },
  {
    title: "Predškola",
    subtitle: "4–7 g",
    desc:
      "Uvod u jezik kroz igru, pjesmu i pokret. Razvijamo znatiželju i sigurnost u izražavanju.",
    cta: "Upiši se",
    href: "/upisi"
  },
  {
    title: "Bebaonica",
    subtitle: "2–4 g",
    desc:
      "Kratke, ritmične aktivnosti prilagođene najmlađima – prvi koraci u jeziku.",
    cta: "Upiši se",
    href: "/upisi"
  },
  {
    title: "Znanstvene radionice",
    subtitle: "",
    desc:
      "Djeca istražuju svijet znanosti kroz zabavne eksperimente i timski rad.",
    cta: "Saznaj više",
    href: "/upisi"
  },
  {
    title: "Rođendani",
    subtitle: "",
    desc:
      "Edukativni, tematski rođendani – zabava i učenje u istom paketu.",
    cta: "Rezerviraj termin",
    href: "/kontakt"
  }
];

const SUBJECTS = [
  "Engleski jezik",
  "Njemački jezik",
  "Talijanski jezik",
  "Hrvatski jezik",
  "Matematika",
  "Fizika",
  "Informatika",
  "Povijest",
  "Geografija"
];

export default function Programs() {
  return (
    <section id="programi" className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl">Programi & Instrukcije</h2>
          <p className="mt-4 text-white/75">
            Od bebaonice do škole – jasno strukturirani programi i individualni
            pristup. Instrukcije dostupne za jezične i STEM predmete.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <article key={p.title} className="glass rounded-3xl p-6 gradient-border">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              {p.subtitle && (
                <p className="text-brand-200 mt-1">{p.subtitle}</p>
              )}
              <p className="mt-3 text-sm text-white/80">{p.desc}</p>
              <a
                href={p.href}
                className="mt-5 inline-flex rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold hover:bg-white"
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl">Instrukcije</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {SUBJECTS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

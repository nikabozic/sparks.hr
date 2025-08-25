import Link from "next/link";
import Container from "./Container";

export default function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="glass rounded-3xl p-10 md:p-14 text-center gradient-border">
          <h3 className="font-display text-3xl md:text-4xl">
            Spremni za prve iskre znanja?
          </h3>
          <p className="mt-3 text-white/75">
            Upišite dijete na Engleski, Njemački ili Talijanski – ili rezervirajte
            instrukcije iz željenog predmeta.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/upisi"
              className="rounded-full bg-brand-500 hover:bg-brand-400 text-black font-semibold px-6 py-3"
            >
              Upisi
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-white/20 hover:bg-white/10 px-6 py-3"
            >
              Postavi pitanje
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

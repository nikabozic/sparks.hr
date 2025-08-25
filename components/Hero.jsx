import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { BrandBadge } from "./Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <BrandBadge>jezik kroz učenje i igru</BrandBadge>
            <h1 className="mt-6 font-display text-5xl md:text-6xl leading-tight">
              SPARKS
              <span className="block text-brand-300">Zaprešić</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Engleski, njemački, talijanski i hrvatski za djecu i školarce.
              Instrukcije iz: matematike, fizike, informatike, povijesti,
              geografije. Učenje kroz igru, eksperimente i male uspjehe svaki
              sat. 💡
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/upisi"
                className="rounded-full bg-brand-500 hover:bg-brand-400 text-black font-semibold px-6 py-3 shadow-glass"
              >
                Upisi otvoreni
              </Link>
              <Link
                href="#programi"
                className="rounded-full border border-white/20 hover:border-white/40 px-6 py-3"
              >
                Pogledaj programe
              </Link>
            </div>

            <ul className="mt-8 text-sm text-white/70 space-y-1">
              <li>📍 II Rakitovec br. 3, Zaprešić</li>
              <li>📞 098 714 998 (Nives – Nina)</li>
            </ul>
          </div>

          <div className="relative">
            <div className="gradient-border glass p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-4">
                <Image src="/puppy.svg" alt="Sparks puppy" width={80} height={80} />
                <div>
                  <h3 className="font-display text-2xl">Teacher Nina</h3>
                  <p className="text-white/75">
                    Strpljenje, kreativnost i individualan pristup svakom djetetu.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="glass rounded-2xl p-4">
                  <p className="text-white/60">Upisi & nastava u vrtiću Videk i Maslačak</p>
                  <p className="mt-2 font-semibold">08.09. – 26.09. (info telefonski)</p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <p className="text-white/60">Upisi na lokaciji</p>
                  <p className="mt-2 font-semibold">22.09. 17–20h (II Rakitovec 3)</p>
                </div>
                <div className="col-span-2 glass rounded-2xl p-4">
                  <p className="text-white/60">Početak nastave</p>
                  <p className="mt-2 font-semibold">Srijeda, 01.10.2025.</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -right-12 -bottom-12 h-64 w-64 rounded-full blur-3xl bg-brand-600/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}

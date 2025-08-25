import Container from "./Container";
import Image from "next/image";

export default function Instructors() {
  return (
    <section id="nina" className="py-20">
      <Container className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-4xl">Teacher Nina</h2>
          <p className="mt-4 text-white/80">
            Nives – Nina vodi SPARKS programe i brine da svako dijete napreduje
            vlastitim tempom. Puno pokreta, igre i eksperimenta – malo stresa.
          </p>
          <ul className="mt-6 text-sm text-white/80 space-y-2">
            <li>📞 098 714 998</li>
            <li>✉️ sparks@gmail.com</li>
            <li>📍 II Rakitovec br. 3, Zaprešić</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="gradient-border glass rounded-3xl p-6 flex items-center gap-6">
            <Image src="/puppy.png" alt="Maskota" width={96} height={96} />
            <div>
              <p className="text-white/70">“Djeca kroz igru uče najbrže.”</p>
              <p className="mt-2 font-semibold">– Nina</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

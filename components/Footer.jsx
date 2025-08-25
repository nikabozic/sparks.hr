import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <Container className="py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/sparks-logo.svg" height={32} width={32} alt="SPARKS" />
            <span className="font-display text-xl">SPARKS</span>
          </div>
          <p className="mt-3 text-white/70">
            jezik kroz učenje i igru
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-1 text-white/80">
            <li>II Rakitovec br. 3, Zaprešić</li>
            <li>098 714 998 (Nives – Nina)</li>
            <li>
              <a href="mailto:sparks@gmail.com" className="hover:text-brand-200">
                sparks@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Brzi linkovi</h4>
          <ul className="space-y-1">
            <li><Link href="/#programi" className="hover:text-brand-200">Programi</Link></li>
            <li><Link href="/upisi" className="hover:text-brand-200">Upisi</Link></li>
            <li><Link href="/kontakt" className="hover:text-brand-200">Kontakt</Link></li>
          </ul>
        </div>
      </Container>
      <div className="text-center text-xs text-white/50 pb-8">
        © {new Date().getFullYear()} SPARKS • Dizajn & izrada
      </div>
    </footer>
  );
}

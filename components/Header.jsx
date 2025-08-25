import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/sparks-logo.svg" width={36} height={36} alt="SPARKS" />
          <span className="font-display text-xl tracking-wide">SPARKS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#programi" className="hover:text-brand-200">Programi</Link>
          <Link href="/#raspored" className="hover:text-brand-200">Raspored</Link>
          <Link href="/#nina" className="hover:text-brand-200">Teacher Nina</Link>
          <Link href="/upisi" className="hover:text-brand-200">Upisi</Link>
          <Link href="/kontakt" className="hover:text-brand-200">Kontakt</Link>
          <Link
            href="/upisi"
            className="ml-2 rounded-full bg-brand-500 hover:bg-brand-400 text-black font-semibold px-4 py-2"
          >
            Prijavi dijete
          </Link>
        </nav>
      </Container>
    </header>
  );
}

"use client";

import Container from "@/components/Container";
import { useState } from "react";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form))
    });
    setSent(true);
  }

  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl">Kontakt</h1>
        <p className="mt-3 text-white/75">
          Pošaljite poruku ili nas nazovite.
        </p>

        {sent ? (
          <div className="mt-8 glass rounded-2xl p-6">
            Hvala na poruci! Javit ćemo se uskoro. ✔️
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 glass rounded-3xl p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required name="ime" placeholder="Vaše ime" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
              <input required name="email" type="email" placeholder="E-mail" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
            </div>
            <input name="telefon" placeholder="Telefon (opcionalno)" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
            <textarea required name="poruka" placeholder="Poruka" rows={5} className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
            <button className="rounded-full bg-brand-500 hover:bg-brand-400 text-black font-semibold px-6 py-3">
              Pošalji
            </button>
          </form>
        )}

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
          <div className="glass rounded-2xl p-4">
            <div className="text-white/60">Telefon</div>
            <div className="font-semibold">098 714 998</div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="text-white/60">E-mail</div>
            <a className="font-semibold hover:text-brand-200" href="mailto:sparks@gmail.com">sparks@gmail.com</a>
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="text-white/60">Adresa</div>
            <div className="font-semibold">II Rakitovec br. 3, Zaprešić</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

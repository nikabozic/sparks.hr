"use client";

import Container from "@/components/Container";
import { useState } from "react";

export default function Upisi() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(form)),
      headers: { "Content-Type": "application/json" }
    });
    setSent(true);
  }

  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl">Upisi</h1>
        <p className="mt-3 text-white/75">
          Ispunite obrazac – javit ćemo se telefonom za potvrdu termina i grupe.
        </p>

        {sent ? (
          <div className="mt-8 glass rounded-2xl p-6">
            Hvala! Vaša prijava je zaprimljena. Očekujte naš poziv. ✔️
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 glass rounded-3xl p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required name="imeRoditelja" placeholder="Ime i prezime roditelja" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
              <input required name="kontakt" placeholder="Telefon ili e-mail" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input required name="imeDjeteta" placeholder="Ime djeteta" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
              <input required name="dob" placeholder="Dob (npr. 6)" className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
            </div>
            <select name="program" className="bg-transparent border border-white/20 rounded-xl px-4 py-3">
              <option className="bg-black">Škola</option>
              <option className="bg-black">Predškola</option>
              <option className="bg-black">Bebaonica</option>
              <option className="bg-black">Instrukcije</option>
              <option className="bg-black">Znanstvene radionice</option>
            </select>
            <select name="jezik" className="bg-transparent border border-white/20 rounded-xl px-4 py-3">
              <option className="bg-black">Engleski</option>
              <option className="bg-black">Njemački</option>
              <option className="bg-black">Talijanski</option>
              <option className="bg-black">Hrvatski</option>
              <option className="bg-black">— bez jezika / samo instrukcije</option>
            </select>
            <textarea name="napomena" placeholder="Napomena" rows={4} className="bg-transparent border border-white/20 rounded-xl px-4 py-3" />
            <button className="mt-2 rounded-full bg-brand-500 hover:bg-brand-400 text-black font-semibold px-6 py-3">
              Pošalji prijavu
            </button>
          </form>
        )}

        <div className="mt-10 text-sm text-white/70">
          Alternativno: nazovite <strong>098 714 998</strong> (Nives – Nina).
        </div>
      </Container>
    </section>
  );
}

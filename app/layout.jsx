export const metadata = {
  title: "SPARKS – jezik kroz učenje i igru",
  description:
    "Upisi u SPARKS: Engleski, Njemački, Talijanski, Hrvatski + instrukcije iz STEM predmeta u Zaprešiću. Teacher Nina.",
  openGraph: {
    title: "SPARKS – jezik kroz učenje i igru",
    url: "https://sparks.hr",
    type: "website"
  }
};

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body className="min-h-screen bg-luxe text-white antialiased">
        <div className="absolute inset-0 pointer-events-none">
          {/* dekorativne zvjezdice */}
          <div className="star absolute left-8 top-12"></div>
          <div className="star absolute right-16 top-24"></div>
          <div className="star absolute left-1/3 bottom-20"></div>
        </div>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

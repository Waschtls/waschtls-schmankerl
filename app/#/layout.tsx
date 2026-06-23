import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BetaBanner from './components/BetaBanner';

export const metadata: Metadata = {
  title: {
    default: "Waschtl's Schmankerl – Glutenfrei & aus Augsburg",
    template: "%s | Waschtl's Schmankerl",
  },
  description:
    'Glutenfreie Rezepte und ehrliche Tipps von einer Augsburger Familie, die Zöliakie kennt. Bayerisch-schwäbisch, bodenständig, lecker.',
  keywords: ['glutenfrei', 'Zöliakie', 'Kinder', 'Rezepte', 'Augsburg', 'bayerisch', 'glutenfreie Ernährung'],
  authors: [{ name: 'Sebastian Klug' }],
  openGraph: {
    siteName: "Waschtl's Schmankerl",
    type: 'website',
    locale: 'de_DE',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
        <BetaBanner />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BetaBanner from './components/BetaBanner';

const BASE_URL = 'https://www.waschtls-schmankerl.de';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Waschtls Schmankerl – Glutenfreie Rezepte für Familien",
    template: "%s | Waschtls Schmankerl",
  },
  description:
    'Glutenfreie Rezepte und ehrliche Tipps von einer Augsburger Familie mit Zöliakie. Bayerisch bodenständig – vom Schnitzel bis zur Kässpatzen, alles glutenfrei.',
  keywords: [
    'glutenfrei', 'Zöliakie', 'Kinder', 'Rezepte', 'Augsburg', 'bayerisch',
    'glutenfreie Ernährung', 'Zöliakie Kinder', 'glutenfreie Rezepte Familie',
    'glutenfrei kochen', 'Zöliakie Rezepte', 'glutenfrei backen',
  ],
  authors: [{ name: 'Waschtl', url: BASE_URL }],
  creator: "Waschtls Schmankerl",
  publisher: "Waschtls Schmankerl",
  openGraph: {
    siteName: "Waschtls Schmankerl",
    type: 'website',
    locale: 'de_DE',
    url: BASE_URL,
    title: "Waschtls Schmankerl – Glutenfreie Rezepte für Familien",
    description: 'Glutenfreie Rezepte und ehrliche Tipps von einer Augsburger Familie mit Zöliakie.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Waschtls Schmankerl – Glutenfreie Rezepte für Familien",
    description: 'Glutenfreie Rezepte und ehrliche Tipps von einer Augsburger Familie mit Zöliakie.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: BASE_URL },
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

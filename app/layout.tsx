import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const BASE_URL = 'https://www.waschtls-schmankerl.de';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Waschtls Schmankerl – Glutenfreie Rezepte für Familien",
    template: "%s | Waschtls Schmankerl",
  },
  description:
    'Glutenfreie Rezepte und ehrliche Tipps von einer Augsburger Familie mit Zöliakie. Bayerisch bodenständig – vom Schnitzel bis zur Kässpatzen, alles ohne Gluten.',
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
    // url wird NICHT global gesetzt – jede Seite erbt ihren eigenen Pfad via metadataBase
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
  // alternates.canonical wird NICHT global gesetzt – jede Seite definiert ihre eigene canonical via metadata.
  // Eine globale canonical auf BASE_URL würde alle Unterseiten als Duplikate der Startseite markieren.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import ProdukteClient from './ProdukteClient';

export const metadata: Metadata = {
  title: 'Glutenfreie Produktempfehlungen – Waschtls Schmankerl',
  description:
    'Unsere ehrlichen Empfehlungen: Mehle, Nudeln, Snacks, Backzutaten und Küchenzubehör – was wir zuhause wirklich verwenden.',
};

export default function ProdukteSeite() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Produkte
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Unsere Produktempfehlungen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Nur was wir selbst verwenden und für gut befunden haben. Keine Werbung ohne Überzeugung.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
            Affiliate-Links sind als „Anzeige" gekennzeichnet. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
          </p>
        </div>
      </section>
      <ProdukteClient />
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Vorratskiste – Convenience-Produkte für Zöliakie-Familien',
  description:
    'Glutenfreie Fertigprodukte die wirklich funktionieren: Falafel, Gnocchi, Schlemmerfilet, TK-Pizza und mehr. Mit Nährwertinfos und ehrlichen Einschätzungen.',
};

export default function VorratskisteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

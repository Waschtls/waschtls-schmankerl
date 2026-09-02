// ── Neuigkeiten ───────────────────────────────────────────────────────────────
// Wird auf der Startseite als "Neu auf der Seite" angezeigt (letzte 5 Einträge).
//
// Neues Rezept / Artikel / Seite veröffentlicht?
// → Hier oben einen neuen Eintrag einfügen, älteren unten rausnehmen.
// Datum: 'Monat Jahr' z.B. 'September 2026'

export type Neuigkeit = {
  datum: string;
  typ: 'Rezept' | 'Wissen' | 'Seite';
  titel: string;
  desc: string;
  href: string;
};

export const NEUIGKEITEN: Neuigkeit[] = [
  {
    datum: 'September 2026',
    typ: 'Wissen',
    titel: 'Neue Therapien & Forschung 2026',
    desc: 'Was in klinischen Studien getestet wird – und eine Petition die Unterstützung braucht.',
    href: '/wissen/neue-therapien-2026',
  },
  {
    datum: 'September 2026',
    typ: 'Wissen',
    titel: 'Zöliakie & Genetik',
    desc: 'Müssen meine anderen Kinder getestet werden? Risiken, Gentests und was HLA-DQ2/DQ8 bedeutet.',
    href: '/wissen/zoeliakie-genetik',
  },
  {
    datum: 'September 2026',
    typ: 'Rezept',
    titel: 'Lachsküchler',
    desc: 'Saftig, ohne Spezialmehl – schmecken auch am nächsten Tag noch.',
    href: '/rezepte/lachskuechler',
  },
  {
    datum: 'August 2026',
    typ: 'Rezept',
    titel: 'Kokos-Schoko-Mousse',
    desc: '5 Minuten, 3 Zutaten, vegan – funktioniert auch als Frühstücks-Creme.',
    href: '/rezepte/kokos-schoko-mousse',
  },
  {
    datum: 'August 2026',
    typ: 'Rezept',
    titel: 'Bananenwaffeln mit Datteln',
    desc: 'Ohne Mehl, ohne raffinierten Zucker – die Kinder lieben sie.',
    href: '/rezepte/bananenwaffeln-datteln',
  },
  {
    datum: 'Juli 2026',
    typ: 'Rezept',
    titel: 'Schokoladen-Granola',
    desc: 'Knuspriges GF-Granola – vegan, 1 Woche haltbar, besser als jedes gekaufte.',
    href: '/rezepte/granola',
  },
  {
    datum: 'Juni 2026',
    typ: 'Wissen',
    titel: 'NCGS – Glutenunverträglichkeit ohne Zöliakie',
    desc: 'Keine Antikörper, kein Darmschaden – und trotzdem real. Was NCGS ist.',
    href: '/wissen/ncgs-glutenunvertraeglichkeit',
  },
  {
    datum: 'Juni 2026',
    typ: 'Wissen',
    titel: 'Zähne & Zahnschmelz bei Zöliakie',
    desc: '40–50 % der Kinder mit Zöliakie haben Zahnschmelzdefekte. Was der Zahnarzt wissen muss.',
    href: '/wissen/zaehne-zoeliakiie',
  },
];

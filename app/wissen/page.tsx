'use client';

import { useState } from 'react';
import Link from 'next/link';

type Thema = {
  icon: string;
  title: string;
  desc: string;
  href: string;
  tag: string;
  published: string;   // 'YYYY-MM'
  beliebtheit: number; // 1–10
};

const themen: Thema[] = [
  {
    icon: '🆘',
    title: 'Was jetzt? – Erstdiagnose',
    desc: 'Dein Kind hat gerade die Diagnose bekommen. Was sofort wichtig ist, was warten kann – und wie du deinem Kind davon erzählst.',
    href: '/wissen/erstdiagnose',
    tag: 'Erstdiagnose',
    published: '2024-01', beliebtheit: 10,
  },
  {
    icon: '🔬',
    title: 'Was ist Zöliakie?',
    desc: 'Wie Zöliakie entsteht, was im Körper passiert und warum lebenslang glutenfrei essen so wichtig ist.',
    href: '/wissen/was-ist-zoeliakiie',
    tag: 'Grundlagen',
    published: '2024-01', beliebtheit: 9,
  },
  {
    icon: '🩺',
    title: 'Diagnose bei Kindern',
    desc: 'Welche Symptome auf Zöliakie hindeuten, wie die Diagnose abläuft und was danach kommt.',
    href: '/wissen/diagnose-kinder',
    tag: 'Diagnose',
    published: '2024-02', beliebtheit: 9,
  },
  {
    icon: '🥗',
    title: 'Glutenfreie Ernährung',
    desc: 'Was erlaubt ist, was nicht, wo sich Gluten versteckt und wie man Kreuzverunreinigung vermeidet.',
    href: '/wissen/ernaehrung-grundlagen',
    tag: 'Ernährung',
    published: '2024-02', beliebtheit: 9,
  },
  {
    icon: '🏫',
    title: 'Schule & Kita',
    desc: 'Wie ihr das Thema mit Lehrern, Erzieherinnen und anderen Eltern kommuniziert – ohne Drama.',
    href: '/wissen/schule-kita',
    tag: 'Alltag',
    published: '2024-03', beliebtheit: 8,
  },
  {
    icon: '🎂',
    title: 'Geburtstage glutenfrei',
    desc: 'Damit kein Kind auf der Party leer ausgeht: Tipps für glutenfreie Kuchen, Snacks und Einladungen.',
    href: '/wissen/geburtstage',
    tag: 'Alltag',
    published: '2024-04', beliebtheit: 8,
  },
  {
    icon: '✈️',
    title: 'Reisen mit Zöliakie',
    desc: 'Im Urlaub glutenfrei essen – was in Restaurants, Hotels und im Ausland zu beachten ist.',
    href: '/wissen/reisen',
    tag: 'Alltag',
    published: '2024-05', beliebtheit: 7,
  },
  {
    icon: '🛒',
    title: 'Einkaufen & Produkte',
    desc: 'Welche Produkte zuverlässig glutenfrei sind, was Labels bedeuten und wo man am besten einkauft.',
    href: '/wissen/produkte-einkauf',
    tag: 'Einkauf',
    published: '2024-05', beliebtheit: 7,
  },
  {
    icon: '💊',
    title: 'Nährstoffmangel & Gesundheit',
    desc: 'Welche Nährstoffe bei Zöliakie oft fehlen und wie ihr das ausgleicht.',
    href: '/wissen/naehrstoffe',
    tag: 'Gesundheit',
    published: '2024-06', beliebtheit: 7,
  },
  {
    icon: '🧠',
    title: 'Kindern Zöliakie erklären',
    desc: 'Wie ihr eurem Kind auf Augenhöhe erklärt warum es anders essen muss – ohne Angst zu machen.',
    href: '/wissen/kindern-erklaeren',
    tag: 'Familie',
    published: '2024-06', beliebtheit: 8,
  },
  {
    icon: '🌾',
    title: 'Welches Mehl wofür?',
    desc: 'Reismehl, Mandelmehl, Buchweizenmehl – welches glutenfreie Mehl eignet sich wofür und wie kombiniert man sie?',
    href: '/wissen/welches-mehl-wofuer',
    tag: 'Warenkunde',
    published: '2024-07', beliebtheit: 7,
  },
  {
    icon: '🧪',
    title: 'Xanthan & Flohsamenschalen',
    desc: 'Warum braucht glutenfreies Backen Bindemittel – und was ist der Unterschied zwischen Xanthan und Flohsamenschalen?',
    href: '/wissen/xanthan-flohsamenschalen',
    tag: 'Warenkunde',
    published: '2024-07', beliebtheit: 6,
  },
  {
    icon: '🕵️',
    title: 'Gluten – wo niemand es vermutet',
    desc: 'Von Play-Doh bis Zahnpasta, von Hostien bis Frittierfett: Wo überall Gluten drinsteckt, obwohl man es nicht erwarten würde.',
    href: '/wissen/gluten-versteckte-quellen',
    tag: 'Sicherheit',
    published: '2024-08', beliebtheit: 8,
  },
  {
    icon: '⚠️',
    title: 'Kreuzkontamination',
    desc: 'Was ist Kontamination, warum reichen Spuren für eine Reaktion – und wie schützt man das Kind zuhause und unterwegs?',
    href: '/wissen/kreuzkontamination',
    tag: 'Sicherheit',
    published: '2024-08', beliebtheit: 8,
  },
  {
    icon: '🥛',
    title: 'Laktoseintoleranz bei Zöliakie',
    desc: 'Viele Kinder vertragen nach der Diagnose auch keine Milch mehr. Was dahinter steckt und warum das oft nur vorübergehend ist.',
    href: '/wissen/laktoseintoleranz-kinder',
    tag: 'Gesundheit',
    published: '2024-09', beliebtheit: 7,
  },
  {
    icon: '✅',
    title: 'Welche Lebensmittel sind glutenfrei?',
    desc: 'Die große Übersicht – was ist von Natur aus erlaubt, was ist tabu, und wo versteckt sich Gluten wo man es nicht erwartet.',
    href: '/wissen/glutenfreie-lebensmittel',
    tag: 'Grundlagen',
    published: '2024-09', beliebtheit: 9,
  },
  {
    icon: '📄',
    title: 'Vorlagen & Vordrucke',
    desc: 'Musterbriefe für Kita und Schule, Notfallkarten fürs Kind und Checklisten für Elterngespräche – zum direkten Kopieren.',
    href: '/wissen/vorlagen',
    tag: 'Alltag',
    published: '2024-10', beliebtheit: 7,
  },
  {
    icon: '🦷',
    title: 'Zähne & Zahnschmelz bei Zöliakie',
    desc: '40–50 % der Kinder mit Zöliakie haben Zahnschmelzdefekte. Was der Zahnarzt wissen muss – und warum Zöliakie manchmal zuerst am Zahn auffällt.',
    href: '/wissen/zaehne-zoeliakiie',
    tag: 'Gesundheit',
    published: '2026-06', beliebtheit: 6,
  },
  {
    icon: '🌾',
    title: 'NCGS – Glutenunverträglichkeit ohne Zöliakie',
    desc: 'Kein Test kann sie beweisen, kein Darmschaden, keine Antikörper – und trotzdem real. Was NCGS ist, wie sie sich zeigt und was das für den Alltag bedeutet.',
    href: '/wissen/ncgs-glutenunvertraeglichkeit',
    tag: 'Grundlagen',
    published: '2026-06', beliebtheit: 6,
  },
  {
    icon: '🧬',
    title: 'Zöliakie & Genetik',
    desc: 'Muss ich meine anderen Kinder testen lassen? Was HLA-DQ2/DQ8 bedeutet, welches Risiko Geschwister haben und wann ein Gentest sinnvoll ist.',
    href: '/wissen/zoeliakie-genetik',
    tag: 'Grundlagen',
    published: '2026-09', beliebtheit: 7,
  },
  {
    icon: '🔭',
    title: 'Neue Therapien & Forschung 2026',
    desc: 'Was gerade in klinischen Studien getestet wird, warum ein "Impfansatz" Hoffnung macht – und eine Petition an den Bundestag die Unterstützung braucht.',
    href: '/wissen/neue-therapien-2026',
    tag: 'Aktuell',
    published: '2026-09', beliebtheit: 8,
  },
];

type WissenSort = 'standard' | 'az' | 'za' | 'neu' | 'alt' | 'beliebt-desc' | 'beliebt-asc';

export default function WissenPage() {
  const [sortierung, setSortierung] = useState<WissenSort>('standard');

  const sorted = [...themen].sort((a, b) => {
    switch (sortierung) {
      case 'az':           return a.title.localeCompare(b.title, 'de');
      case 'za':           return b.title.localeCompare(a.title, 'de');
      case 'neu':          return b.published.localeCompare(a.published);
      case 'alt':          return a.published.localeCompare(b.published);
      case 'beliebt-desc': return b.beliebtheit - a.beliebtheit;
      case 'beliebt-asc':  return a.beliebtheit - b.beliebtheit;
      default:             return 0;
    }
  });

  // Erstdiagnose-Karte ist immer oben außer bei Sortierung
  const erstdiagnose = themen[0];
  const rest = sortierung === 'standard'
    ? sorted.filter(t => t.href !== erstdiagnose.href)
    : sorted;
  const showProminent = sortierung === 'standard';

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'var(--green-deep)',
        color: 'var(--white)',
        padding: '3.5rem 0 3rem',
      }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Wissen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>Zöliakie verstehen</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '580px', fontSize: '1.05rem' }}>
            Was Eltern nach der Diagnose wirklich wissen müssen – von den Grundlagen bis zum Alltag.
          </p>
          <div style={{
            marginTop: '1.25rem', padding: '0.875rem 1.25rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px',
            fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
            maxWidth: '600px',
          }}>
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Hinweis:</strong>{' '}
            Alle Inhalte sind sorgfältig recherchiert, aber kein Ersatz für ärztliche Beratung.
            Die Forschung zu Zöliakie und verwandten Erkrankungen entwickelt sich ständig weiter –
            neue Erkenntnisse können bestehende Empfehlungen verändern. Bei Fragen zu Diagnose,
            Therapie oder Ernährung bitte immer einen Arzt oder eine Ernährungsberatung hinzuziehen.
          </div>
        </div>
      </section>

      {/* Sortierfilter */}
      <section style={{ background: 'white', padding: '0.75rem 0', borderBottom: '2px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em',
              textTransform: 'uppercase', color: 'var(--text-light)',
              whiteSpace: 'nowrap', minWidth: '68px',
            }}>
              Sortierung
            </span>
            <div style={{ overflow: 'hidden', flex: 1 }}>
              <div style={{ display: 'flex', gap: '0.35rem', overflowX: 'auto', paddingBottom: '2px' }}>
                {([
                  { id: 'standard',     label: 'Standard' },
                  { id: 'az',           label: 'A → Z' },
                  { id: 'za',           label: 'Z → A' },
                  { id: 'neu',          label: 'Neueste zuerst' },
                  { id: 'alt',          label: 'Älteste zuerst' },
                  { id: 'beliebt-desc', label: '⭐ Beliebteste' },
                  { id: 'beliebt-asc',  label: '⭐ Unbekanntere' },
                ] as { id: WissenSort; label: string }[]).map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setSortierung(id)}
                    style={{
                      padding: '0.3rem 0.75rem', borderRadius: '999px', whiteSpace: 'nowrap',
                      border: `1.5px solid ${sortierung === id ? 'var(--green-mid)' : 'var(--border)'}`,
                      background: sortierung === id ? 'rgba(88,163,102,0.12)' : 'transparent',
                      color: sortierung === id ? 'var(--green-mid)' : 'var(--text-mid)',
                      fontSize: '0.75rem', fontWeight: sortierung === id ? 700 : 400,
                      cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erstdiagnose – prominente erste Karte (nur bei Standard-Sortierung) */}
      {showProminent && (
        <section className="section" style={{ paddingBottom: '0.5rem' }}>
          <div className="container">
            <Link href={erstdiagnose.href} style={{ textDecoration: 'none', display: 'block', maxWidth: '760px' }}>
              <div style={{
                padding: '1.75rem 2rem',
                background: 'var(--green-deep)',
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
                transition: 'opacity 0.15s',
              }}>
                <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{erstdiagnose.icon}</span>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <span style={{
                    display: 'inline-block', marginBottom: '0.35rem',
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em',
                    textTransform: 'uppercase', color: 'var(--mint)',
                  }}>{erstdiagnose.tag}</span>
                  <h3 style={{ color: 'var(--golden)', margin: '0 0 0.4rem', fontSize: '1.15rem' }}>{erstdiagnose.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>{erstdiagnose.desc}</p>
                </div>
                <span style={{ color: 'var(--mint)', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0 }}>→</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Themen-Grid */}
      <section className="section" style={{ paddingTop: showProminent ? '1.5rem' : '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {rest.map(({ icon, title, desc, href, tag }) => (
              <Link key={href} href={href} className="card card-link">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{icon}</span>
                  <span className="tag">{tag}</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

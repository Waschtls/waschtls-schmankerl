'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Kategorien ────────────────────────────────────────────────────────────────

const KATEGORIEN = [
  { id: 'alle',           label: '✨ Alle' },
  { id: 'fruehstueck',   label: '🥞 Frühstück' },
  { id: 'mittagessen',   label: '🍝 Mittagessen' },
  { id: 'abendessen',    label: '🥘 Abendessen' },
  { id: 'snacks',        label: '🍪 Snacks & Brotdose' },
  { id: 'backen',        label: '🎂 Backen & Kuchen' },
  { id: 'hefeteig',      label: '🍞 Brot & Hefeteig' },
  { id: 'dessert',       label: '🍨 Desserts' },
  { id: 'kindergeburtstag', label: '🎉 Kindergeburtstag' },
  { id: 'grundrezepte',  label: '📋 Grundrezepte' },
  { id: 'saisonal',      label: '🎄 Saisonal' },
];

const ERNAEHRUNG = [
  { id: 'alle',          label: 'Alle', desc: '' },
  { id: 'vegetarisch',   label: '🌿 Vegetarisch', desc: 'kein Fleisch, kein Fisch' },
  { id: 'vegan',         label: '🌱 Vegan', desc: 'keine tierischen Produkte' },
  { id: 'zuckerfrei',    label: '🚫🍬 Zuckerfrei', desc: 'kein zugesetzter Zucker' },
  { id: 'milchfrei',     label: '🥛 Milchfrei', desc: 'keine Milch, Butter, Käse' },
  { id: 'eierfrei',      label: '🥚 Eierfrei', desc: 'ohne Eier' },
];

// ── Rezept-Daten ──────────────────────────────────────────────────────────────

type Rezept = {
  slug: string;
  title: string;
  desc: string;
  time: string;
  kat: string;
  tags: string[];
  emoji: string;
  image?: string;       // z.B. '/images/granola.jpg'
  naturalGf: boolean;
  kleinkind: boolean;
  vegetarisch: boolean;
  vegan: boolean;
  zuckerfrei: boolean;
  milchfrei: boolean;
  eierfrei: boolean;
  todo?: boolean;
};

const REZEPTE: Rezept[] = [
  // ── Frühstück ──
  {
    slug: 'apfel-zimt-baked-oats',
    title: 'Apfel-Zimt Baked Oats',
    desc: 'Warmes Frühstück wie ein Mini-Crumble – 44 g Eiweiß, nur GF-Haferflocken.',
    time: '40 Min.', kat: 'fruehstueck', tags: ['snacks'],
    emoji: '🍎', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'protein-bagel',
    title: 'Protein-Bagel',
    desc: 'Quark-Teig, kein Hefe-Warten – 22 g Eiweiß pro Bagel.',
    time: '30 Min.', kat: 'fruehstueck', tags: ['hefeteig'],
    emoji: '🥯', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'pfannkuchen-klassisch',
    title: 'Pfannkuchen (klassisch)',
    desc: 'Mit Schär Mix It – hauchdünn, goldbraun, hält beim Wenden.',
    time: '25 Min.', kat: 'fruehstueck', tags: ['kindergeburtstag'],
    emoji: '🫓', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'apfel-zimt-porridge',
    title: 'Apfel-Zimt-Porridge',
    desc: 'Cremig, warm, 10 Minuten – perfekt für den Schulmorgen.',
    time: '10 Min.', kat: 'fruehstueck', tags: [],
    emoji: '🍎', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: true,
  },
  {
    slug: 'french-toast',
    title: 'French Toast',
    desc: 'Goldbraun, vanillig – Frühstück und süßes Mittagessen in einem.',
    time: '20 Min.', kat: 'fruehstueck', tags: ['mittagessen', 'kindergeburtstag'],
    emoji: '🍞', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'waffeln-klassisch',
    title: 'Waffeln (klassisch)',
    desc: 'Knusprig, einfrierbar, mit jedem Waffeleisen – immer ein Erfolg.',
    time: '25 Min.', kat: 'fruehstueck', tags: ['dessert', 'kindergeburtstag'],
    emoji: '🧇', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'granola',
    title: 'Schokoladen-Granola',
    desc: 'Knuspriges GF-Granola mit Kokosfett, Ahornsirup & Schokomus – hält 1 Woche.',
    time: '20 Min.', kat: 'fruehstueck', tags: ['snacks'],
    emoji: '🥣', image: '/images/granola.jpg', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: true, zuckerfrei: false, milchfrei: true, eierfrei: true,
  },
  // ── Mittagessen ──
  {
    slug: 'rindergulasch',
    title: 'Rindergulasch',
    desc: 'Sämig, ohne Stärke – schmort sich von selbst. Zu Semmelknödeln ein Traum.',
    time: '2 Std.', kat: 'mittagessen', tags: ['abendessen'],
    emoji: '🥘', naturalGf: true, kleinkind: false,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  {
    slug: 'spaghetti-bolognese',
    title: 'Spaghetti Bolognese',
    desc: 'Der Familienklassiker – Soße einfrieren, Pasta frisch kochen.',
    time: '45 Min.', kat: 'mittagessen', tags: ['abendessen', 'kindergeburtstag'],
    emoji: '🍝', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  {
    slug: 'fleischkuechle',
    title: 'Fleischküchle',
    desc: 'Bayerische Frikadellen – saftig, würzig, einfrierbar.',
    time: '30 Min.', kat: 'mittagessen', tags: ['abendessen', 'kindergeburtstag'],
    emoji: '🍖', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'chicken-nuggets-selbstgemacht',
    title: 'Chicken Nuggets (selbstgemacht)',
    desc: 'Aus dem Ofen, knuspriger als tiefgekühlt – Kindergeburtstagsgarant.',
    time: '30 Min.', kat: 'mittagessen', tags: ['kindergeburtstag'],
    emoji: '🐔', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'reiberdatschi-kartoffelpuffer',
    title: 'Reiberdatschi',
    desc: 'Bayerische Kartoffelpuffer – von Natur aus GF, knusprig, mit Apfelmus.',
    time: '30 Min.', kat: 'mittagessen', tags: ['snacks', 'abendessen'],
    emoji: '🥔', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: false,
  },
  {
    slug: 'nudeln-mit-tomatensauce',
    title: 'Nudeln mit Tomatensauce',
    desc: 'Der Alltagsklassiker – mit Reisnudeln genauso lecker.',
    time: '25 Min.', kat: 'mittagessen', tags: ['abendessen'],
    emoji: '🍝', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: true, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  {
    slug: 'kuerbisrisotto',
    title: 'Kürbisrisotto',
    desc: 'Cremig, herbstlich, von Natur aus glutenfrei.',
    time: '40 Min.', kat: 'mittagessen', tags: ['abendessen'],
    emoji: '🎃', naturalGf: true, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: true,
  },
  // ── Abendessen ──
  {
    slug: 'quark-gemuese-fladen',
    title: 'Quark-Gemüse-Fladen',
    desc: 'Fluffig, herzhaft, hochprotein – mit Paprika, Salami und Käse.',
    time: '30 Min.', kat: 'abendessen', tags: ['snacks'],
    emoji: '🫓', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'flammkuchen-ofenpfannkuchen',
    title: 'Flammkuchen-Ofenpfannkuchen',
    desc: 'Quark-Basis, Schinken und Käse – wie ein Flammkuchen, nur einfacher.',
    time: '30 Min.', kat: 'abendessen', tags: ['snacks'],
    emoji: '🧀', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'pizza-glutenfrei',
    title: 'Glutenfreie Pizza',
    desc: 'Knuspriger Boden – der Freitagsabend-Klassiker.',
    time: '45 Min.', kat: 'abendessen', tags: ['hefeteig', 'kindergeburtstag'],
    emoji: '🍕', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'schnitzel-kartoffelbrei',
    title: 'Schnitzel mit Kartoffelbrei',
    desc: 'Knusprig paniert, cremiger Brei – der Lieblings-Freitag.',
    time: '35 Min.', kat: 'abendessen', tags: ['mittagessen', 'kindergeburtstag'],
    emoji: '🥩', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'kaesspatzen',
    title: 'Kässpatzen',
    desc: 'Echtes bayerisches Schmankerl – mit Schär Mix It genauso cremig.',
    time: '40 Min.', kat: 'abendessen', tags: ['mittagessen'],
    emoji: '🧀', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'veganes-chili',
    title: 'Veganes Chili con Carne',
    desc: 'Mit DM veganem Hack – herzhaft, sättigend, glutenfrei.',
    time: '35 Min.', kat: 'abendessen', tags: ['mittagessen'],
    emoji: '🌶', naturalGf: true, kleinkind: false,
    vegetarisch: true, vegan: true, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  // ── Backen & Kuchen ──
  {
    slug: 'bananenbrot-nutella',
    title: 'Bananenbrot mit Nutella-Füllung',
    desc: 'Saftiger Kuchen mit Nutella-Kern – einfrierbar, für die Brotdose.',
    time: '60 Min.', kat: 'backen', tags: ['dessert', 'snacks'],
    emoji: '🍌', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'brownies-schokolade',
    title: 'Brownies (Schokolade)',
    desc: 'Saftig, dunkel, mit echter Schokolade – Kindergeburtstagsklassiker.',
    time: '40 Min.', kat: 'backen', tags: ['kindergeburtstag', 'dessert'],
    emoji: '🍫', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'zwetschgendatschi',
    title: 'Zwetschgendatschi',
    desc: 'Echter bayerischer Pflaumenkuchen – saisonal, auf Hefeteig.',
    time: '100 Min.', kat: 'backen', tags: ['saisonal', 'dessert', 'hefeteig'],
    emoji: '🍑', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'schokoladenkuchen-mandelmehl',
    title: 'Schokoladenkuchen (Mandelmehl)',
    desc: 'Der saftigste Schokokuchen – garantiert gelingend.',
    time: '50 Min.', kat: 'backen', tags: ['kindergeburtstag'],
    emoji: '🍫', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'lebkuchen-plaetzchen',
    title: 'Lebkuchen-Plätzchen',
    desc: 'Würzig, weich, hält die Form beim Ausstechen – ideal zum Verzieren mit Kindern.',
    time: '4 Std.', kat: 'backen', tags: ['saisonal', 'kindergeburtstag'],
    emoji: '🎄', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  // ── Brot & Hefeteig ──
  {
    slug: 'hotdog-broetchen',
    title: 'Hot Dog Brötchen',
    desc: 'Weich, luftig, mit Mohn – endlich Hot Dog ohne Kompromiss. Gleicher Teig wie die Hamburger Brötchen.',
    time: '2,5 Std.', kat: 'hefeteig', tags: ['snacks'],
    emoji: '🌭', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'hamburger-broetchen',
    title: 'Hamburger Brötchen',
    desc: 'Goldbraun, mit Sesam, einfrierbar – der Burger kann kommen.',
    time: '2,5 Std.', kat: 'hefeteig', tags: ['snacks'],
    emoji: '🍔', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'italienische-focaccia',
    title: 'Italienische Focaccia',
    desc: 'Luftig, knusprig, mit Knoblauchbutter und Parmesan – mit Caputo Fioreglut, kein Kneten.',
    time: '2 Std.', kat: 'hefeteig', tags: ['abendessen', 'backen'],
    emoji: '🫓', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'laugenbrezeln-glutenfrei',
    title: 'Laugenbrezeln (glutenfrei)',
    desc: 'Weich, salzig, original bayerisch – mit Natron-Lauge.',
    time: '2 Std.', kat: 'hefeteig', tags: ['backen', 'snacks'],
    emoji: '🥨', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  // ── Snacks & Brotdose ──
  {
    slug: 'bananenmuffins',
    title: 'Bananenmuffins (ohne Mehl)',
    desc: 'Nur 4 Zutaten, kein Zucker – perfekte Schulmause.',
    time: '30 Min.', kat: 'snacks', tags: ['kindergeburtstag'],
    emoji: '🧁', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: false,
  },
  {
    slug: 'energiebaellchen',
    title: 'Energiebällchen',
    desc: 'Ohne Backen, ohne Zucker – der Powerschnack.',
    time: '15 Min.', kat: 'snacks', tags: ['kindergeburtstag'],
    emoji: '🟤', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: true, zuckerfrei: false, milchfrei: true, eierfrei: true,
  },
  // ── Desserts ──
  {
    slug: 'frozen-banana-bites',
    title: 'Frozen Banana Bites',
    desc: 'Eis ohne Eismaschine – Quark, Banane, Schokolade. Nur 83 kcal.',
    time: '15 Min. + 4h', kat: 'dessert', tags: ['snacks', 'kindergeburtstag'],
    emoji: '🍫', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: true,
  },
  {
    slug: 'milchreis-kokos',
    title: 'Kokos-Milchreis',
    desc: 'Cremig, leicht süß – macht sich fast von selbst.',
    time: '35 Min.', kat: 'dessert', tags: [],
    emoji: '🥥', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: true,
  },
  // ── Grundrezepte ──
  {
    slug: 'grundrezept-hefeteig-suess',
    title: 'Grundrezept: Süßer Hefeteig',
    desc: 'Die Basis für Zopf, Dampfnudeln, Schnecken und Zwetschgendatschi.',
    time: '90 Min.', kat: 'grundrezepte', tags: ['hefeteig', 'backen'],
    emoji: '🧑‍🍳', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'semmelknoedel',
    title: 'Semmelknödel',
    desc: 'Das bayerische Grundrezept – zu Gulasch, Braten, Pilzsoße.',
    time: '35 Min.', kat: 'grundrezepte', tags: ['mittagessen', 'abendessen'],
    emoji: '🥟', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
];

// ── Komponente ────────────────────────────────────────────────────────────────

export default function RezeptePage() {
  const [aktiv, setAktiv] = useState('alle');
  const [ernaehrung, setErnaehrung] = useState('alle');

  const gefiltert = REZEPTE.filter(r => {
    const katMatch = aktiv === 'alle' || r.kat === aktiv || r.tags.includes(aktiv);
    const dietMatch =
      ernaehrung === 'alle' ||
      (ernaehrung === 'vegetarisch' && r.vegetarisch) ||
      (ernaehrung === 'vegan' && r.vegan) ||
      (ernaehrung === 'zuckerfrei' && r.zuckerfrei) ||
      (ernaehrung === 'milchfrei' && r.milchfrei) ||
      (ernaehrung === 'eierfrei' && r.eierfrei);
    return katMatch && dietMatch;
  });

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Rezepte
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Glutenfreie Rezepte</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Was bei uns zuhause wirklich auf den Tisch kommt – und bei Kindern ankommt.
          </p>
        </div>
      </section>

      {/* Legende */}
      <section style={{ background: 'var(--cream-dark)', padding: '0.7rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-light)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ background: 'var(--mint)', color: 'var(--green-deep)', fontSize: '0.65rem', fontWeight: 700, padding: '0.12rem 0.45rem', borderRadius: '999px' }}>ohne Spezialmehl</span>
              von Natur aus glutenfrei
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ background: 'var(--golden)', color: 'var(--green-deep)', fontSize: '0.65rem', fontWeight: 700, padding: '0.12rem 0.45rem', borderRadius: '999px' }}>👶</span>
              kleinkindtauglich
            </span>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: 'white', padding: '1rem 0', borderBottom: '2px solid var(--border)', position: 'sticky', top: '96px', zIndex: 50 }}>
        <div className="container">
          {/* Kategorie-Filter */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.6rem' }}>
            {KATEGORIEN.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setAktiv(id)}
                style={{
                  padding: '0.4rem 0.875rem',
                  borderRadius: '999px',
                  border: `1.5px solid ${aktiv === id ? 'var(--green-deep)' : 'var(--border)'}`,
                  background: aktiv === id ? 'var(--green-deep)' : 'transparent',
                  color: aktiv === id ? 'var(--golden)' : 'var(--text-mid)',
                  fontSize: '0.8rem',
                  fontWeight: aktiv === id ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </button>
            ))}
            <Link
              href="/rezepte/alle"
              style={{
                padding: '0.4rem 0.875rem', fontSize: '0.8rem', fontWeight: 600,
                color: 'var(--green-mid)', textDecoration: 'none',
                borderRadius: '999px', border: '1.5px solid var(--green-mid)',
                whiteSpace: 'nowrap',
              }}
            >
              A–Z →
            </Link>
          </div>

          {/* Ernährungsfilter */}
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginRight: '0.25rem', whiteSpace: 'nowrap' }}>Ernährung:</span>
            {ERNAEHRUNG.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setErnaehrung(id)}
                title={ERNAEHRUNG.find(e => e.id === id)?.desc}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  border: `1.5px solid ${ernaehrung === id ? 'var(--terracotta)' : 'var(--border)'}`,
                  background: ernaehrung === id ? 'rgba(244,162,97,0.12)' : 'transparent',
                  color: ernaehrung === id ? 'var(--terracotta)' : 'var(--text-mid)',
                  fontSize: '0.75rem',
                  fontWeight: ernaehrung === id ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="section">
        <div className="container">
          {/* Anzahl */}
          <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
            {gefiltert.filter(r => !r.todo).length} Rezepte
            {aktiv !== 'alle' && ` in „${KATEGORIEN.find(k => k.id === aktiv)?.label}"`}
            {ernaehrung !== 'alle' && ` · ${ERNAEHRUNG.find(e => e.id === ernaehrung)?.label}`}
          </p>

          <div className="grid-3">
            {gefiltert.map(({ slug, title, desc, time, emoji, image, naturalGf, kleinkind, todo }) => (
              todo ? (
                /* Platzhalter-Karte */
                <div key={slug} className="card" style={{
                  border: '2px dashed var(--border)', background: 'transparent',
                  boxShadow: 'none', opacity: 0.65,
                }}>
                  <div style={{
                    fontSize: '2.25rem', textAlign: 'center',
                    background: 'var(--cream-dark)', borderRadius: '8px',
                    padding: '1rem', marginBottom: '0.75rem',
                  }}>
                    {emoji}
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 700, padding: '0.12rem 0.5rem',
                      borderRadius: '999px', border: '1.5px dashed var(--border)',
                      color: 'var(--text-light)',
                    }}>kommt bald</span>
                  </div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--text-mid)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-light)' }}>{desc}</p>
                </div>
              ) : (
                /* Echte Rezept-Karte */
                <Link key={slug} href={`/rezepte/${slug}`} className="card card-link">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      style={{
                        width: '100%', borderRadius: '8px',
                        height: '160px', objectFit: 'cover',
                        display: 'block', marginBottom: '0.75rem',
                      }}
                    />
                  ) : (
                    <div style={{
                      fontSize: '2.5rem', textAlign: 'center',
                      background: 'var(--cream-dark)', borderRadius: '8px',
                      padding: '1rem', marginBottom: '0.75rem',
                    }}>
                      {emoji}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>⏱ {time}</span>
                    {naturalGf && (
                      <span style={{ background: 'var(--mint)', color: 'var(--green-deep)', fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.45rem', borderRadius: '999px' }}>
                        ohne Spezialmehl
                      </span>
                    )}
                    {kleinkind && (
                      <span style={{ background: 'var(--golden)', color: 'var(--green-deep)', fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.45rem', borderRadius: '999px' }}>
                        👶
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>{desc}</p>
                </Link>
              )
            ))}
          </div>

          {/* Link zu Feste-Seite */}
          {(aktiv === 'alle' || aktiv === 'kindergeburtstag') && (
            <div style={{
              marginTop: '2rem', padding: '1.25rem 1.5rem',
              background: 'rgba(233,196,106,0.1)', border: '1.5px solid rgba(233,196,106,0.35)',
              borderRadius: '12px', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
            }}>
              <div>
                <p style={{ fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--green-deep)' }}>🎉 Kindergeburtstag planen?</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                  Alle Rezepte für Feste, Tipps und den Wissens-Artikel auf einen Blick.
                </p>
              </div>
              <Link href="/rezepte/feste-geburtstage" style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--green-mid)', whiteSpace: 'nowrap' }}>
                Zur Feste-Seite →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

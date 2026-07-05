'use client';

import { useState } from 'react';
import Link from 'next/link';
import { REZEPTE, type Rezept } from '../data/rezepte';

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
      <section style={{ background: 'white', padding: '1rem 0', borderBottom: '2px solid var(--border)' }}>
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
                        width: '100%', height: 'auto', borderRadius: '8px',
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

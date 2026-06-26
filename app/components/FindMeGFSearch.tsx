'use client';

import { useState } from 'react';

export default function FindMeGFSearch() {
  const [city, setCity] = useState('');
  const [locating, setLocating] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    setSearching(true);
    setError('');
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city.trim())}&format=json&limit=1&countrycodes=de,at,ch`,
        { headers: { 'Accept-Language': 'de' } }
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        window.open(`https://www.findmeglutenfree.com/map#lat=${lat}&lng=${lon}`, '_blank', 'noopener,noreferrer');
      } else {
        setError('Ort nicht gefunden. Bitte anders schreiben.');
      }
    } catch {
      setError('Suche fehlgeschlagen. Bitte nochmal versuchen.');
    } finally {
      setSearching(false);
    }
  }

  function handleGeolocate() {
    if (!navigator.geolocation) {
      setError('Ortungsdienst nicht verfügbar.');
      return;
    }
    setLocating(true);
    setError('');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const { latitude, longitude } = pos.coords;
        const url = `https://www.findmeglutenfree.com/map#lat=${latitude}&lng=${longitude}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
      () => {
        setLocating(false);
        setError('Standort konnte nicht ermittelt werden. Bitte Stadt eingeben.');
      },
      { timeout: 8000 }
    );
  }

  return (
    <div>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Stadt oder PLZ eingeben…"
          style={{
            flex: 1, minWidth: '180px',
            padding: '0.55rem 0.9rem', borderRadius: '8px',
            border: '1.5px solid rgba(149,213,178,0.4)',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff', fontSize: '0.875rem',
            outline: 'none', fontFamily: 'inherit',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.55rem 1.1rem', borderRadius: '8px',
            background: 'var(--golden)', color: 'var(--green-deep)',
            border: 'none', fontWeight: 700, fontSize: '0.875rem',
            cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0,
          }}
        >
          {searching ? '…' : 'Suchen →'}
        </button>
        <button
          type="button"
          onClick={handleGeolocate}
          disabled={locating || searching}
          title="Meinen Standort verwenden"
          style={{
            padding: '0.55rem 0.75rem', borderRadius: '8px',
            background: 'transparent',
            border: '1.5px solid rgba(149,213,178,0.4)',
            color: 'var(--mint)', fontSize: '1rem',
            cursor: locating ? 'wait' : 'pointer', flexShrink: 0,
          }}
        >
          {locating ? '…' : '📍'}
        </button>
      </form>
      {error && (
        <p style={{ fontSize: '0.78rem', color: 'var(--terracotta)', margin: 0 }}>{error}</p>
      )}
      <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', margin: '0.4rem 0 0' }}>
        Öffnet Find Me Gluten Free mit deiner Suche
      </p>
    </div>
  );
}

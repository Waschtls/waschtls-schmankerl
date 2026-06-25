import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Waschtls Schmankerl – Glutenfreie Rezepte für Familien';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1B4332',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Hintergrund-Muster */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, #2D6A4F 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #2D6A4F 0%, transparent 60%)',
          display: 'flex',
        }} />

        {/* Goldene Rahmen-Linie oben/unten */}
        <div style={{ position: 'absolute', top: 32, left: 60, right: 60, height: 3, background: '#E9C46A', borderRadius: 2, display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 60, right: 60, height: 3, background: '#E9C46A', borderRadius: 2, display: 'flex' }} />

        {/* Emoji-Dekoration */}
        <div style={{ fontSize: 72, marginBottom: 24, display: 'flex' }}>🌾</div>

        {/* Haupttitel */}
        <div style={{
          fontSize: 68,
          fontWeight: 700,
          color: '#E9C46A',
          letterSpacing: '-1px',
          textAlign: 'center',
          lineHeight: 1.1,
          display: 'flex',
        }}>
          Waschtls Schmankerl
        </div>

        {/* Untertitel */}
        <div style={{
          fontSize: 30,
          color: '#95D5B2',
          marginTop: 20,
          letterSpacing: '0.5px',
          textAlign: 'center',
          display: 'flex',
        }}>
          Glutenfreie Rezepte · Aus Augsburg · Für die Familie
        </div>

        {/* Domain-Zeile */}
        <div style={{
          position: 'absolute',
          bottom: 56,
          fontSize: 20,
          color: 'rgba(255,255,255,0.5)',
          display: 'flex',
        }}>
          waschtls-schmankerl.de
        </div>
      </div>
    ),
    { ...size }
  );
}

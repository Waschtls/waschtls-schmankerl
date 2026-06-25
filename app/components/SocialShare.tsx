'use client';

import { useState, useEffect } from 'react';

type Props = {
  title: string;
};

export default function SocialShare({ title }: Props) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`${title} – Waschtls Schmankerl`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
    }
  };

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    padding: '0.45rem 0.9rem', borderRadius: '8px',
    fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
    border: '1.5px solid var(--border)', textDecoration: 'none',
    transition: 'background 0.15s',
    color: 'var(--text-dark)', background: 'var(--cream)',
  };

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
      alignItems: 'center',
    }}>
      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-light)' }}>
        Teilen:
      </span>

      {/* Pinterest */}
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`}
        target="_blank" rel="noopener noreferrer"
        style={{ ...btnStyle, borderColor: '#E60023', color: '#E60023' }}
        aria-label="Auf Pinterest pinnen"
      >
        📌 Pinterest
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        style={{ ...btnStyle, borderColor: '#25D366', color: '#128C7E' }}
        aria-label="Per WhatsApp teilen"
      >
        💬 WhatsApp
      </a>

      {/* Link kopieren */}
      <button
        onClick={handleCopy}
        style={{ ...btnStyle, fontFamily: 'inherit' }}
        aria-label="Link kopieren"
      >
        {copied ? '✅ Kopiert!' : '🔗 Link kopieren'}
      </button>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const nav = [
  { label: 'Rezepte',    href: '/rezepte' },
  { label: 'Wissen',     href: '/wissen' },
  { label: 'Produkte',   href: '/produkte' },
  { label: 'Über uns',   href: '/ueber-uns' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      background: 'var(--green-deep)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '3px solid var(--golden)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image
            src="/logo.png"
            alt="Waschtls Schmankerl Logo"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
          />
          <div>
            <span style={{
              fontWeight: 700,
              fontSize: '1.05rem',
              color: 'var(--golden)',
              display: 'block',
              lineHeight: 1.1,
            }}>
              Waschtl&apos;s Schmankerl
            </span>
            <span style={{
              fontSize: '0.68rem',
              color: 'var(--mint)',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}>
              glutenfrei &amp; aus Augsburg
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '0.25rem' }} aria-label="Hauptnavigation">
          {nav.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  fontWeight: active ? 600 : 500,
                  fontSize: '0.9rem',
                  color: active ? 'var(--golden)' : 'var(--mint)',
                  background: active ? 'rgba(233,196,106,0.12)' : 'transparent',
                  transition: 'all 0.15s',
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Burger */}
        <button
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--mint)',
            fontSize: '1.4rem',
          }}
          className="mobile-menu-btn"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav
          style={{
            background: 'var(--green-deep)',
            borderTop: '1px solid rgba(149,213,178,0.2)',
            padding: '0.75rem 1.25rem 1rem',
          }}
          aria-label="Mobile Navigation"
        >
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.6rem 0',
                color: pathname.startsWith(href) ? 'var(--golden)' : 'var(--mint)',
                fontWeight: 500,
                borderBottom: '1px solid rgba(149,213,178,0.15)',
                fontSize: '1rem',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 640px) {
          nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

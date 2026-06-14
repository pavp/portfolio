import { useState, useRef, useEffect } from 'react';

interface LangToggleProps {
  currentLocale: 'en' | 'es';
  currentPath: string;
}

const LOCALES: { code: 'en' | 'es'; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
];

export default function LangToggle({ currentLocale, currentPath }: LangToggleProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Build the URL for a given target locale, preserving the hash anchor.
  function urlForLocale(target: 'en' | 'es'): string {
    const hashIndex = currentPath.indexOf('#');
    const anchor = hashIndex !== -1 ? currentPath.slice(hashIndex) : '';
    const pathWithoutHash = hashIndex !== -1 ? currentPath.slice(0, hashIndex) : currentPath;

    // Normalize to the EN (no-prefix) path first.
    const enPath = pathWithoutHash.replace(/^\/es/, '') || '/';

    if (target === 'es') {
      const esPath = '/es' + (enPath === '/' ? '/' : enPath);
      return esPath + anchor;
    }
    return enPath + anchor;
  }

  function selectLocale(target: 'en' | 'es') {
    if (target === currentLocale) {
      setOpen(false);
      return;
    }
    localStorage.setItem('lang', target);
    window.location.href = urlForLocale(target);
  }

  // Close on outside click + Escape.
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const ariaLabel = currentLocale === 'en' ? 'Change language' : 'Cambiar idioma';

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className="nav-icon-btn"
        style={{
          background: 'none',
          border: 'none',
          borderRadius: '9999px',
          cursor: 'pointer',
          padding: '6px 10px',
          color: 'var(--text-variant)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          lineHeight: 1,
          transition: 'color 0.2s',
        }}
      >
        {/* globe glyph */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
        </svg>
        {/* current language code */}
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          {currentLocale.toUpperCase()}
        </span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={ariaLabel}
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: '160px',
            background: 'var(--surface)',
            border: '1px solid var(--card-border)',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
            padding: '4px',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {LOCALES.map((locale) => {
            const isActive = locale.code === currentLocale;
            return (
              <button
                key={locale.code}
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => selectLocale(locale.code)}
                className="lang-menu-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  width: '100%',
                  background: isActive ? 'var(--surface-hover)' : 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  color: isActive ? 'var(--accent)' : 'var(--text)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  textAlign: 'left',
                  transition: 'background-color 0.15s, color 0.15s',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      opacity: 0.7,
                      minWidth: '20px',
                    }}
                  >
                    {locale.label}
                  </span>
                  {locale.name}
                </span>
                {isActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

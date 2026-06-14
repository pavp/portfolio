interface LangToggleProps {
  currentLocale: 'en' | 'es';
  currentPath: string;
}

export default function LangToggle({ currentLocale, currentPath }: LangToggleProps) {
  function getCounterpartUrl(): string {
    // Preserve hash anchor if present
    const hashIndex = currentPath.indexOf('#');
    const anchor = hashIndex !== -1 ? currentPath.slice(hashIndex) : '';
    const pathWithoutHash = hashIndex !== -1 ? currentPath.slice(0, hashIndex) : currentPath;

    if (currentLocale === 'en') {
      // EN: / -> /es/
      const esPath = '/es' + (pathWithoutHash === '/' ? '/' : pathWithoutHash);
      return esPath + anchor;
    } else {
      // ES: /es/ -> /
      const enPath = pathWithoutHash.replace(/^\/es/, '') || '/';
      return enPath + anchor;
    }
  }

  function navigate() {
    const targetLocale = currentLocale === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', targetLocale);
    window.location.href = getCounterpartUrl();
  }

  const targetLabel = currentLocale === 'en' ? 'ES' : 'EN';
  const ariaLabel =
    currentLocale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés';

  return (
    <button
      onClick={navigate}
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        background: 'none',
        border: '1px solid var(--card-border)',
        borderRadius: '4px',
        cursor: 'pointer',
        padding: '4px 10px',
        color: 'var(--text)',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.05em',
        lineHeight: 1.5,
      }}
    >
      {targetLabel}
    </button>
  );
}

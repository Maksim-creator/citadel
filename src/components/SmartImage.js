import { useState } from 'react';

/**
 * Image with a graceful fallback: if the stock URL fails to load we drop the
 * broken <img> and keep the warm gradient placeholder from `.media`, so the
 * layout never shows a broken-image icon. Purely a mock-friendly safety net.
 */
export default function SmartImage({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`media ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          {...rest}
        />
      )}
    </div>
  );
}

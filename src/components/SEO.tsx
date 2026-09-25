import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Official portal for Mufti Muneer Ahmad Akhoon  -  Islamic scholar, educator, founder of Jamia Zakariyya, and spiritual mentor based in New York.',
}) => {
  useEffect(() => {
    const fullTitle = `${title} | Mufti Muneer Ahmad Akhoon`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

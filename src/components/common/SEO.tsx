import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const DEFAULT_TITLE = 'Reegan Gladis P — Software Development & AI/ML Engineer';
const DEFAULT_DESCRIPTION = 
  'Personal portfolio of Reegan Gladis P — Software Development Engineer, Full Stack Developer and AI/ML Engineer in Bengaluru, India. Building scalable enterprise systems, AI microservices, and interactive 3D web applications.';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalUrl,
}) => {
  const fullTitle = title 
    ? `${title} | Reegan Gladis P` 
    : DEFAULT_TITLE;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical URL if provided
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonicalUrl);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(linkCanonical);
      }
    }

    // Update Keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
  }, [fullTitle, description, keywords, canonicalUrl]);

  return null;
};

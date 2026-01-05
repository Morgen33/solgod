import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function Seo({ title, description, canonicalPath }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    ensureMeta("description").setAttribute("content", description);

    const ensureCanonical = () => {
      let link = document.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      return link;
    };

    const canonical = ensureCanonical();
    const origin = window.location.origin;
    const path = canonicalPath ?? window.location.pathname;
    canonical.setAttribute("href", `${origin}${path}`);
  }, [title, description, canonicalPath]);

  return null;
}

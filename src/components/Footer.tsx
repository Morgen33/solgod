import { Twitter, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/solgodsnfts", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.gg/nfts", label: "Discord" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SolGods. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

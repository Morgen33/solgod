import { Twitter, MessageCircle, Layers, ShoppingBag, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import solgodsIcon from "@/assets/solgods-icon.png";

const quickLinks = [
  { label: "X/Twitter", href: "https://x.com/SOLGodsNFTs", icon: Twitter },
  { label: "Discord", href: "https://discord.gg/nfts", icon: MessageCircle },
  { label: "Buy SolGods", href: "https://magiceden.io/marketplace/solgods_", icon: ShoppingBag },
  { label: "Stake", href: "https://sgstake.fluxinc.io/", icon: Layers },
  { label: "Linktree", href: "https://linktr.ee/SolGodsNFTS", icon: TreePine },
];

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Token", to: "/token" },
  { label: "DAO", to: "/dao" },
  { label: "Spaces", to: "/spaces" },
  { label: "SolCity", to: "/solcity" },
  { label: "Partnerships", to: "/partnerships" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="block mb-4">
              <img src={solgodsIcon} alt="SolGods" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Stand in the light. Build the system. Ascend as a SolGod.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                const isDiscord = link.label === "Discord";
                return (
                  <li key={link.label}>
                    {isDiscord ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(link.href, "_blank", "noopener,noreferrer");
                        }}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                      >
                        <Icon size={16} />
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon size={16} />
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SolGods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

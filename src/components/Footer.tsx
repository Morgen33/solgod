import { Twitter, MessageCircle, Layers, ShoppingBag, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import solgodsIcon from "@/assets/solgods-icon.png";
import linktreeQr from "@/assets/linktree-qr.webp";

const quickLinks = [
  { label: "X/Twitter", href: "https://x.com/SOLGodsNFTs", icon: Twitter },
  { label: "Discord", href: "https://discord.gg/nfts", icon: MessageCircle },
  { label: "Buy SolGods", href: "https://magiceden.us/marketplace/solgods_", icon: ShoppingBag },
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
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
        {/* Mobile Layout */}
        <div className="sm:hidden">
          {/* Brand - Centered on mobile */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-3">
              <img src={solgodsIcon} alt="SolGods" className="h-14 w-auto mx-auto brightness-150" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Stand in the light. Build the system. Ascend as a SolGod.
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-4 mb-8">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/40 hover:bg-primary/20 transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} className="text-[#01b2ff]" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links - 2 columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center mb-8 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
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
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon size={16} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Access</h4>
            <a 
              href="https://linktr.ee/SolGodsNFTS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-white via-white to-gray-100 shadow-lg group-hover:shadow-[0_0_30px_rgba(1,178,255,0.4)] transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#01b2ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={linktreeQr} 
                  alt="SolGods Linktree QR Code" 
                  className="w-24 h-24 rounded-xl relative z-10"
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-[#01b2ff] transition-colors font-medium">
                Scan to Connect
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/50 flex items-center justify-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} SolGods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

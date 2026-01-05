import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import solgodsLogo from "@/assets/solgods-logo.png";

const navLinks = [
  { href: "/", label: "Home", external: false },
  { href: "/about", label: "About", external: false },
  { href: "/dao", label: "DAO", external: false },
  { href: "/token", label: "Token", external: false },
  { href: "/partnerships", label: "Partnerships", external: false },
  { href: "https://solgodcal.lovable.app/", label: "Spaces", external: true },
  { href: "/solcity", label: "SolCity", external: false },
  { href: "/team", label: "Team", external: false },
  { href: "/join", label: "Join", external: false },
];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={solgodsLogo} alt="SOLGODS" className="h-10 sm:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(link.href, '_blank', 'noopener,noreferrer,width=1200,height=800');
                  }}
                  className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      window.open(link.href, '_blank', 'noopener,noreferrer,width=1200,height=800');
                    }}
                    className="px-4 py-3 text-sm font-medium transition-colors rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import solgodsIcon from "@/assets/solgods-icon.png";

const standaloneLinks = [
  { href: "/home", label: "Home", external: false },
  { href: "/token", label: "Token", external: false },
  { href: "/solcity", label: "SolCity", external: false },
];

const dropdowns = [
  {
    label: "Community",
    items: [
      { href: "/dao", label: "DAO", external: false },
      { href: "/partnerships", label: "Partnerships", external: false },
      { href: "https://solgodcal.lovable.app/", label: "Spaces", external: true },
      { href: "/join", label: "Join", external: false },
    ],
  },
];

function DropdownMenu({ label, items, currentPath, onItemClick }: { 
  label: string; 
  items: { href: string; label: string; external: boolean }[];
  currentPath: string;
  onItemClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveDropdown = items.some(item => currentPath === item.href);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
          isActiveDropdown
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        }`}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-44 py-2 bg-card border border-border rounded-lg shadow-xl z-50">
          {items.map((item) => (
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onItemClick?.();
                  window.open(item.href, '_blank', 'noopener,noreferrer,width=1200,height=800');
                }}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
                className={`block px-4 py-2 text-sm transition-colors ${
                  currentPath === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/home" className="flex items-center gap-2">
            <img src={solgodsIcon} alt="SolGods" className="h-10 sm:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {/* Intro */}
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              Intro
            </Link>

            {/* Home */}
            <Link
              to="/home"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/home"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/about"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              About
            </Link>

            {/* SolGods */}
            <Link
              to="/solgods"
              className={`px-4 py-2 text-sm font-bold transition-all rounded-lg border ${
                location.pathname === "/solgods"
                  ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] border-transparent shadow-lg shadow-[#01b2ff]/30"
                  : "text-[#01b2ff] border-[#01b2ff]/50 hover:bg-[#01b2ff]/10 hover:border-[#01b2ff]"
              }`}
            >
              SolGods
            </Link>

            {/* SolCity */}
            <Link
              to="/solcity"
              className={`px-4 py-2 text-sm font-bold transition-all rounded-lg border ${
                location.pathname === "/solcity"
                  ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] border-transparent shadow-lg shadow-[#01b2ff]/30"
                  : "text-[#01b2ff] border-[#01b2ff]/50 hover:bg-[#01b2ff]/10 hover:border-[#01b2ff]"
              }`}
            >
              SolCity
            </Link>

            {/* Token */}
            <Link
              to="/token"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/token"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              Token
            </Link>

            {/* Community Dropdown */}
            <DropdownMenu 
              label="Community" 
              items={dropdowns[0].items} 
              currentPath={location.pathname} 
            />

            {/* Gallery */}
            <Link
              to="/gallery"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/gallery"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              Gallery
            </Link>

            {/* Team */}
            <Link
              to="/team"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === "/team"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              Team
            </Link>
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
              {/* Intro */}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium transition-colors rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                Intro
              </Link>

              {/* Home */}
              <Link
                to="/home"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === "/home"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === "/about"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                About
              </Link>

              {/* SolGods */}
              <Link
                to="/solgods"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-bold transition-all rounded-lg border ${
                  location.pathname === "/solgods"
                    ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] border-transparent shadow-lg shadow-[#01b2ff]/30"
                    : "text-[#01b2ff] border-[#01b2ff]/50 hover:bg-[#01b2ff]/10 hover:border-[#01b2ff]"
                }`}
              >
                SolGods
              </Link>

              {/* SolCity */}
              <Link
                to="/solcity"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-bold transition-all rounded-lg border ${
                  location.pathname === "/solcity"
                    ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] border-transparent shadow-lg shadow-[#01b2ff]/30"
                    : "text-[#01b2ff] border-[#01b2ff]/50 hover:bg-[#01b2ff]/10 hover:border-[#01b2ff]"
                }`}
              >
                SolCity
              </Link>

              {/* Token */}
              <Link
                to="/token"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === "/token"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Token
              </Link>

              {/* Community Section */}
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                Community
              </div>
              {dropdowns[0].items.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      window.open(item.href, '_blank', 'noopener,noreferrer,width=1200,height=800');
                    }}
                    className="px-6 py-3 text-sm font-medium transition-colors rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-6 py-3 text-sm font-medium transition-colors rounded-lg ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              {/* Gallery */}
              <Link
                to="/gallery"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === "/gallery"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Gallery
              </Link>

              {/* Team */}
              <Link
                to="/team"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === "/team"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Team
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

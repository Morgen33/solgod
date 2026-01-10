import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import solgodsIcon from "@/assets/solgods-icon.png";

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
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all relative ${
          isActiveDropdown
            ? "text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        {isActiveDropdown && (
          <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#01b2ff] to-[#38bdf8] rounded-full" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-44 py-2 bg-[#0a0f1a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 z-50">
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
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
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
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  currentPath === item.href
                    ? "text-[#01b2ff] bg-[#01b2ff]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
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

// Nav link component for consistency
function NavLink({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-all ${
        isActive
          ? "text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#01b2ff] to-[#38bdf8] rounded-full" />
      )}
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-[#050a12]/80 backdrop-blur-xl border-b border-white/[0.08]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo area - simplified */}
          <Link to="/home" className="flex items-center gap-2 group">
            {/* Mini orb integrated with logo */}
            <div className="relative w-7 h-7 flex-shrink-0">
              <Link
                to="/"
                className="absolute inset-0"
                title="Play with the Orb"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#0a1628] opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#0c1a3d]" />
                <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-[#3b82f6] via-[#1d4ed8] to-[#0f172a]" />
                <div className="absolute top-1/3 left-1/3 w-2 h-1 rounded-full bg-[#00e5ff]/70 blur-[2px] rotate-[-20deg]" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_8px_2px_rgba(37,99,235,0.5)] hover:shadow-[0_0_12px_3px_rgba(37,99,235,0.7)] transition-shadow" />
              </Link>
            </div>
            <img src={solgodsIcon} alt="SolGods" className="h-9 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full flex-1">
            {/* SolGods/SolCity/$SOLGODS - Premium segmented control on left */}
            <div className="relative flex items-center p-1 rounded-xl bg-gradient-to-r from-[#01b2ff]/10 to-[#0190cc]/10 border border-[#01b2ff]/20 shadow-[0_0_20px_rgba(1,178,255,0.15)] ml-4">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#01b2ff]/5 to-[#38bdf8]/5 blur-sm" />
              <Link
                to="/solgods"
                className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === "/solgods"
                    ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] shadow-lg shadow-[#01b2ff]/30"
                    : "text-[#01b2ff] hover:text-white hover:bg-white/10"
                }`}
              >
                SolGods
              </Link>
              <Link
                to="/solcity"
                className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === "/solcity"
                    ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] shadow-lg shadow-[#01b2ff]/30"
                    : "text-[#01b2ff] hover:text-white hover:bg-white/10"
                }`}
              >
                SolCity
              </Link>
              <Link
                to="/token"
                className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === "/token"
                    ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff] shadow-lg shadow-[#01b2ff]/30"
                    : "text-[#01b2ff] hover:text-white hover:bg-white/10"
                }`}
              >
                $SOLGODS
              </Link>
            </div>
            
            {/* Nav links pushed to the right */}
            <div className="flex items-center gap-0.5 ml-auto">
              <NavLink to="/home" isActive={location.pathname === "/home"}>Home</NavLink>
              <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
              <NavLink to="/gallery" isActive={location.pathname === "/gallery"}>Gallery</NavLink>
              <NavLink to="/team" isActive={location.pathname === "/team"}>Team</NavLink>
              <DropdownMenu 
                label="Community" 
                items={dropdowns[0].items} 
                currentPath={location.pathname} 
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-white/[0.08]">
            <div className="flex flex-col gap-1">
              {/* Orb Link */}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors"
              >
                <div className="relative w-5 h-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#0a1628]" />
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#0c1a3d]" />
                  <div className="absolute top-1/4 left-1/4 w-1.5 h-0.5 rounded-full bg-[#00e5ff]/60 blur-[1px] rotate-[-20deg]" />
                </div>
                Play with the Orb
              </Link>

              {/* SolGods/SolCity/$SOLGODS as grouped segment right under the orb */}
              <div className="flex gap-2 px-4 py-2">
                <Link
                  to="/solgods"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 px-3 py-2.5 text-sm font-medium text-center rounded-lg transition-all ${
                    location.pathname === "/solgods"
                      ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff]"
                      : "text-[#01b2ff] bg-[#01b2ff]/10 hover:bg-[#01b2ff]/20"
                  }`}
                >
                  SolGods
                </Link>
                <Link
                  to="/solcity"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 px-3 py-2.5 text-sm font-medium text-center rounded-lg transition-all ${
                    location.pathname === "/solcity"
                      ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff]"
                      : "text-[#01b2ff] bg-[#01b2ff]/10 hover:bg-[#01b2ff]/20"
                  }`}
                >
                  SolCity
                </Link>
                <Link
                  to="/token"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 px-3 py-2.5 text-sm font-medium text-center rounded-lg transition-all ${
                    location.pathname === "/token"
                      ? "text-white bg-gradient-to-r from-[#0190cc] to-[#01b2ff]"
                      : "text-[#01b2ff] bg-[#01b2ff]/10 hover:bg-[#01b2ff]/20"
                  }`}
                >
                  $SOLGODS
                </Link>
              </div>

              <Link
                to="/home"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === "/home"
                    ? "text-[#01b2ff] bg-[#01b2ff]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === "/about"
                    ? "text-[#01b2ff] bg-[#01b2ff]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                About
              </Link>

              {/* Community Section - Collapsible */}
              <Collapsible defaultOpen={false} className="mt-2">
                <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  <span>Community</span>
                  <ChevronDown size={16} className="transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
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
                        className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname === item.href
                            ? "text-[#01b2ff] bg-[#01b2ff]/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Link
                to="/gallery"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === "/gallery"
                    ? "text-[#01b2ff] bg-[#01b2ff]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/team"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === "/team"
                    ? "text-[#01b2ff] bg-[#01b2ff]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
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

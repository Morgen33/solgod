import { Layout } from "@/components/Layout";
import { ArrowRight, Twitter, MessageCircle, Layers, Gift, TrendingUp, Shield, Globe, Sparkles, Cog } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RotatingText } from "@/components/ui/rotating-text";
import { GlowCard } from "@/components/ui/spotlight-card";
import { StarText } from "@/components/ui/star-text";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";

const quickLinks = [
  {
    label: "X/Twitter",
    href: "https://x.com/SOLGodsNFTs",
    icon: Twitter,
    description: "Follow for updates & alpha"
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/gtrFTsmEAE",
    icon: MessageCircle,
    description: "Join the community chat"
  },
  {
    label: "Buy SolGods",
    href: "https://magiceden.io/marketplace/solgods_",
    icon: Gift,
    description: "Get yours on Magic Eden"
  },
  {
    label: "Stake",
    href: "https://sgstake.fluxinc.io/",
    icon: Layers,
    description: "Earn rewards by staking"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Subtle dot grid overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--blue-soft) / 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 pt-20 md:pt-0 relative">
        {/* Hero Logo */}
        <div className="mb-6 md:mb-8" style={{ animation: "fade-in 0.8s ease-out 0.2s forwards", opacity: 0 }}>
          <img 
            src={solgodsMainLogo} 
            alt="SolGods Logo" 
            className="w-36 sm:w-48 md:w-64 h-auto mx-auto"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6 md:mb-8" style={{ animation: "fade-in 0.8s ease-out 0.4s forwards", opacity: 0 }}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold italic text-foreground mb-2">
            Probably
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold italic" style={{ perspective: "1000px" }}>
            <RotatingText />
          </h1>
        </div>

        {/* Subtitle */}
        <p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-xl mb-8 md:mb-12 px-2"
          style={{ animation: "fade-in 0.8s ease-out 0.4s forwards", opacity: 0 }}
        >
          Join the family of traders, creators, and raiders rewriting what it means to be part of Web3.
        </p>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-16 w-full sm:w-auto px-4 sm:px-0"
          style={{ animation: "fade-in 0.8s ease-out 0.6s forwards", opacity: 0 }}
        >
          <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
            Buy SolGods
            <ArrowRight size={20} />
          </ShinyButton>
          <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
            Join Discord
          </ShinyButton>
        </div>

        {/* Quick Links Card */}
        <div 
          className="w-full max-w-4xl px-2"
          style={{ animation: "fade-in 0.8s ease-out 0.8s forwards", opacity: 0 }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon size={16} className="md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-foreground text-xs md:text-sm truncate">{link.label}</h4>
                      <p className="text-xs text-muted-foreground hidden sm:block truncate">{link.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why SolGods Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-bold font-cinzel text-center mb-4"
            style={{ color: "#e8e4dc" }}
          >
            WHY SOLGODS
          </h2>
          <p className="text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base px-2">
            SolGods is a Value-First Ecosystem where digital identity meets a high-performance growth engine. We've moved beyond static art to create a system that prioritizes community outcomes and long-term sustainability.
          </p>

          {/* Pillars */}
          <div className="space-y-12 md:space-y-16">
            {/* Pillar 1: The Sol Core Treasury */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)" }}>
                  <Cog style={{ color: "#ffffff", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }} size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#01b2ff" }}>1. The Sol Core Treasury</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Your SolGod is more than a profile picture; it is your entry point to a sophisticated, active treasury. We put the project's resources to work to ensure the ecosystem remains self-sustaining and constantly evolving.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Active Ecosystem Management</h4>
                    <p className="text-muted-foreground">We utilize internal strategies to grow our holdings and generate consistent, tangible value for the project.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Engagement-Led Rewards</h4>
                    <p className="text-muted-foreground">We believe in rewarding those who build the culture. Through our Discord Chat-to-Earn systems and Raid-to-Reward bounties, active members are directly incentivized for their contributions.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Exclusive Holder Perks</h4>
                    <p className="text-muted-foreground">Membership has its privileges. Holders gain access to exclusive giveaways, high-signal alpha calls, and specialized perks reserved strictly for SolGods holders.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Sustainable Scaling</h4>
                    <p className="text-muted-foreground">By reinvesting a portion of our ecosystem gains, we constantly increase the treasury's strength. As the world of Solara grows, so does the power and reach of its holders.</p>
                  </div>
                </GlowCard>
              </div>
            </div>

            {/* Pillar 2: Foundation of Integrity */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)" }}>
                  <Shield style={{ color: "#ffffff", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }} size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#01b2ff" }}>2. A Foundation of Integrity</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                We built our reputation on a simple principle: Deliver value before asking for a single cent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Results First</h4>
                    <p className="text-muted-foreground">Our community thrived long before the mint. We established ourselves by sharing growth frameworks and strategies that helped our members level up their own digital presence and trading discipline.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Proven Performance</h4>
                    <p className="text-muted-foreground">This "value-first" approach wasn't just a philosophy—it led to a 20x increase from our initial launch price. This established the rock-solid foundation for the treasury that supports the project today.</p>
                  </div>
                </GlowCard>
              </div>
            </div>

            {/* Pillar 3: Living Economy */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)" }}>
                  <Globe style={{ color: "#ffffff", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }} size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#01b2ff" }}>3. A Living, Breathing Economy</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                From the ancient origins of Solara to our expansion into new frontiers, the SolGods ecosystem is a thriving, bustling economy.
              </p>
              <div>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#e8e4dc" }}>Collaborative Growth</h4>
                    <p className="text-muted-foreground">We don't exist in a vacuum. We actively collaborate across the Solana network, integrating assets and building a cross-ecosystem engine designed to evolve, not stagnate.</p>
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>

          {/* The Difference */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-card/50 border border-border">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-center">The SolGods Difference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <GlowCard glowColor="blue" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <p className="text-sm mb-2 font-semibold tracking-wide" style={{ color: "#377af2", fontFamily: "'Cinzel', serif" }}>Static Collections</p>
                  <p className="font-semibold">Depend entirely on the "next buyer" for value.</p>
                </div>
              </GlowCard>
              <GlowCard glowColor="blue" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <p className="text-sm mb-2 font-semibold tracking-wide" style={{ color: "#377af2", fontFamily: "'Cinzel', serif" }}>SolGods</p>
                  <p className="font-semibold">Powered by a managed system designed to generate and distribute value internally, ensuring the sun never sets on the SolGods.</p>
                </div>
              </GlowCard>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-6 sm:p-8 md:p-12 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2d5fbd" }}>Ascend to Divinity</h2>
              <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm md:text-base">
                Become a SolGod. Don't just watch the system grow—help drive it. Join our Discord to secure your place in the inner circle, where the sharpest minds share the latest alpha and every member plays a part in our collective rise.
              </p>
              <p className="text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
                From exclusive insights to the heart of the Solara economy, the journey to ascendancy starts here.
              </p>
              <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
                Join Discord
              </ShinyButton>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
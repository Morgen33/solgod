import { Layout } from "@/components/Layout";
import { ArrowRight, Twitter, MessageCircle, Layers, Gift, TrendingUp, Shield, Globe, Sparkles, Cog } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RotatingText } from "@/components/ui/rotating-text";
import { GlowCard } from "@/components/ui/spotlight-card";
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
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative">
        {/* Hero Logo */}
        <div className="mb-8" style={{ animation: "fade-in 0.8s ease-out 0.2s forwards", opacity: 0 }}>
          <img 
            src={solgodsMainLogo} 
            alt="SolGods Logo" 
            className="w-48 sm:w-56 md:w-64 h-auto mx-auto"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8" style={{ animation: "fade-in 0.8s ease-out 0.4s forwards", opacity: 0 }}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold italic text-foreground mb-2">
            Probably
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold italic" style={{ perspective: "1000px" }}>
            <RotatingText />
          </h1>
        </div>

        {/* Subtitle */}
        <p 
          className="text-lg sm:text-xl text-muted-foreground text-center max-w-xl mb-12"
          style={{ animation: "fade-in 0.8s ease-out 0.4s forwards", opacity: 0 }}
        >
          Join the family of traders, creators, and raiders rewriting what it means to be part of Web3.
        </p>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
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
          className="w-full max-w-4xl"
          style={{ animation: "fade-in 0.8s ease-out 0.8s forwards", opacity: 0 }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{link.label}</h4>
                      <p className="text-xs text-muted-foreground">{link.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why SolGods Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)",
              backgroundSize: "200% 100%",
            }}
          >
            WHY SOL GODS
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            SolGods is a Value-First Ecosystem where digital identity meets a high-performance growth engine. We've moved beyond static art to create a system that prioritizes community outcomes and long-term sustainability.
          </p>

          {/* Pillars */}
          <div className="space-y-16">
            {/* Pillar 1: The Sol Core Treasury */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)" }}>
                  <Cog style={{ color: "#ffffff", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }} size={28} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#01b2ff" }}>1. The Sol Core Treasury</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                Your SolGod is more than a profile picture; it is your entry point to a sophisticated, active treasury. We put the project's resources to work to ensure the ecosystem remains self-sustaining and constantly evolving.
              </p>
              <div className="grid md:grid-cols-2 gap-6 ml-14">
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Active Ecosystem Management</h4>
                    <p className="text-sm text-muted-foreground">We utilize internal strategies to grow our holdings and generate consistent, tangible value for the project.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Engagement-Led Rewards</h4>
                    <p className="text-sm text-muted-foreground">We believe in rewarding those who build the culture. Through our Discord Chat-to-Earn systems and Raid-to-Reward bounties, active members are directly incentivized for their contributions.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Exclusive Holder Perks</h4>
                    <p className="text-sm text-muted-foreground">Membership has its privileges. Holders gain access to exclusive giveaways, high-signal alpha calls, and specialized perks reserved strictly for SolGods holders.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Sustainable Scaling</h4>
                    <p className="text-sm text-muted-foreground">By reinvesting a portion of our ecosystem gains, we constantly increase the treasury's strength. As the world of Solara grows, so does the power and reach of its holders.</p>
                  </div>
                </GlowCard>
              </div>
            </div>

            {/* Pillar 2: Foundation of Integrity */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)" }}>
                  <Shield style={{ color: "#ffffff", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }} size={28} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#01b2ff" }}>2. A Foundation of Integrity</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                We built our reputation on a simple principle: Deliver value before asking for a single cent.
              </p>
              <div className="grid md:grid-cols-2 gap-6 ml-14">
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Results First</h4>
                    <p className="text-sm text-muted-foreground">Our community thrived long before the mint. We established ourselves by sharing growth frameworks and strategies that helped our members level up their own digital presence and trading discipline.</p>
                  </div>
                </GlowCard>
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Proven Performance</h4>
                    <p className="text-sm text-muted-foreground">This "value-first" approach wasn't just a philosophy—it led to a 20x increase from our initial launch price. This established the rock-solid foundation for the treasury that supports the project today.</p>
                  </div>
                </GlowCard>
              </div>
            </div>

            {/* Pillar 3: Living Economy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)" }}>
                  <Globe style={{ color: "#ffffff", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }} size={28} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#01b2ff" }}>3. A Living, Breathing Economy</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                From the ancient origins of Solara to our expansion into new frontiers, the SolGods ecosystem is a thriving, bustling economy.
              </p>
              <div className="ml-14">
                <GlowCard glowColor="blue" customSize className="w-full h-auto">
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2" style={{ color: "#66d9ff" }}>Collaborative Growth</h4>
                    <p className="text-sm text-muted-foreground">We don't exist in a vacuum. We actively collaborate across the Solana network, integrating assets and building a cross-ecosystem engine designed to evolve, not stagnate.</p>
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>

          {/* The Difference */}
          <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border">
            <h3 className="text-xl font-bold mb-6 text-center">The SolGods Difference</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <GlowCard glowColor="blue" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <p className="text-muted-foreground text-sm mb-2">Static Collections</p>
                  <p className="font-semibold">Depend entirely on the "next buyer" for value.</p>
                </div>
              </GlowCard>
              <GlowCard glowColor="blue" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <p className="text-primary text-sm mb-2">SolGods</p>
                  <p className="font-semibold">Powered by a managed system designed to generate and distribute value internally, ensuring the sun never sets on the SOLGODs.</p>
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-center text-lg font-semibold mt-12 text-muted-foreground">
            Stand in the light. Build the system. <span className="text-primary">Ascend as a SolGod.</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ascend to Divinity</h2>
              <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                Become a SolGod. Don't just watch the system grow—help drive it. Join our Discord to secure your place in the inner circle, where the sharpest minds share the latest alpha and every member plays a part in our collective rise.
              </p>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
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
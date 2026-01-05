import { Layout } from "@/components/Layout";
import { ArrowRight, Twitter, MessageCircle, Layers, Gift, TrendingUp, Shield, Globe, Sparkles, Cog } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RotatingText } from "@/components/ui/rotating-text";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";

const quickLinks = [
  {
    label: "X/Twitter",
    href: "https://x.com/SOLGodNFTs",
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
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--purple-soft) / 0.4) 1px, transparent 0)`,
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
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            WHY SOLGODS?
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A Value-First Ecosystem where digital identity meets a high-performance growth engine. We've moved beyond static art to create a system that prioritizes community outcomes and long-term sustainability.
          </p>

          {/* Pillars */}
          <div className="space-y-16">
            {/* Pillar 1: Capital Allocation Engine */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Cog className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">1. The Capital Allocation Engine</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                Your NFT acts as an entry point to a sophisticated treasury management system. We put the project's capital to work to ensure the ecosystem remains self-sustaining and rewarding.
              </p>
              <div className="grid md:grid-cols-3 gap-6 ml-14">
                <SpotlightCard glowColor="purple" className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Active Treasury Management</h4>
                  <p className="text-sm text-muted-foreground">We utilize strategies to grow our holdings and generate consistent value.</p>
                </SpotlightCard>
                <SpotlightCard glowColor="gold" className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Holder Rewards</h4>
                  <p className="text-sm text-muted-foreground">Realized growth is distributed back to our community through regular quarterly airdrops.</p>
                </SpotlightCard>
                <SpotlightCard glowColor="silver" className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Automatic Scaling</h4>
                  <p className="text-sm text-muted-foreground">By reinvesting a portion of our gains, we constantly increase the treasury's power, aiming for larger rewards over time.</p>
                </SpotlightCard>
              </div>
            </div>

            {/* Pillar 2: Foundation of Integrity */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Shield className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">2. A Foundation of Integrity</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                We built our reputation on delivering value before asking for a single cent.
              </p>
              <div className="grid md:grid-cols-2 gap-6 ml-14">
                <SpotlightCard glowColor="purple" className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Results First</h4>
                  <p className="text-sm text-muted-foreground">Our community thrived early on through shared strategies and growth frameworks that helped members level up their own digital presence.</p>
                </SpotlightCard>
                <SpotlightCard glowColor="gold" className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Proven Performance</h4>
                  <p className="text-sm text-muted-foreground">This "value-first" approach led to a 20x increase from our initial launch price, establishing a rock-solid foundation for our treasury.</p>
                </SpotlightCard>
              </div>
            </div>

            {/* Pillar 3: Living Economy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Globe className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">3. A Living Economy</h3>
              </div>
              <p className="text-muted-foreground ml-14">
                From the origins of Solara to the expansion into Sol City, our ecosystem is a thriving, bustling economy. We don't exist in isolation; we collaborate across the network, integrating new assets and creating a cross-ecosystem engine that is designed to evolve, not stagnate.
              </p>
            </div>
          </div>

          {/* The Difference */}
          <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border">
            <h3 className="text-xl font-bold mb-6 text-center">The Difference</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-secondary/30 border border-border/50 text-center">
                <p className="text-muted-foreground text-sm mb-2">Static Collections</p>
                <p className="font-semibold">Depend entirely on the next buyer.</p>
              </div>
              <div className="p-5 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <p className="text-primary text-sm mb-2">SolGods</p>
                <p className="font-semibold">Powered by a managed system designed to generate and distribute value internally.</p>
              </div>
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
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Ascend?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of holders in the SolGods community and be part of something bigger.
            </p>
            <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
              Join the Community
              <ArrowRight size={20} />
            </ShinyButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
import { Layout } from "@/components/Layout";
import { ArrowRight, Coins, Users, Zap, Twitter, MessageCircle, Layers, Gift, Sparkles } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RotatingText } from "@/components/ui/rotating-text";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";

const quickLinks = [
  {
    label: "Twitter/X",
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

      {/* Features Section */}
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
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Built on Solana for speed, governed by the community, powered by $GODS.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Coins className="text-primary" size={28} />}
              title="$GODS Token"
              description="Stake, vote, and earn with the native governance token powering the SolGods ecosystem."
            />
            <FeatureCard 
              icon={<Users className="text-primary" size={28} />}
              title="DAO Governance"
              description="Community-first decision making. Every holder has a voice in shaping our destiny."
            />
            <FeatureCard 
              icon={<Zap className="text-primary" size={28} />}
              title="Solana Speed"
              description="Built on Solana for lightning-fast transactions and minimal fees."
            />
          </div>
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-card/30 border border-border/50 text-center hover:border-primary/30 transition-colors">
      <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default Index;
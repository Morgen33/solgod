import { Layout } from "@/components/Layout";
import { ArrowRight, Coins, Users, Zap, Twitter, Send, Layers, Gift } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MorphingText } from "@/components/ui/morphing-text";
import solcityLogo from "@/assets/solcity-logo.png";

const quickLinks = [{
  label: "Twitter/X",
  href: "https://x.com/SOLGodNFTs",
  icon: Twitter,
  description: "Follow for updates & alpha"
}, {
  label: "Telegram",
  href: "https://t.me/+TonrvVIf1t4zOGE0",
  icon: Send,
  description: "Join the community chat"
}, {
  label: "Stake",
  href: "https://sgstake.fluxinc.io/",
  icon: Layers,
  description: "Earn rewards by staking"
}, {
  label: "Mystery Pack",
  href: "https://sgtailor.fluxinc.io/packs",
  icon: Gift,
  description: "Open exclusive packs"
}];

const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16" style={{
          animation: "fade-in 0.8s ease-out forwards"
        }}>
            <img src={solcityLogo} alt="SolCity" className="w-64 sm:w-80 md:w-96 mx-auto" />
            <MorphingText words={["Probably Nothing", "Probably Something", "Probably Everything"]} className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4" interval={2500} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" style={{
          animation: "fade-in 0.8s ease-out 0.4s forwards",
          opacity: 0
        }}>
            <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
              Buy SolGods
              <ArrowRight size={20} />
            </ShinyButton>
            <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
              Join Discord
            </ShinyButton>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" style={{
            animation: "fade-in 0.8s ease-out 0.6s forwards",
            opacity: 0
          }}>
            {quickLinks.map(link => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-semibold text-foreground mb-1">{link.label}</h4>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #a1e25b, #32db9a, #098fcc, #32db9a, #a1e25b)",
              backgroundSize: "200% 100%",
            }}
          >
            WHY SOLGODS?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureItem icon={<Coins className="text-primary" size={32} />} title="$GODS Token" description="Stake, vote, and earn with the native governance token powering the SolGods ecosystem." delay="0.1s" />
            <FeatureItem icon={<Users className="text-primary" size={32} />} title="DAO Governance" description="Community-first decision making. Every holder has a voice in shaping our destiny." delay="0.2s" />
            <FeatureItem icon={<Zap className="text-primary" size={32} />} title="Solana Speed" description="Built on Solana for lightning-fast transactions and minimal fees." delay="0.3s" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Ascend?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the family of X reply guys, traders, creators, and raiders rewriting what it means to be part of Web3.
          </p>
          <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
            Join Discord
            <ArrowRight size={20} />
          </ShinyButton>
        </div>
      </section>
    </Layout>;
};

function FeatureItem({
  icon,
  title,
  description,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return <div className="text-center" style={{
    animation: `fade-in-up 0.6s ease-out ${delay} forwards`,
    opacity: 0
  }}>
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>;
}

export default Index;

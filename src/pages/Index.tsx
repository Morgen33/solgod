import { Layout } from "@/components/Layout";
import { ArrowRight, Coins, Users, Zap, ExternalLink } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MorphingText } from "@/components/ui/morphing-text";
import solcityLogo from "@/assets/solcity-logo.png";

const quickLinks = [{
  label: "Twitter/X",
  href: "https://x.com/SOLGodNFTs"
}, {
  label: "Telegram",
  href: "https://t.me/+TonrvVIf1t4zOGE0"
}, {
  label: "Stake",
  href: "https://sgstake.fluxinc.io/"
}, {
  label: "Mystery Pack",
  href: "https://sgtailor.fluxinc.io/packs"
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
          <div className="flex flex-wrap gap-3 justify-center" style={{
          animation: "fade-in 0.8s ease-out 0.6s forwards",
          opacity: 0
        }}>
            {quickLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border/50 rounded-full hover:border-primary/50 transition-colors inline-flex items-center gap-1.5">
                {link.label}
                <ExternalLink size={12} />
              </a>)}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gold-gradient">
            WHY SOLGODS?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Coins className="text-primary" size={32} />} title="$GODS Token" description="Stake, vote, and earn with the native governance token powering the SolGods ecosystem." delay="0.1s" />
            <FeatureCard icon={<Users className="text-primary" size={32} />} title="DAO Governance" description="Community-first decision making. Every holder has a voice in shaping our destiny." delay="0.2s" />
            <FeatureCard icon={<Zap className="text-primary" size={32} />} title="Solana Speed" description="Built on Solana for lightning-fast transactions and minimal fees." delay="0.3s" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glow rounded-2xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Ascend?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join the family of X reply guys, traders, creators, and raiders rewriting what it means to be part of Web3.
            </p>
            <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
              Join Discord
              <ArrowRight size={20} />
            </ShinyButton>
          </div>
        </div>
      </section>
    </Layout>;
};

function FeatureCard({
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
  return <div className="card-glow rounded-xl p-8 hover:scale-105 transition-transform duration-300" style={{
    animation: `fade-in-up 0.6s ease-out ${delay} forwards`,
    opacity: 0
  }}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>;
}

export default Index;

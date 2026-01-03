import { Layout } from "@/components/Layout";
import { ArrowRight, Coins, Users, Zap, Twitter, Send, Layers, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    label: "Twitter/X",
    href: "https://x.com/SOLGodNFTs",
    icon: Twitter,
    description: "Follow for updates & alpha"
  },
  {
    label: "Telegram",
    href: "https://t.me/+TonrvVIf1t4zOGE0",
    icon: Send,
    description: "Join the community chat"
  },
  {
    label: "Stake",
    href: "https://sgstake.fluxinc.io/",
    icon: Layers,
    description: "Earn rewards by staking"
  },
  {
    label: "Mystery Pack",
    href: "https://sgtailor.fluxinc.io/packs",
    icon: Gift,
    description: "Open exclusive packs"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">SolGods</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Probably Nothing. Probably Something. Probably Everything.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild>
              <a href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
                Buy SolGods
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border rounded-lg p-4 hover:bg-accent transition-colors"
                >
                  <Icon className="text-primary mb-2" size={24} />
                  <h4 className="font-semibold mb-1">{link.label}</h4>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why SolGods?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Coins className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">$GODS Token</h3>
              <p className="text-muted-foreground">
                Stake, vote, and earn with the native governance token powering the SolGods ecosystem.
              </p>
            </div>
            <div className="text-center">
              <Users className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">DAO Governance</h3>
              <p className="text-muted-foreground">
                Community-first decision making. Every holder has a voice in shaping our destiny.
              </p>
            </div>
            <div className="text-center">
              <Zap className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Solana Speed</h3>
              <p className="text-muted-foreground">
                Built on Solana for lightning-fast transactions and minimal fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ascend?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the family of X reply guys, traders, creators, and raiders rewriting what it means to be part of Web3.
          </p>
          <Button asChild>
            <a href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
              Join Discord
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
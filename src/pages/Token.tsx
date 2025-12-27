import { Layout } from "@/components/Layout";
import { TrendingUp, Lock, Sparkles, BarChart3 } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const Token = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold text-gold-gradient mb-4 text-center">
            $GODS TOKEN
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            The governance and utility token powering the SolGods ecosystem.
          </p>

          {/* Tokenomics */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Tokenomics</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <TokenStat value="1B" label="Total Supply" icon={<BarChart3 size={24} />} />
              <TokenStat value="40%" label="Community" icon={<Sparkles size={24} />} />
              <TokenStat value="25%" label="Treasury" icon={<Lock size={24} />} />
              <TokenStat value="35%" label="Ecosystem" icon={<TrendingUp size={24} />} />
            </div>
          </div>

          {/* Utility */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-glow rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Governance</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Vote on DAO proposals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Submit governance proposals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Influence treasury allocation
                </li>
              </ul>
            </div>
            <div className="card-glow rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Utility</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Access exclusive features
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Stake for rewards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Discounts on merchandise
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton as="a" href="https://dexscreener.com/solana/bomtmymoe7efgu2rytqjjg1mjsub6wjpqw13jpivjgkp" target="_blank" rel="noopener noreferrer">
              View on DEX Screener
              <TrendingUp size={20} />
            </ShinyButton>
            <a
              href="https://sgstake.fluxinc.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-lg font-medium border border-border bg-secondary/50 hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
            >
              Stake Your Gods
              <Lock size={20} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function TokenStat({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="text-center p-6 bg-secondary/30 rounded-xl">
      <div className="text-primary mb-2 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default Token;

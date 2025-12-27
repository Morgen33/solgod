import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Coins, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-6xl sm:text-8xl md:text-9xl font-bold text-gold-gradient mb-6"
            style={{ animation: "fade-in 0.8s ease-out forwards" }}
          >
            SOLGODS
          </h1>
          <p 
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
            style={{ animation: "fade-in 0.8s ease-out 0.2s forwards", opacity: 0 }}
          >
            The divine collection on Solana. Join the pantheon and shape the future of decentralized culture.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "fade-in 0.8s ease-out 0.4s forwards", opacity: 0 }}
          >
            <a
              href="https://magiceden.us/marketplace/solgods_"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Buy SolGods
              <ArrowRight size={20} />
            </a>
            <Link
              to="/whitepaper"
              className="px-8 py-4 rounded-lg text-lg font-medium border border-border bg-secondary/50 hover:bg-secondary transition-colors inline-flex items-center justify-center"
            >
              Read Whitepaper
            </Link>
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
            <FeatureCard
              icon={<Coins className="text-primary" size={32} />}
              title="$GODS Token"
              description="Stake, vote, and earn with the native governance token powering the SolGods ecosystem."
              delay="0.1s"
            />
            <FeatureCard
              icon={<Users className="text-primary" size={32} />}
              title="DAO Governance"
              description="Community-first decision making. Every holder has a voice in shaping our destiny."
              delay="0.2s"
            />
            <FeatureCard
              icon={<Zap className="text-primary" size={32} />}
              title="Solana Speed"
              description="Built on Solana for lightning-fast transactions and minimal fees."
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glow rounded-2xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Ascend?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of holders building the future of Web3 culture together.
            </p>
            <Link
              to="/dao"
              className="glow-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Join the DAO
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
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
  return (
    <div 
      className="card-glow rounded-xl p-8 hover:scale-105 transition-transform duration-300"
      style={{ animation: `fade-in-up 0.6s ease-out ${delay} forwards`, opacity: 0 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default Index;

import { Layout } from "@/components/Layout";
import { Vote, Shield, Coins, Users, ExternalLink } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const subDaos = [
  {
    name: "Wings DAO",
    description: "A sanctuary for those who choose kindness, courage, and positivity to make the world brighter.",
    twitter: "https://x.com/WingsDaoSG",
    discord: "https://discord.com/invite/gtrFTsmEAE",
  },
  {
    name: "Mafia DAO",
    description: "Strategic raiders and traders working together in the SolGods ecosystem.",
    twitter: "https://x.com/MAFIAxDAO",
    discord: "https://discord.com/invite/gtrFTsmEAE",
  },
];

const Dao = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #a1e25b, #32db9a, #098fcc, #32db9a, #a1e25b)",
              backgroundSize: "200% 100%",
            }}
          >
            SOLGODS DAO
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Decentralized governance by the community, for the community.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <DaoFeature
              icon={<Vote size={28} />}
              title="Proposal Voting"
              description="Submit and vote on proposals that shape the direction of SolGods. Every token holder has voting power."
            />
            <DaoFeature
              icon={<Coins size={28} />}
              title="Treasury Management"
              description="Community-controlled treasury funds initiatives, partnerships, and ecosystem development."
            />
            <DaoFeature
              icon={<Shield size={28} />}
              title="On-Chain Governance"
              description="All votes are recorded on Solana, ensuring transparency and immutability."
            />
            <DaoFeature
              icon={<Users size={28} />}
              title="Working Groups"
              description="Join specialized teams focused on art, partnerships, development, and community."
            />
          </div>

          {/* Sub DAOs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Sub DAOs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {subDaos.map((dao) => (
                <div key={dao.name} className="card-glow rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{dao.name}</h3>
                  <p className="text-muted-foreground mb-4">{dao.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={dao.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors inline-flex items-center gap-1.5"
                    >
                      Twitter/X <ExternalLink size={12} />
                    </a>
                    <a
                      href={dao.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors inline-flex items-center gap-1.5"
                    >
                      Discord <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glow rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              <Step number="1" title="Hold" description="Own a SolGod NFT or $SOLGODS tokens" />
              <Step number="2" title="Discuss" description="Join Discord to debate proposals" />
              <Step number="3" title="Vote" description="Cast your vote on-chain" />
              <Step number="4" title="Execute" description="Approved proposals are implemented" />
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
              Join Main Discord
              <ExternalLink size={20} />
            </ShinyButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function DaoFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card-glow rounded-xl p-8">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="text-3xl font-bold text-primary mb-2">{number}</div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Dao;

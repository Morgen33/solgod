import { Layout } from "@/components/Layout";
import { FileText, Download, ExternalLink } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const sections = [
  { id: "intro", title: "1. Introduction", content: "SolGods represents a new paradigm in NFT communities—one where art, governance, and utility converge to create lasting value for holders. Built on Solana, we leverage the chain's speed and efficiency to deliver a seamless experience." },
  { id: "vision", title: "2. Vision & Mission", content: "Our vision is to build the most impactful and engaged Web3 community. We believe that true ownership extends beyond digital art—it encompasses governance rights, revenue sharing, and collective decision-making." },
  { id: "collection", title: "3. The Collection", content: "10,000 unique SolGods, each with distinct attributes and rarity tiers. Divine, Mythic, Legendary, Epic, and Rare classifications determine holder benefits and voting weight within the DAO." },
  { id: "token", title: "4. $GODS Tokenomics", content: "Total supply of 1 billion $GODS tokens distributed across community rewards (40%), treasury (25%), team (20%), and ecosystem development (15%). Vesting schedules ensure long-term alignment." },
  { id: "dao", title: "5. DAO Governance", content: "On-chain governance powered by Realms. One NFT = one vote for collection proposals. Token-weighted voting for treasury decisions. Working groups operate with delegated authority for operational efficiency." },
  { id: "roadmap", title: "6. Roadmap", content: "Phase 1: Collection launch and community building. Phase 2: $GODS token launch and staking. Phase 3: DAO activation and treasury deployment. Phase 4: Ecosystem expansion and partnerships." },
];

const Whitepaper = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-bold text-primary mb-4">
              WHITEPAPER
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The complete guide to the SolGods ecosystem
            </p>
            <ShinyButton as="a" href="#">
              <Download size={18} />
              Download PDF
            </ShinyButton>
          </div>

          {/* Table of Contents */}
          <div className="card-clean p-6 mb-12">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="text-primary" size={20} />
              Contents
            </h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="card-clean p-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </article>
            ))}
          </div>

          {/* Footer Links */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Have questions about the whitepaper?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/nfts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Join Discord
                <ExternalLink size={14} />
              </a>
              <a
                href="https://twitter.com/SolGods"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Follow Twitter
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Whitepaper;

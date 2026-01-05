import { Layout } from "@/components/Layout";
import { Handshake, Target, Rocket } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const partners = [
  { name: "Magic Eden", category: "Marketplace" },
  { name: "Phantom", category: "Wallet" },
  { name: "Metaplex", category: "Protocol" },
  { name: "Tensor", category: "Trading" },
  { name: "Jupiter", category: "DEX" },
  { name: "Marinade", category: "Staking" },
];

const Partnerships = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            PARTNERSHIPS
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Building with the best in Web3 to expand the SolGods universe.
          </p>

          {/* Partner Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partners.map((partner) => (
              <div key={partner.name} className="card-glow rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-1">{partner.name}</h3>
                <p className="text-sm text-primary">{partner.category}</p>
              </div>
            ))}
          </div>

          {/* Partnership Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-glow rounded-xl p-8 text-center">
              <Handshake className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Collaborations</h3>
              <p className="text-muted-foreground text-sm">
                Joint NFT drops, cross-community events, and shared experiences.
              </p>
            </div>
            <div className="card-glow rounded-xl p-8 text-center">
              <Target className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Integrations</h3>
              <p className="text-muted-foreground text-sm">
                Deep protocol integrations for enhanced holder utility.
              </p>
            </div>
            <div className="card-glow rounded-xl p-8 text-center">
              <Rocket className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Incubation</h3>
              <p className="text-muted-foreground text-sm">
                Supporting promising projects through treasury investments.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Interested in collaborating with SolGods? We are always looking for aligned projects and brands.
            </p>
            <ShinyButton as="a" href="mailto:partnerships@solgods.io">
              Get in Touch
            </ShinyButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;

import { Layout } from "@/components/Layout";
import { Users, Sparkles, Heart } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const Partnerships = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            PARTNERING WITH US
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Interested in collaborating with SolGods? We are constantly seeking to connect with mission-aligned projects and brands that push the boundaries of innovation and community building.
          </p>

          {/* Strategic Collaborations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Strategic Collaborations</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We believe in the power of collective growth. Our team is dedicated to fostering meaningful partnerships that go beyond simple networking to create real value for our ecosystems.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <GlowCard glowColor="purple" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Users className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cross-Community Events</h3>
                  <p className="text-muted-foreground text-sm">
                    Engaging our audiences through high-energy, shared activations.
                  </p>
                </div>
              </GlowCard>
              <GlowCard glowColor="purple" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Sparkles className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Shared Experiences</h3>
                  <p className="text-muted-foreground text-sm">
                    Developing unique digital or physical touchpoints that resonate with our holders.
                  </p>
                </div>
              </GlowCard>
              <GlowCard glowColor="purple" customSize className="w-full h-auto text-center">
                <div className="flex flex-col items-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Heart className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mutual Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Building a long-term framework for resource sharing and cross-promotion.
                  </p>
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              At SolGods, we don't just build projects; we build movements. If your vision aligns with ours, we'd love to explore how we can elevate the space together.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Open a ticket in our{" "}
              <a 
                href="https://discord.gg/nfts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Discord
              </a>
              {" "}or DM on{" "}
              <a 
                href="https://x.com/solgodsnfts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                X
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;

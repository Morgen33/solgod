import { Layout } from "@/components/Layout";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, Users, Eye, MessageCircle, Sparkles, Shield, Zap, Crown } from "lucide-react";

const Join = () => {
  return (
    <Layout>
      {/* Starter SolGods Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
              style={{
                backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
                backgroundSize: "200% 100%",
              }}
            >
              Starter SolGods
            </h1>
            <p className="text-xl text-muted-foreground">New here? This is where it starts.</p>
          </div>

          <GlowCard glowColor="purple" customSize className="w-full h-auto p-8 sm:p-10 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Not everyone walks in holding a Genesis SolGod — and that's the point.
              Starter SolGods are your entry into the culture. A way to step into the community, get familiar with how we move, and see if this world fits you.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-foreground">What Starter SolGods are for</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Join the Discord and get involved without pressure</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Rep the SolGods look while you learn the ecosystem</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Connect with the community before committing to a Genesis God</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-foreground">How it works</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <p className="text-muted-foreground">Pick a Starter SolGod that fits your vibe</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <p className="text-muted-foreground">Set it as your X profile picture</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <p className="text-muted-foreground">Jump into Discord and start engaging</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 italic">
              Starter SolGods are intentionally uniform — same energy, same visual language — so the timeline stays clean and recognizable while you're finding your place.
            </p>

            <div className="border-l-4 border-primary/50 pl-6 py-2 mb-8">
              <p className="text-foreground font-medium">This isn't about flexing.</p>
              <p className="text-foreground font-medium">It's about alignment.</p>
            </div>

            <p className="text-lg text-foreground mb-2">
              <span className="text-primary font-bold">Starter today.</span>
            </p>
            <p className="text-lg text-foreground mb-6">
              <span className="text-muted-foreground">Genesis when you're ready.</span>
            </p>

            <p className="text-muted-foreground mb-8">Wear it right. Move with purpose.</p>

            <div className="flex justify-center">
              <ShinyButton as="a" href="https://discord.gg/nfts" target="_blank" rel="noopener noreferrer">
                Get Your Starter SolGod
                <ArrowRight size={20} />
              </ShinyButton>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Genesis SolGods Section */}
      <section className="py-24 px-4 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
              style={{
                backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
                backgroundSize: "200% 100%",
              }}
            >
              Ready for a Genesis SolGod?
            </h2>
            <p className="text-xl text-muted-foreground">When you're ready to move past the starter phase, this is the next step.</p>
          </div>

          <GlowCard glowColor="purple" customSize className="w-full h-auto p-8 sm:p-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Owning a Genesis SolGod NFT is how you officially step into the full SolGods experience. Genesis holders aren't just in the Discord — they're part of the core. This is where access deepens, opportunities open up, and your presence actually carries weight.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-foreground">Why upgrade to a Genesis SolGod</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Full access to SolGods Discord channels</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Eligibility for drops, collabs, and future utilities</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">Priority access to community-driven initiatives</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Crown className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">A permanent on-chain identity tied to the SolGods ecosystem</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-foreground">How to join</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <p className="text-muted-foreground">Purchase a Genesis SolGod NFT on Magic Eden</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <p className="text-muted-foreground">Set your Genesis SolGod as your X profile picture</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <p className="text-muted-foreground">Verify in Discord and unlock full access</p>
              </div>
            </div>

            <div className="border-l-4 border-primary/50 pl-6 py-2 mb-8">
              <p className="text-muted-foreground mb-2">This isn't for everyone — and it's not meant to be.</p>
              <p className="text-foreground font-medium">Genesis SolGods are for those who've felt the culture and decided to stand in it.</p>
            </div>

            <p className="text-lg text-foreground mb-2">
              <span className="text-muted-foreground">Starter gets you in the door.</span>
            </p>
            <p className="text-lg text-foreground mb-6">
              <span className="text-primary font-bold">Genesis makes you family.</span>
            </p>

            <p className="text-muted-foreground mb-8 italic">When you're ready, you'll know.</p>

            <div className="flex justify-center">
              <ShinyButton as="a" href="https://magiceden.us/marketplace/solgods" target="_blank" rel="noopener noreferrer">
                Buy on Magic Eden
                <ArrowRight size={20} />
              </ShinyButton>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default Join;

import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Twitter, Shield, Globe, Cog
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import VaporizeTextCycle from "@/components/ui/vaporize-text-cycle";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useIsMobile } from "@/hooks/use-mobile";
import solgodsIcon from "@/assets/solgods-icon.png";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";

const Index = () => {
  const isMobile = useIsMobile();
  const [showVaporize, setShowVaporize] = useState(false);

  useEffect(() => {
    // On desktop, show immediately. On mobile, delay to let page render first.
    if (!isMobile) {
      setShowVaporize(true);
    } else {
      const timer = setTimeout(() => setShowVaporize(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src={solgodsMainLogo} 
            alt="SolGods" 
            className="h-32 sm:h-40 w-auto mx-auto mb-8"
          />
          
          {/* Vaporize Text Hero - Desktop */}
          <div className="mb-6 h-24 sm:h-28 md:h-32 hidden sm:block">
            {showVaporize ? (
              <VaporizeTextCycle
                texts={["Probably Nothing", "Probably Something", "Probably Everything"]}
                font={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "64px",
                  fontWeight: 700,
                }}
                color="rgb(1, 178, 255)"
                spread={5}
                density={5}
                animation={{
                  vaporizeDuration: 1.2,
                  fadeInDuration: 0.6,
                  waitDuration: 1,
                }}
                alignment="center"
              />
            ) : (
              <div 
                className="text-5xl font-bold animate-fade-in"
                style={{ fontFamily: 'Cinzel, serif', color: 'rgb(1, 178, 255)' }}
              >
                Probably Nothing
              </div>
            )}
          </div>
          
          {/* Vaporize Text Hero - Mobile */}
          <div className="mb-6 h-16 sm:hidden">
            {showVaporize ? (
              <VaporizeTextCycle
                texts={["Probably Nothing", "Probably Something", "Probably Everything"]}
                font={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
                color="rgb(1, 178, 255)"
                spread={3}
                density={4}
                animation={{
                  vaporizeDuration: 1.2,
                  fadeInDuration: 0.6,
                  waitDuration: 1,
                }}
                alignment="center"
              />
            ) : (
              <div 
                className="text-3xl font-bold animate-fade-in"
                style={{ fontFamily: 'Cinzel, serif', color: 'rgb(1, 178, 255)' }}
              >
                Probably Nothing
              </div>
            )}
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join the family of traders, creators, and raiders rewriting what it means to be part of Web3.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center">
            <ShinyButton
              onClick={() => {
                window.open("https://x.com/solgodsnfts", "_blank", "noopener,noreferrer");
              }}
            >
              <Twitter size={20} />
              Follow Us
            </ShinyButton>
          </div>
        </div>
      </section>

      {/* Why SolGods Section */}
      <section className="pt-12 pb-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, #1d4ed8 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Cinzel', serif", color: "#e8e4dc" }}
            >
              Why SolGods
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SolGods is a Value-First Ecosystem where digital identity meets a high-performance growth engine. We've moved beyond static art to create a system that prioritizes community outcomes and long-term sustainability.
            </p>
          </div>

          {/* Pillar 1: The Sol Core Treasury */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="p-3 rounded-full"
                style={{ 
                  backgroundColor: "rgba(1, 178, 255, 0.15)",
                  border: "1px solid rgba(1, 178, 255, 0.3)"
                }}
              >
                <Cog style={{ color: "#01b2ff" }} size={28} />
              </div>
              <h3 
                className="text-xl sm:text-2xl font-bold"
                style={{ 
                  color: "#01b2ff",
                  fontFamily: "'Cinzel', serif"
                }}
              >
                1. The Sol Core Treasury
              </h3>
            </div>
            <p className="text-muted-foreground mb-8">
              Your SolGod is more than a profile picture; it is your entry point to a sophisticated, active treasury. We put the project's resources to work to ensure the ecosystem remains self-sustaining and constantly evolving.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
                >
                  Active Ecosystem Management
                </h4>
                <p className="text-sm text-muted-foreground">We utilize internal strategies to grow our holdings and generate consistent, tangible value for the project.</p>
              </GlowCard>
              <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
                >
                  Engagement-Led Rewards
                </h4>
                <p className="text-sm text-muted-foreground">We believe in rewarding those who build the culture. Through our Discord Chat-to-Earn systems and Raid-to-Reward bounties, active members are directly incentivized for their contributions.</p>
              </GlowCard>
              <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
                >
                  Exclusive Holder Perks
                </h4>
                <p className="text-sm text-muted-foreground">Membership has its privileges. Holders gain access to exclusive giveaways, high-signal alpha calls, and specialized perks that are reserved strictly for those within the SolGods holders.</p>
              </GlowCard>
              <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
                >
                  Sustainable Scaling
                </h4>
                <p className="text-sm text-muted-foreground">By reinvesting a portion of our ecosystem gains, we constantly increase the treasury's strength. This ensures that as the world of Solara grows, so does the power and reach of its holders.</p>
              </GlowCard>
            </div>
          </div>

          {/* Pillar 2: Foundation of Integrity */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="p-3 rounded-full"
                style={{ 
                  backgroundColor: "rgba(1, 178, 255, 0.15)",
                  border: "1px solid rgba(1, 178, 255, 0.3)"
                }}
              >
                <Shield style={{ color: "#01b2ff" }} size={28} />
              </div>
              <h3 
                className="text-xl sm:text-2xl font-bold"
                style={{ 
                  color: "#01b2ff",
                  fontFamily: "'Cinzel', serif"
                }}
              >
                2. A Foundation of Integrity
              </h3>
            </div>
            <p className="text-muted-foreground mb-8">
              We built our reputation on a simple principle: Deliver value before asking for a single cent.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
                >
                  Results First
                </h4>
                <p className="text-sm text-muted-foreground">Our community thrived long before the mint. We established ourselves by sharing growth frameworks and strategies that helped our members level up their own digital presence and trading discipline.</p>
              </GlowCard>
              <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
                >
                  Proven Performance
                </h4>
                <p className="text-sm text-muted-foreground">This "value-first" approach wasn't just a philosophy—it led to a 20x increase from our initial launch price. This established the rock-solid foundation for the treasury that supports the project today.</p>
              </GlowCard>
            </div>
          </div>

          {/* Pillar 3: Living Economy */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="p-3 rounded-full"
                style={{ 
                  backgroundColor: "rgba(1, 178, 255, 0.15)",
                  border: "1px solid rgba(1, 178, 255, 0.3)"
                }}
              >
                <Globe style={{ color: "#01b2ff" }} size={28} />
              </div>
              <h3 
                className="text-xl sm:text-2xl font-bold"
                style={{ 
                  color: "#01b2ff",
                  fontFamily: "'Cinzel', serif"
                }}
              >
                3. A Living, Breathing Economy
              </h3>
            </div>
            <p className="text-muted-foreground mb-8">
              From the ancient origins of Solara to our expansion into new frontiers, the SolGods ecosystem is a thriving, bustling economy.
            </p>
            <GlowCard glowColor="blue" customSize className="w-full h-auto p-6">
              <h4 
                className="font-bold mb-3 tracking-wide"
                style={{ fontVariant: "small-caps", fontSize: "1.1rem" }}
              >
                Collaborative Growth
              </h4>
              <p className="text-sm text-muted-foreground">We don't exist in a vacuum. We actively collaborate across the Solana network, integrating assets and building a cross-ecosystem engine designed to evolve, not stagnate.</p>
            </GlowCard>
          </div>

          {/* The SolGods Difference */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 
                className="text-2xl sm:text-3xl font-bold"
                style={{ 
                  fontFamily: "'Cinzel', serif",
                  color: "#e8e4dc"
                }}
              >
                The SolGods Difference
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 text-center">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ color: "#377af2", fontFamily: "'Cinzel', serif", fontSize: "1.1rem" }}
                >
                  Static Collections
                </h4>
                <p className="text-muted-foreground">Depend entirely on the "next buyer" for value.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 text-center">
                <h4 
                  className="font-bold mb-3 tracking-wide"
                  style={{ color: "#377af2", fontFamily: "'Cinzel', serif", fontSize: "1.1rem" }}
                >
                  SolGods
                </h4>
                <p className="text-muted-foreground">Powered by a managed system designed to generate and distribute value internally, ensuring the sun never sets on the SolGods.</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 px-4 text-center">
        <p className="text-xl sm:text-2xl text-muted-foreground">
          Stand in the light. Build the system. <span style={{ color: "#01b2ff" }}>Ascend as a SolGod.</span>
        </p>
      </section>

      {/* Ascend to Divinity CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 text-center">
            <div className="flex flex-col items-center">
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
              >
                Ascend to Divinity
              </h2>
              <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                Become a SolGod. Don't just watch the system grow—help drive it. Join our Discord to secure your place in the inner circle, where the sharpest minds share the latest alpha and every member plays a part in our collective rise.
              </p>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                From exclusive insights to the heart of the Solara economy, the journey to ascendancy starts here.
              </p>
              <ShinyButton
                onClick={() => {
                  window.open("https://discord.gg/nfts", "_blank", "noopener,noreferrer");
                }}
              >
                Join Discord
              </ShinyButton>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

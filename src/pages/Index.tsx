import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Twitter, TrendingUp, 
  Shield, Globe, Cog, Users, Coins
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import VaporizeTextCycle from "@/components/ui/vaporize-text-cycle";
import { GlowCard } from "@/components/ui/spotlight-card";
import solgodsIcon from "@/assets/solgods-icon.png";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";

const SectionIcon = () => (
  <div className="flex justify-center mb-6">
    <img src={solgodsIcon} alt="SolGods" className="h-24 sm:h-28 w-auto opacity-80" />
  </div>
);


const Index = () => {
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
          </div>
          
          {/* Vaporize Text Hero - Mobile */}
          <div className="mb-6 h-16 sm:hidden">
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
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join the family of traders, creators, and raiders rewriting what it means to be part of Web3.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
              Buy SolGods
              <ArrowRight size={20} />
            </ShinyButton>
            <ShinyButton
              onClick={() => {
                window.open("https://discord.gg/nfts", "_blank", "noopener,noreferrer");
              }}
            >
              Join Discord
            </ShinyButton>
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
      <section className="pt-12 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
            >
              WHY SOLGODS
            </h2>
            <p className="text-xl text-muted-foreground">
              A Value-First Ecosystem
            </p>
          </div>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            SolGods is a Value-First Ecosystem where digital identity meets a high-performance growth engine. 
            We've moved beyond static art to create a system that prioritizes community outcomes and long-term sustainability.
          </p>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ValueCard 
              icon={<TrendingUp size={32} />}
              title="Financial Empowerment"
              description="We launched by delivering structured trading frameworks, memecoin rotations, and X monetization systems before the first NFT ever hit the blockchain."
            />
            <ValueCard 
              icon={<Shield size={32} />}
              title="A Fund for the People"
              description="We bridge the gap between high-level finance and Web3 culture. By holding a SolGod, you aren't just holding art; you are holding a key to an actively managed treasury spanning Forex, Indices, and Crypto."
            />
            <ValueCard 
              icon={<Users size={32} />}
              title="The Power of The Community"
              description="Our community isn't just a Discord server; it's a high-signal intelligence hub. From a 10-person group chat to a 1,900+ member alpha engine, we leverage collective knowledge to turn small stakes into real wins."
            />
            <ValueCard 
              icon={<Coins size={32} />}
              title="Anti-Dilution & Growth"
              description="With 50% of mint capital immediately deployed into revenue-generating strategies, the project is designed to be self-sustaining, fueling constant rewards, raffles, and ecosystem buy-backs."
            />
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="-mt-8 pt-0 pb-12 sm:mt-0 sm:py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, #1d4ed8 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
            >
              THE THREE PILLARS
            </h2>
            <p className="text-xl text-muted-foreground">What Sets Us Apart</p>
          </div>

          {/* Pillar 1: The Sol Core Treasury */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue/20">
                  <Cog className="text-blue-light" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">1. The Sol Core Treasury</h3>
                  <p className="text-muted-foreground">Your entry point to a sophisticated, active treasury</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Your SolGod is more than a profile picture; it is your entry point to a sophisticated, active treasury. 
                We put the project's resources to work to ensure the ecosystem remains self-sustaining and constantly evolving.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-bold text-foreground mb-2">Active Ecosystem Management</h4>
                  <p className="text-sm text-muted-foreground">We utilize internal strategies to grow our holdings and generate consistent, tangible value for the project.</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-bold text-foreground mb-2">Engagement-Led Rewards</h4>
                  <p className="text-sm text-muted-foreground">Through our Discord Chat-to-Earn systems and Raid-to-Reward bounties, active members are directly incentivized.</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-bold text-foreground mb-2">Exclusive Holder Perks</h4>
                  <p className="text-sm text-muted-foreground">Holders gain access to exclusive giveaways, high-signal alpha calls, and specialized perks reserved strictly for SolGods holders.</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-bold text-foreground mb-2">Sustainable Scaling</h4>
                  <p className="text-sm text-muted-foreground">By reinvesting a portion of our ecosystem gains, we constantly increase the treasury's strength.</p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Pillar 2: Foundation of Integrity */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue/20">
                  <Shield className="text-blue-light" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2. A Foundation of Integrity</h3>
                  <p className="text-muted-foreground">Deliver value before asking for a single cent</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                We built our reputation on a simple principle: Deliver value before asking for a single cent.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-bold text-foreground mb-2">Results First</h4>
                  <p className="text-sm text-muted-foreground">Our community thrived long before the mint. We established ourselves by sharing growth frameworks and strategies that helped our members level up.</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-bold text-foreground mb-2">Proven Performance</h4>
                  <p className="text-sm text-muted-foreground">This "value-first" approach led to a 20x increase from our initial launch price, establishing the rock-solid foundation for our treasury.</p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Pillar 3: Living Economy */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue/20">
                  <Globe className="text-blue-light" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">3. A Living, Breathing Economy</h3>
                  <p className="text-muted-foreground">A thriving, bustling ecosystem</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                From the ancient origins of Solara to our expansion into new frontiers, the SolGods ecosystem is a thriving, bustling economy.
              </p>
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold text-foreground mb-2">Collaborative Growth</h4>
                <p className="text-sm text-muted-foreground">We don't exist in a vacuum. We actively collaborate across the Solana network, integrating assets and building a cross-ecosystem engine designed to evolve, not stagnate.</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
            >
              THE SOLGODS DIFFERENCE
            </h2>
            <p className="text-xl text-muted-foreground">Static vs Dynamic</p>
          </div>

          <div className="card-glow rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 text-center">
                <p className="text-sm mb-2 font-semibold tracking-wide" style={{ color: "#377af2", fontFamily: "'Cinzel', serif" }}>Static Collections</p>
                <p className="font-semibold text-sm">Depend entirely on the "next buyer" for value.</p>
              </div>
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 text-center">
                <p className="text-sm mb-2 font-semibold tracking-wide" style={{ color: "#377af2", fontFamily: "'Cinzel', serif" }}>SolGods</p>
                <p className="font-semibold text-sm">Powered by a managed system designed to generate and distribute value internally, ensuring the sun never sets on the SolGods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 text-center">
            <div className="flex flex-col items-center">
              <p className="text-lg italic text-muted-foreground mb-6">
                Stand in the light. Build the system. Ascend as a SolGod.
              </p>
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent"
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShinyButton
                  onClick={() => {
                    window.open("https://discord.gg/nfts", "_blank", "noopener,noreferrer");
                  }}
                >
                  Join Discord
                </ShinyButton>
                <Link to="/about">
                  <ShinyButton>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ShinyButton>
                </Link>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <GlowCard glowColor="blue" customSize className="w-full h-auto">
      <div className="flex flex-col">
        <div className="mb-4" style={{ color: "#01b2ff" }}>{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </GlowCard>
  );
}

export default Index;

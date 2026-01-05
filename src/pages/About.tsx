import { Layout } from "@/components/Layout";
import { 
  Flame, Users, TrendingUp, Shield, Sparkles, Crown, 
  Zap, Globe, ArrowRight, CircleDollarSign, Coins,
  Droplets, Cloud, Mountain, Star, Snowflake, Leaf
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const celestialOrders = [
  { name: "Flareborn", description: "Wielders of solar fire and plasma storms, born of the sun's rage.", icon: Flame, color: "#ff6b35" },
  { name: "Tidecallers", description: "Fluid manipulators of ocean currents and temporal water.", icon: Droplets, color: "#4facfe" },
  { name: "Stormbinders", description: "Commanders of thunder, wind, and charged chaos.", icon: Cloud, color: "#a463dd" },
  { name: "Earthshapers", description: "Unshakable titans with dominion over stone, growth, and life-force.", icon: Mountain, color: "#8b5a2b" },
  { name: "Voidstriders", description: "Rare beings fused with antimatter and void energy.", icon: Star, color: "#1a0033" },
  { name: "Starweavers", description: "Cosmic architects bending constellations and starlight.", icon: Sparkles, color: "#ffd700" },
  { name: "Frostwoken", description: "Spirits of glacial time, forged in absolute stillness.", icon: Snowflake, color: "#87ceeb" },
  { name: "Ashborn", description: "Reborn through fire and ruin, thriving in the aftermath of destruction.", icon: Flame, color: "#dc143c" },
  { name: "Dreamforged", description: "Touched by lucid realms, reality-benders born of thought.", icon: Star, color: "#d0a7f0" },
  { name: "Myceliads", description: "Symbiotic hybrids bound to nature, fungi, and the pulse of planetary life.", icon: Leaf, color: "#32cd32" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            ABOUT SOLGODS
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Value First. Culture Always.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In a landscape often built on empty promises, SolGods was forged in the fires of utility. 
            We believe that a community is only as strong as the value it provides to its members.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ValueCard 
              icon={<TrendingUp size={32} />}
              title="Financial Empowerment"
              description="We launched by delivering structured trading frameworks, memecoin rotations, and X monetization systems before the first NFT ever hit the blockchain."
            />
            <ValueCard 
              icon={<Shield size={32} />}
              title='A "Fund" for the People'
              description="We bridge the gap between high-level finance and Web3 culture. By holding a SolGod, you aren't just holding art; you are holding a key to an actively managed treasury spanning Forex, Indices, and Crypto."
            />
            <ValueCard 
              icon={<Users size={32} />}
              title="The Power of the Community"
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

      {/* The Collection */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              SOLGODS ECOSYSTEM
            </h2>
            <p className="text-xl text-muted-foreground">
              The Fusion of Digital Identity and Financial Instrument
            </p>
          </div>

          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple/20">
                <Crown className="text-purple-light" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">The Collection: 3,333 Divine Beings</h3>
                <p className="text-muted-foreground">The Genesis collection of uniquely crafted SolGods</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold text-foreground mb-2">Artistic Vision</h4>
                <p className="text-sm">Created by Happy & CreatorX, featuring a diverse array of male and female characters, ensuring every holder finds a reflection of themselves within the pantheon.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold text-foreground mb-2">Nostalgia & Innovation</h4>
                <p className="text-sm">140+ traits include "nostalgia items" designed to create emotional resonance, alongside futuristic armor and celestial weapons.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 md:col-span-2">
                <h4 className="font-bold text-foreground mb-2">The "Yield-Bearing JPEG"</h4>
                <p className="text-sm">Every NFT acts as a cultural badge and an interactive financial instrument. As the treasury grows, the value of the identity it represents scales alongside it.</p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-3 gap-6">
            <MissionCard 
              title="Financially"
              description="Through the Capital Allocation Engine and professional alpha."
              icon={<CircleDollarSign size={28} />}
            />
            <MissionCard 
              title="Socially"
              description='By fostering a "ride-or-die" culture within The Gang.'
              icon={<Users size={28} />}
            />
            <MissionCard 
              title="Culturally"
              description='Setting the standard for what a "Utility NFT" should actually look like on Solana.'
              icon={<Sparkles size={28} />}
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, #7a18d1 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              HISTORY
            </h2>
            <p className="text-xl text-muted-foreground">The Foundation of Ascendancy</p>
          </div>

          <div className="card-glow rounded-2xl p-8 sm:p-12">
            <p className="text-lg text-muted-foreground mb-8">
              The seeds of SolGods were planted in April 2025 by our founder, Happy. Unlike traditional launches, 
              the months leading up to the September 6th, 2025 launch were spent in the trenches with the community.
            </p>
            
            <h3 className="text-xl font-bold mb-6 text-foreground">While others were selling "hype," Happy and CreatorX were providing:</h3>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-purple/10 border border-purple/20 text-center">
                <TrendingUp className="text-purple-light mx-auto mb-2" size={28} />
                <h4 className="font-bold mb-1">Free Trading Calls</h4>
                <p className="text-sm text-muted-foreground">Giving members the tools to grow their own bags.</p>
              </div>
              <div className="p-4 rounded-xl bg-purple/10 border border-purple/20 text-center">
                <Zap className="text-purple-light mx-auto mb-2" size={28} />
                <h4 className="font-bold mb-1">Meme Coin Plays</h4>
                <p className="text-sm text-muted-foreground">Navigating the volatility of Solana with precision.</p>
              </div>
              <div className="p-4 rounded-xl bg-purple/10 border border-purple/20 text-center">
                <Globe className="text-purple-light mx-auto mb-2" size={28} />
                <h4 className="font-bold mb-1">X Growth Management</h4>
                <p className="text-sm text-muted-foreground">Teaching members to build and monetize their presence.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-dark/30 to-purple/20 border border-purple/30">
              <p className="text-lg text-center">
                <span className="text-purple-light font-bold">20x return</span> off the initial whitelist price of 0.025 SOL — 
                <span className="text-purple-light font-bold"> minted out in just 15 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lore Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              THE LORE
            </h2>
            <p className="text-xl text-muted-foreground">The Solara Chronicles</p>
          </div>

          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">The First Convergence</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              On the planet Solara, the sun was not a source of life, but a ticking clock. As the final solar convergence approached—a cosmic event that threatened to erase all life—the Sol Core awakened. It did not choose kings or scholars; it chose 3,333 individuals based on their inner spark. These mortals were infused with celestial essence, transforming them into the SolGods.
            </p>
            <p className="text-lg font-bold text-center text-purple-light mb-8">
              They were divided into Ten Celestial Orders, each a pillar of the new world:
            </p>
          </div>

          {/* Celestial Orders Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {celestialOrders.map((order) => {
              const Icon = order.icon;
              return (
                <div 
                  key={order.name}
                  className="group p-4 rounded-xl bg-card/50 border border-border hover:border-purple/50 transition-all hover:scale-105"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${order.color}20` }}
                  >
                    <Icon size={20} style={{ color: order.color }} />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{order.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{order.description}</p>
                </div>
              );
            })}
          </div>

          {/* Portal to Sol City */}
          <div className="card-glow rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">The Portal to Sol City</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              Seeking to expand the reach of the Sol Core, CreatorX used his divine energy to rip a hole through space-time, discovering a planet long forgotten—a world of desolation and ruin. There, he found ten mysterious creature types living in constant, violent chaos. Rather than conquering them, the SolGods united them. They channeled their elemental powers to revive the planet, building a shimmering metropolis: <span className="text-purple-light font-bold">Sol City</span>. This city now serves as the "Workforce of the Gods," a bustling economy that generates the resources and liquidity needed to fund the SolGods' further adventures across the multiverse.
            </p>
          </div>
        </div>
      </section>

      {/* Sol City Engine */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: "linear-gradient(180deg, transparent, #7a18d1 50%, transparent)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              SOL CITY
            </h2>
            <p className="text-xl text-muted-foreground">The Capital Allocation Engine</p>
            <p className="text-lg text-purple-light mt-2">Passive Income, Professionally Managed.</p>
          </div>

          {/* How Engine Works */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <EngineStep 
              number="1"
              title="Your NFT is Your Stake"
              description="When you buy an NFT, your money is pooled and put to work."
            />
            <EngineStep 
              number="2"
              title="Engine Generates Profit"
              description="Pooled funds are actively invested and traded to generate profits."
            />
            <EngineStep 
              number="3"
              title="Quarterly Airdrops"
              description="Profits are regularly distributed back to all NFT holders."
            />
            <EngineStep 
              number="4"
              title="Self-Growing"
              description="A portion is reinvested, increasing capital for larger future rewards."
            />
          </div>

          {/* Benefits */}
          <div className="card-glow rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">The Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-purple/10">
                <Shield className="text-purple-light mx-auto mb-3" size={32} />
                <h4 className="font-bold mb-2">No Active Management</h4>
                <p className="text-sm text-muted-foreground">You hold the NFT; the team handles the rest.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-purple/10">
                <Globe className="text-purple-light mx-auto mb-3" size={32} />
                <h4 className="font-bold mb-2">Diversification</h4>
                <p className="text-sm text-muted-foreground">Gain exposure to assets outside of just the crypto market.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-purple/10">
                <TrendingUp className="text-purple-light mx-auto mb-3" size={32} />
                <h4 className="font-bold mb-2">Compound Interest</h4>
                <p className="text-sm text-muted-foreground">Your stake becomes more powerful the longer you hold.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Horizons */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              FUTURE HORIZONS
            </h2>
            <p className="text-xl text-muted-foreground">Web2 & Web3 Integration — Bridging the Gap</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-glow rounded-xl p-8">
              <Coins className="text-purple-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">The Token & Staking</h3>
              <p className="text-muted-foreground text-sm">
                A dual-incentive system where staking your SolGod earns you the ecosystem's native currency, usable within Sol City.
              </p>
            </div>
            <div className="card-glow rounded-xl p-8">
              <Users className="text-purple-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Cross-Ecosystem Alliances</h3>
              <p className="text-muted-foreground text-sm">
                We actively purchase and integrate assets from other communities into our treasury, creating a "Network Effect" that strengthens the entire Solana ecosystem.
              </p>
            </div>
            <div className="card-glow rounded-xl p-8">
              <Globe className="text-purple-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Web2 Outreach</h3>
              <p className="text-muted-foreground text-sm">
                Creating educational content and "Trad-Fi" bridges that allow non-crypto natives to understand and benefit from the Sol City Engine.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
              Join the Pantheon
              <ArrowRight size={20} />
            </ShinyButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card-glow rounded-xl p-8 hover:scale-[1.02] transition-transform">
      <div className="text-purple-light mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-dark/20 to-purple/10 border border-purple/20 text-center hover:border-purple/40 transition-colors">
      <div className="text-purple-light mb-3 flex justify-center">{icon}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function EngineStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative p-6 rounded-xl bg-card/50 border border-border text-center group hover:border-purple/50 transition-colors">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
        style={{
          background: "linear-gradient(135deg, #7a18d1, #a463dd)",
        }}
      >
        {number}
      </div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default About;

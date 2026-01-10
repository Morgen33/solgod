import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Flame, Users, TrendingUp, Shield, Sparkles, Crown, 
  Zap, Globe, ArrowRight, CircleDollarSign, Coins,
  Droplets, Cloud, Mountain, Star, Snowflake, Leaf
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import solgodsIcon from "@/assets/solgods-icon.png";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";
import tidecallersTone from "@/assets/factions/tidecallers-tone.png";
import stormbindersTone from "@/assets/factions/stormbinders-tone.png";
import earthshapersTone from "@/assets/factions/earthshapers-tone.png";
import nethersoulTone from "@/assets/factions/nethersoul-tone.png";
import starweaversTone from "@/assets/factions/starweavers-tone.png";
import flarebornTone from "@/assets/factions/flareborn-tone.png";
import dreamforgedTone from "@/assets/factions/dreamforged-tone.png";
import mycealiadsTone from "@/assets/factions/myceliads-tone.png";
import voidstridersTone from "@/assets/factions/voidstriders-tone.png";
import frostwokenTone from "@/assets/factions/frostwoken-tone.png";

const SectionIcon = () => (
  <div className="flex justify-center mb-6">
    <img src={solgodsIcon} alt="SolGods" className="h-24 sm:h-28 w-auto opacity-80" />
  </div>
);

const celestialOrders = [
  { name: "Flareborn", description: "Wielders of solar fire and plasma storms, born of the sun's rage.", icon: Flame, color: "#ff6b35", image: flarebornTone },
  { name: "Tidecallers", description: "Fluid manipulators of ocean currents and temporal water.", icon: Droplets, color: "#4facfe", image: tidecallersTone },
  { name: "Stormbinders", description: "Commanders of thunder, wind, and charged chaos.", icon: Cloud, color: "#a463dd", image: stormbindersTone },
  { name: "Earthshapers", description: "Unshakable titans with dominion over stone, growth, and life-force.", icon: Mountain, color: "#8b5a2b", image: earthshapersTone },
  { name: "Nethersoul", description: "Rare beings fused with antimatter and void energy.", icon: Star, color: "#1a0033", image: nethersoulTone },
  { name: "Voidstriders", description: "Travelers of the cosmic void, masters of dark matter and shadow.", icon: Star, color: "#4a0080", image: voidstridersTone },
  { name: "Starweavers", description: "Cosmic architects bending constellations and starlight.", icon: Sparkles, color: "#ffd700", image: starweaversTone },
  { name: "Frostwoken", description: "Spirits of glacial time, forged in absolute stillness.", icon: Snowflake, color: "#87ceeb", image: frostwokenTone },
  { name: "Dreamforged", description: "Touched by lucid realms, reality-benders born of thought.", icon: Star, color: "#d0a7f0", image: dreamforgedTone },
  { name: "Myceliads", description: "Symbiotic hybrids bound to nature, fungi, and the pulse of planetary life.", icon: Leaf, color: "#32cd32", image: mycealiadsTone },
];

const About = () => {
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
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)",
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
            That is why we didn't start with a roadmap of "possibilities"—we started with a track record of results.
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

      {/* The Collection */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "#01b2ff" }}
            >
              SOLGODS ECOSYSTEM
            </h2>
            <p className="text-xl" style={{ color: "#2053db" }}>
              The Fusion of Digital Identity and Financial Instrument
            </p>
          </div>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            SolGods is more than an NFT project—it is a closed-loop liquidity and culture engine. 
            We have designed an ecosystem where finance meets fun, and discipline meets chaos.
          </p>

          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-blue/20">
                <Crown className="text-blue-light" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">The Collection: 3,333 Divine Beings</h3>
                <p className="text-muted-foreground">The Genesis collection of uniquely crafted SolGods</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              The Genesis collection consists of 3,333 uniquely crafted SolGods, representing the elite 3,333 mortals 
              chosen by the Sol Core which includes ten primordial/mythical entities.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold text-foreground mb-2">Artistic Vision</h4>
                <p className="text-sm">Created by Happy & CreatorX, the collection features a diverse array of male and female characters, ensuring every holder finds a reflection of themselves within the pantheon.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold text-foreground mb-2">Nostalgia & Innovation</h4>
                <p className="text-sm">The 140+ traits include "nostalgia items" designed to create emotional resonance, alongside futuristic armor and celestial weapons.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 md:col-span-2">
                <h4 className="font-bold text-foreground mb-2">The "Yield-Bearing JPEG"</h4>
                <p className="text-sm">Every NFT acts as a cultural badge and an interactive financial instrument. As the treasury grows, the value of the identity it represents scales alongside it.</p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission: Leveling Up</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mission is to build a community that outlasts market cycles. We aim to level our members up in three distinct ways:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <MissionCard 
              title="Financially"
              description="Through the Capital Allocation Engine and professional alpha."
              icon={<CircleDollarSign size={28} />}
            />
            <MissionCard 
              title="Socially"
              description='By fostering a "ride-or-die" culture within The Community.'
              icon={<Users size={28} />}
            />
            <MissionCard 
              title="Culturally"
              description="By setting the standard for what a Utility NFT should look like on Solana—becoming the new meta for NFTs."
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
            background: "radial-gradient(ellipse at center, #1d4ed8 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "#01b2ff" }}
            >
              HISTORY
            </h2>
            <p className="text-xl" style={{ color: "#2053db" }}>The Foundation of Ascendancy</p>
          </div>

          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex flex-col">
              <p className="text-lg text-muted-foreground mb-8">
                The seeds of SolGods were planted in April 2025 by our founder, Happy. Unlike traditional launches, 
                the months leading up to the September 6th, 2025 launch were spent in the trenches with the community.
              </p>
              
              <h3 className="text-xl font-bold mb-6 text-foreground">While others were selling "hype," Happy and CreatorX were providing:</h3>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-blue/10 border border-blue/20 text-center">
                  <TrendingUp className="mx-auto mb-2" size={28} style={{ color: "#01b2ff" }} />
                  <h4 className="font-bold mb-1">Free Trading Calls</h4>
                  <p className="text-sm text-muted-foreground">Giving members the tools to grow their own bags.</p>
                </div>
                <div className="p-4 rounded-xl bg-blue/10 border border-blue/20 text-center">
                  <Zap className="mx-auto mb-2" size={28} style={{ color: "#01b2ff" }} />
                  <h4 className="font-bold mb-1">Meme Coin Plays</h4>
                  <p className="text-sm text-muted-foreground">Navigating the volatility of the Solana ecosystem with precision.</p>
                </div>
                <div className="p-4 rounded-xl bg-blue/10 border border-blue/20 text-center">
                  <Globe className="mx-auto mb-2" size={28} style={{ color: "#01b2ff" }} />
                  <h4 className="font-bold mb-1">X Growth Management</h4>
                  <p className="text-sm text-muted-foreground">Teaching members how to build their personal brands and monetize their presence.</p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-dark/30 to-blue/20 border border-blue/30 mb-8">
                <p className="text-lg text-center">
                  This "Value-First" approach led to a legendary launch: a{" "}
                  <span className="text-blue-light font-bold">20x return</span> off the initial whitelist price of 0.025 SOL — 
                  <span className="text-blue-light font-bold"> minted out in just 15 hours</span>
                </p>
              </div>

              <p className="text-muted-foreground text-center mb-8">
                Today, the project continues to operate on a 50/50 split—half of the mint funds were returned directly 
                to community initiatives, while the other half is actively traded to ensure the project remains capitalized 
                and aggressive in the market.
              </p>

              <div className="flex justify-center">
                <Link to="/team">
                  <ShinyButton>
                    Meet the Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ShinyButton>
                </Link>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Lore Section */}
      <section className="pt-12 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "#01b2ff" }}
            >
              THE LORE
            </h2>
            <p className="text-xl" style={{ color: "#2053db" }}>The Solara Chronicles</p>
          </div>

          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 mb-12">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-center">The First Convergence</h3>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                On the planet Solara, the sun was not a source of life, but a ticking clock. As the final solar convergence approached—a cosmic event that threatened to erase all life—the Sol Core awakened. It did not choose kings or scholars; it chose 3,333 individuals based on their inner spark. These mortals were infused with celestial essence, transforming them into the SolGods.
              </p>
              <p className="text-lg font-bold text-center text-blue-light mb-8">
                They were divided into Ten Celestial Orders, each a pillar of the new world:
              </p>
            </div>
          </GlowCard>

          {/* Celestial Orders Grid - Including Myceliads */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {celestialOrders.map((order) => {
              const Icon = order.icon;
              return (
                <div 
                  key={order.name}
                  className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-purple/50 transition-all hover:scale-[1.02] overflow-hidden"
                >
                  {order.image ? (
                    <div className="w-16 h-16 rounded-xl mb-4 overflow-hidden">
                      <img 
                        src={order.image} 
                        alt={order.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${order.color}20` }}
                    >
                      <Icon size={28} style={{ color: order.color }} />
                    </div>
                  )}
                  <h4 className="font-bold text-lg mb-2">{order.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{order.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SolCity Engine */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: "linear-gradient(180deg, transparent, #1d4ed8 50%, transparent)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "#01b2ff" }}
            >
              SOLCITY
            </h2>
            <p className="text-xl" style={{ color: "#2053db" }}>The Capital Allocation Engine</p>
            <p className="text-lg mt-2" style={{ color: "#01b2ff" }}>Passive Income, Professionally Managed.</p>
          </div>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            SolCity is the evolution of the SolGods vision. It is a hybrid investment vehicle that turns 
            NFT holders into participants in a global liquidity engine.
          </p>

          {/* Portal to SolCity */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">The Portal to SolCity</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Seeking to expand the reach of the Sol Core, CreatorX used his divine energy to rip a hole through space-time, 
              discovering a planet long forgotten—a world of desolation and ruin. There, he found ten mysterious creature types 
              living in constant, violent chaos. Rather than conquering them, the SolGods united them. They channeled their 
              elemental powers to revive the planet, building a shimmering metropolis: <span className="text-blue-light font-bold">SolCity</span>. 
              This city now serves as the "Workforce of the Gods," a bustling economy that generates the resources and liquidity 
              needed to fund the SolGods' further adventures across the multiverse.
            </p>
            <div className="flex justify-center">
              <Link to="/solcity">
                <ShinyButton>
                  Enter SolCity
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShinyButton>
              </Link>
            </div>
          </GlowCard>

          {/* How Engine Works */}
          <h3 className="text-2xl font-bold mb-8 text-center">How the Engine Works</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <EngineStep 
              number="1"
              title="Your NFT is Your Stake"
              description="When you buy an NFT, your money is pooled and put to work."
            />
            <EngineStep 
              number="2"
              title="Engine Generates Profit"
              description="Pooled funds are actively invested and traded to generate profits from trading and liquidity pools."
            />
            <EngineStep 
              number="3"
              title="Quarterly Airdrops"
              description="Profits are regularly distributed back to all NFT holders as a quarterly airdrop—your reward."
            />
            <EngineStep 
              number="4"
              title="Self-Growing"
              description="A portion of profits is automatically reinvested, increasing capital for larger future rewards."
            />
          </div>

          {/* Benefits */}
          <div className="card-glow rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">The Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-blue/10">
                <Shield className="mx-auto mb-3" size={32} style={{ color: "#01b2ff" }} />
                <h4 className="font-bold mb-2">No Active Management Required</h4>
                <p className="text-sm text-muted-foreground">You hold the NFT; the team handles the rest.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-blue/10">
                <Globe className="mx-auto mb-3" size={32} style={{ color: "#01b2ff" }} />
                <h4 className="font-bold mb-2">Diversification</h4>
                <p className="text-sm text-muted-foreground">Gain exposure to assets outside of just the crypto market.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-blue/10">
                <TrendingUp className="mx-auto mb-3" size={32} style={{ color: "#01b2ff" }} />
                <h4 className="font-bold mb-2">Compound Interest</h4>
                <p className="text-sm text-muted-foreground">Your stake becomes more powerful the longer you hold and the fund grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Horizons */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionIcon />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "#01b2ff" }}
            >
              FUTURE HORIZONS
            </h2>
            <p className="text-xl" style={{ color: "#2053db" }}>Web2 & Web3 Integration — Bridging the Gap</p>
          </div>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            SolGods is designed to be a "Sticky" ecosystem. We are building for the long term through:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <GlowCard glowColor="blue" customSize className="w-full h-auto">
              <Coins className="mb-4" size={32} style={{ color: "#01b2ff" }} />
              <h3 className="text-xl font-bold mb-3">The Token & Staking</h3>
              <p className="text-muted-foreground text-sm">
                A dual-incentive system where staking your SolGod earns you the ecosystem's native currency, usable within Sol City.
              </p>
            </GlowCard>
            <GlowCard glowColor="blue" customSize className="w-full h-auto">
              <Users className="mb-4" size={32} style={{ color: "#01b2ff" }} />
              <h3 className="text-xl font-bold mb-3">Cross-Ecosystem Alliances</h3>
              <p className="text-muted-foreground text-sm">
                We actively purchase and integrate assets from other communities into our treasury, creating a "Network Effect" that strengthens the entire Solana ecosystem.
              </p>
            </GlowCard>
            <GlowCard glowColor="blue" customSize className="w-full h-auto">
              <Globe className="mb-4" size={32} style={{ color: "#01b2ff" }} />
              <h3 className="text-xl font-bold mb-3">Web2 Outreach</h3>
              <p className="text-muted-foreground text-sm">
                Creating educational content and "Trad-Fi" (Traditional Finance) bridges that allow non-crypto natives to understand and benefit from the SolCity Engine.
              </p>
            </GlowCard>
          </div>
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

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <GlowCard glowColor="blue" customSize className="w-full h-auto text-center">
      <div className="flex flex-col items-center">
        <div className="mb-3" style={{ color: "#01b2ff" }}>{icon}</div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </GlowCard>
  );
}

function EngineStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <GlowCard glowColor="blue" customSize className="w-full h-auto text-center">
      <div className="flex flex-col items-center">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-white"
          style={{
            backgroundColor: "#01b2ff",
          }}
        >
          {number}
        </div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </GlowCard>
  );
}

export default About;

import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Flame, Users, TrendingUp, Sparkles, Crown, 
  ArrowRight, Coins, Zap, Star, Shield
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";
import solgodsIcon from "@/assets/solgods-icon.png";

// Import faction images
import flarebornImg from "@/assets/factions/flareborn.avif";
import tidecallersImg from "@/assets/factions/tidecallers.avif";
import stormbindersImg from "@/assets/factions/stormbinders.avif";
import earthshapersImg from "@/assets/factions/earthshapers.avif";
import nethersoulImg from "@/assets/factions/nethersoul.avif";
import voidstridersImg from "@/assets/factions/voidstriders.avif";
import starweaversImg from "@/assets/factions/starweavers.avif";
import frostwokenImg from "@/assets/factions/frostwoken.avif";
import dreamforgedImg from "@/assets/factions/dreamforged.avif";
import myceliadsImg from "@/assets/factions/myceliads.avif";

const factionShowcase = [
  { name: "Flareborn", image: flarebornImg },
  { name: "Tidecallers", image: tidecallersImg },
  { name: "Stormbinders", image: stormbindersImg },
  { name: "Earthshapers", image: earthshapersImg },
  { name: "Nethersoul", image: nethersoulImg },
  { name: "Voidstriders", image: voidstridersImg },
  { name: "Starweavers", image: starweaversImg },
  { name: "Frostwoken", image: frostwokenImg },
  { name: "Dreamforged", image: dreamforgedImg },
  { name: "Myceliads", image: myceliadsImg },
];

const stats = [
  { label: "Total Supply", value: "3,333" },
  { label: "Celestial Orders", value: "10" },
  { label: "Unique Traits", value: "140+" },
  { label: "Launch Price", value: "0.025 SOL" },
];

const features = [
  {
    icon: <Crown size={28} />,
    title: "Divine Artistry",
    description: "Hand-crafted by Happy & CreatorX, each SolGod is a unique masterpiece with over 140 traits.",
  },
  {
    icon: <Coins size={28} />,
    title: "Yield-Bearing",
    description: "Not just art — your SolGod is a key to the Capital Allocation Engine and quarterly airdrops.",
  },
  {
    icon: <Users size={28} />,
    title: "Community First",
    description: "Join a 1,900+ member alpha engine and high-signal intelligence hub.",
  },
  {
    icon: <Shield size={28} />,
    title: "Managed Treasury",
    description: "50% of mint deployed into revenue-generating strategies across Forex, Indices, and Crypto.",
  },
];

export default function SolGods() {
  return (
    <Layout>
      <Seo 
        title="SolGods - 3,333 Divine Beings on Solana" 
        description="Discover the SolGods collection: 3,333 uniquely crafted divine beings across 10 Celestial Orders. Not just NFTs — yield-bearing digital identities powered by Sol City."
        canonicalPath="/solgods"
      />
      
      {/* Subtle dot grid overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--purple-soft) / 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src={solgodsMainLogo} 
            alt="SolGods" 
            className="h-32 sm:h-40 w-auto mx-auto mb-8 animate-fade-in"
          />
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            THE COLLECTION
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            3,333 Divine Beings. 10 Celestial Orders.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            The fusion of digital identity and financial instrument. Each SolGod is a unique, 
            yield-bearing masterpiece crafted on Solana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
              Buy on Magic Eden
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShinyButton>
            <Link to="/about">
              <ShinyButton>
                Learn More
              </ShinyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <GlowCard key={stat.label} glowColor="purple" customSize className="w-full h-auto text-center p-6">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-purple-light mb-1">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Faction Showcase */}
      <section className="py-24 px-4 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <img src={solgodsIcon} alt="SolGods" className="h-20 w-auto mx-auto mb-6 opacity-80" />
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              THE CELESTIAL ORDERS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ten divine factions, each wielding unique cosmic powers
            </p>
          </div>

          {/* Scrolling Showcase */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-purple/30 scrollbar-track-transparent snap-x snap-mandatory">
              {factionShowcase.map((faction, index) => (
                <div 
                  key={faction.name}
                  className="flex-shrink-0 w-64 snap-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 border border-border group-hover:border-purple/50 transition-all duration-300">
                    <img 
                      src={faction.image} 
                      alt={faction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bold text-lg text-foreground">{faction.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-6 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
            >
              MORE THAN ART
            </h2>
            <p className="text-xl text-muted-foreground">
              A financial instrument disguised as a divine being
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <GlowCard key={feature.title} glowColor="purple" customSize className="w-full h-auto">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-purple/20 h-fit">
                    <div className="text-purple-light">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lore Teaser */}
      <section className="py-24 px-4 relative z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, #7a18d1 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <GlowCard glowColor="purple" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="text-purple-light mb-6" size={48} />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Solara Chronicles</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                On the planet Solara, as the final solar convergence approached, the Sol Core awakened. 
                It chose 3,333 individuals based on their inner spark, transforming them into the SolGods — 
                divided across Ten Celestial Orders.
              </p>
              <Link to="/about">
                <ShinyButton>
                  Discover the Full Lore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShinyButton>
              </Link>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="purple" customSize className="w-full h-auto p-8 sm:p-12 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Pantheon</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Become part of a community that's redefining what NFTs can be. 
                Own a piece of the Capital Allocation Engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
                  Buy SolGods
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShinyButton>
                <ShinyButton as="a" href="https://discord.gg/nfts" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </ShinyButton>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
}

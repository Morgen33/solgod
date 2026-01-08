import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Zap, Palette, Trophy, Sprout, Building, 
  ArrowRight, Search, BarChart3, CheckSquare
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import solgodsMainLogo from "@/assets/solgods-main-logo.png";

const iconContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)"
};

const iconStyle = {
  color: "#ffffff",
  filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))"
};

const subtitleColor = "#01b2ff";

export default function SolGods() {
  return (
    <Layout>
      <Seo 
        title="SolGods - 3,333 Divine Beings on Solana" 
        description="Discover the SolGods collection: 3,333 uniquely crafted divine beings across 10 Celestial Orders. Not just NFTs — yield-bearing digital identities powered by SolCity."
        canonicalPath="/solgods"
      />
      
      {/* Subtle dot grid overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--blue-soft) / 0.4) 1px, transparent 0)`,
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
            className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)",
              backgroundSize: "200% 100%",
            }}
          >
            The SolGods Ecosystem
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Owning a SolGod is more than just holding a piece of history—it is your key to a multi-layered ecosystem of utility, governance, and passive growth. From unique artistic rarities to structured community leadership, here is what is available to every SolGod:
          </p>
          <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
            Buy on Magic Eden
            <ArrowRight className="ml-2 h-4 w-4" />
          </ShinyButton>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Staking & Rewards */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                <Zap style={iconStyle} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: subtitleColor }}>Staking & Rewards</h3>
                <p className="text-muted-foreground">
                  Don't just hold—ascend. You can stake your SolGods to secure your place in the ecosystem. Staking isn't just about commitment; it's the primary way to power up your assets and gain access to exclusive rewards and future distributions from the SolCity economy.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* The Collection: 140+ Traits */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                <Palette style={iconStyle} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: subtitleColor }}>The Collection: 140+ Traits</h3>
                <p className="text-muted-foreground">
                  Every SolGod is a unique masterpiece of generative art. With 141 uniquely crafted traits across both male and female characters—including custom armor, elemental skins, legendary weapons, and nostalgic relics—your SolGod is a distinct digital identity built to reflect forces of creation and destruction.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* The Elite: Ten Legendary 1/1s */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                <Trophy style={iconStyle} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: subtitleColor }}>The Elite: Ten Legendary 1/1s</h3>
                <p className="text-muted-foreground mb-4">
                  Among the 3,333 deities, there exist ten Mythical 1/1s. These are the pinnacle of rarity within the collection, featuring entirely custom designs that represent the highest tier of the Solara mythos:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span style={{ color: subtitleColor }} className="font-bold">•</span>
                    <span><strong className="text-foreground">6 Community 1/1s:</strong> Unique legends owned and celebrated by our most dedicated holders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: subtitleColor }} className="font-bold">•</span>
                    <span><strong className="text-foreground">4 Team 1/1s:</strong> Exclusive avatars representing the architects and founders of the Solara universe.</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlowCard>

          {/* Starter Gods */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                <Sprout style={iconStyle} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: subtitleColor }}>Starter Gods</h3>
                <p className="text-muted-foreground">
                  New to the ascension? Our Starter Gods provide an accessible entry point into the universe, ensuring that everyone has the opportunity to begin their journey, participate in the community, and eventually grow into the full power of the Sol Core.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* Governance: The 5 DAOs Within */}
          <GlowCard glowColor="blue" customSize className="w-full h-auto">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                <Building style={iconStyle} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: subtitleColor }}>Governance: The 5 DAOs Within</h3>
                <p className="text-muted-foreground mb-4">
                  We believe in a decentralized future. The ecosystem is structured into 5 distinct DAOs (Decentralized Autonomous Organizations), allowing for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span style={{ color: subtitleColor }} className="font-bold">•</span>
                    <span><strong className="text-foreground">Specialized Governance:</strong> Different arms of the project are managed by focused community groups.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: subtitleColor }} className="font-bold">•</span>
                    <span><strong className="text-foreground">Active Proposals:</strong> Holders have a direct say in treasury spend, upcoming portals, and ecosystem expansions. (Within the DAOs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: subtitleColor }} className="font-bold">•</span>
                    <span><strong className="text-foreground">Community Sovereignty:</strong> Decisions are made by the gods, for the gods.</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Trait & Rarity Guide Section */}
      <section className="py-24 px-4 relative z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, #1d4ed8 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
            >
              🌩️ SOLGODS Trait & Rarity Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SolGods are defined by their unique aesthetic and mathematical scarcity. Understanding how to navigate these traits on Magic Eden is key to finding undervalued "Gods" or completing your ideal set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* How to Filter by Traits */}
            <GlowCard glowColor="blue" customSize className="w-full h-auto">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                  <Search style={iconStyle} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: subtitleColor }}>How to Filter by Traits (Buying)</h3>
                  <p className="text-muted-foreground mb-4">
                    If you are looking for a specific aesthetic, such as the Sword of Solaris or a Blood Crown, follow these steps:
                  </p>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li><strong className="text-foreground">Open the Collection:</strong> Navigate to the SolGods Magic Eden page.</li>
                    <li><strong className="text-foreground">Expand Filters:</strong> Click the Funnel Icon on the left sidebar (Desktop) to reveal the attribute categories.</li>
                    <li><strong className="text-foreground">Choose Your Layer:</strong> Select a category (e.g., Head, Mouth, Background).</li>
                    <li><strong className="text-foreground">Analyze the Stats:</strong>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>• <em>Count:</em> Shows how many items with that trait are currently for sale.</li>
                        <li>• <em>Floor Price:</em> Shows the cheapest price for that specific attribute.</li>
                      </ul>
                    </li>
                    <li><strong className="text-foreground">Apply:</strong> Click the checkbox next to the trait to refresh the gallery.</li>
                  </ol>
                </div>
              </div>
            </GlowCard>

            {/* Trait Analytics & Market Research */}
            <GlowCard glowColor="blue" customSize className="w-full h-auto">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                  <BarChart3 style={iconStyle} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: subtitleColor }}>Trait Analytics & Market Research</h3>
                  <p className="text-muted-foreground mb-4">
                    To see the collection from a statistical perspective and find the rarest attributes:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span style={{ color: subtitleColor }} className="font-bold">1.</span>
                      <span><strong className="text-foreground">Analytics Tab:</strong> Click the Analytics tab next to "Items" on the collection page.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: subtitleColor }} className="font-bold">2.</span>
                      <span><strong className="text-foreground">Attributes Sub-tab:</strong> View a full table of every trait in the collection.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Summary Checklist */}
          <div className="mt-8">
            <GlowCard glowColor="blue" customSize className="w-full h-auto">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl h-fit" style={iconContainerStyle}>
                  <CheckSquare style={iconStyle} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: subtitleColor }}>Summary Checklist</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span style={{ color: subtitleColor }} className="font-bold">✓</span>
                      <span><strong className="text-foreground">To find a specific look:</strong> Use the Filter Sidebar (Funnel icon).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: subtitleColor }} className="font-bold">✓</span>
                      <span><strong className="text-foreground">To find underpriced rares:</strong> Filter by rare traits and sort by price.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: subtitleColor }} className="font-bold">✓</span>
                      <span><strong className="text-foreground">To study the market:</strong> Use the Analytics Tab to see which traits are holding value.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Understanding Rarity Rankings Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center" style={{ color: "#01b2ff" }}>Understanding Rarity Rankings</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Why NFT Trait Percentages Are Reliable on Magic Eden, But Overall Ranks May Not Be
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-4">Magic Eden shows two types of rarity data.</p>
                
                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-bold text-foreground mb-2">Trait percentages:</h4>
                    <p className="text-muted-foreground mb-2">
                      These are calculated by counting how often each trait appears across the collection. This works even when metadata is inconsistent.
                    </p>
                    <p className="text-primary font-semibold">Trait percentages are accurate and trustworthy.</p>
                  </div>
                  
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-bold text-foreground mb-2">Overall rarity rank:</h4>
                    <p className="text-muted-foreground mb-2">
                      This only works when every NFT has a perfectly matching metadata structure. If some NFTs were minted differently, renamed traits, or have broken metadata, Magic Eden cannot rank the full collection.
                    </p>
                    <p className="text-muted-foreground">
                      In those cases, it ranks only a partial subset of NFTs. That makes the rank misleading.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#2053db" }}>What this means</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Trait percentages are correct.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">⚠</span>
                    <span>Overall rarity rank is often unreliable.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  An NFT may look mid-ranked even though it is actually very rare.
                </p>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#2053db" }}>How to judge rarity when the rank is broken</h3>
                <p className="text-muted-foreground mb-3">Ignore the rank number. Focus on:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  <li>Lowest trait percentages</li>
                  <li>NFTs with multiple rare traits</li>
                  <li>Visual uniqueness of the artwork</li>
                </ul>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#2053db" }}>Bottom line</h3>
                <p className="text-foreground font-semibold">Traits are real.</p>
                <p className="text-foreground font-semibold">Ranks can be sandboxed.</p>
                <p className="text-muted-foreground mt-2">Judge rarity by percentages and the art, not the rank.</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#01b2ff" }}>Ready to Ascend?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join the pantheon of SolGods and unlock the full power of the ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ShinyButton as="a" href="https://magiceden.io/marketplace/solgods_" target="_blank" rel="noopener noreferrer">
                  Buy SolGods
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShinyButton>
                <Link to="/dao">
                  <ShinyButton>
                    Explore the DAOs
                  </ShinyButton>
                </Link>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
}

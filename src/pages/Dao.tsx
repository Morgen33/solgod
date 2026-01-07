import { Layout } from "@/components/Layout";
import { Users, ExternalLink, Crown, Sparkles, Heart, Wand2, Shield } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import solgodsIcon from "@/assets/solgods-icon.png";
import wingsDaoLogo from "@/assets/wings-dao-logo.png";
import mafiaDaoLogo from "@/assets/mafia-dao-logo.png";
import pantheonCircleLogo from "@/assets/pantheon-circle-logo.png";
import doGoodDaoLogo from "@/assets/do-good-dao-logo.png";
import wizardCabalLogo from "@/assets/wizard-cabal-logo.png";

const SectionIcon = () => (
  <div className="flex justify-center mb-6">
    <img src={solgodsIcon} alt="SolGods" className="h-24 sm:h-28 w-auto opacity-80" />
  </div>
);

const Dao = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionIcon />
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)",
              backgroundSize: "200% 100%",
            }}
          >
            SOLGODS DAO
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Strategic coordination and ecosystem development for SolGods.
          </p>
        </div>
      </section>

      {/* What is an NFT DAO */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionIcon />
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
          >
            What is an NFT DAO?
          </h2>
          
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12 mb-8">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Think of an NFT DAO as a digital city-state where the "citizens" (you, the holders) are the bosses. 
              Instead of a traditional company with a CEO making all the calls, a DAO uses blockchain technology 
              to give power back to the community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-blue/10">
                <Users className="text-blue-light mx-auto mb-3" size={32} />
                <h4 className="font-bold mb-2">Decentralized</h4>
                <p className="text-sm text-muted-foreground">We grow together.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-blue/10">
                <Shield className="text-blue-light mx-auto mb-3" size={32} />
                <h4 className="font-bold mb-2">Autonomous</h4>
                <p className="text-sm text-muted-foreground">Rules are set in code, ensuring fairness for every God.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-blue/10">
                <Crown className="text-blue-light mx-auto mb-3" size={32} />
                <h4 className="font-bold mb-2">Organization</h4>
                <p className="text-sm text-muted-foreground">Your Sol Gods NFT acts as your "Governance Token"—it's your voting chip, your membership card.</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* The Divine Circles */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionIcon />
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
          >
            The Divine Circles
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Every God belongs to a lineage. Within our ecosystem, various DAOs represent different factions 
            of the Sol Gods pantheon. This is where you find your kin, propose new initiatives, and vote on the future of the project.
          </p>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-light">Current DAOs Open:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Wizard Cabal", "Wings SG DAO", "Mafia DAO", "Do Good DAO", "Pantheon Circle"].map((dao) => (
                <span key={dao} className="px-4 py-2 rounded-full bg-blue/20 border border-blue/30 text-sm font-medium">
                  {dao}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wizard Cabal */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <img src={wizardCabalLogo} alt="Wizard Cabal" className="h-24 sm:h-32 w-auto" />
              <h3 className="text-3xl font-bold">The Wizard Cabal</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              The Wizard Cabal isn't just a chat — it's a game of power, strategy, and rewards. Each wizard has the chance 
              to unlock unique DAO powers that shape the fate of the Cabal: from early whitelist alpha to banishing members, 
              doubling odds in fate's spin wheel, sweeping floor Sol Gods, amplifying your voice, or even vetoing winners. 
              These powers add suspense, alliances, and drama — just like a magical reality show built on-chain.
            </p>
            
            <div className="bg-secondary/30 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">How to Enter</h4>
              <p className="text-sm text-muted-foreground mb-3">Own a Sol God with one of these traits:</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue/20 border border-blue/30 text-sm font-medium">Wizard Hat</span>
              </div>
              <p className="text-xs text-muted-foreground">Have it either delisted (not for sale) or listed at 5 SOL or higher.</p>
              <p className="text-sm text-muted-foreground mt-3">
                Once you meet this condition, you're recognized as a true Cabal wizard and gain access to the circle — 
                along with the chance to wield these legendary powers.
              </p>
            </div>
            
            <h4 className="font-bold mb-4 text-blue-light">Wizard Cabal Powers</h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <PowerCard title="Oracle of the Whitelist" description="Be the first to receive hidden whitelist alpha, with the choice to share it with the Cabal or guard it for yourself." />
              <PowerCard title="Exile of Five" description="Banish up to 5 members from the chamber for one cycle, stripping them of their vote and challenge rights." />
              <PowerCard title="Wheel of Fate" description="Double your chances in destiny's lottery — your name appears twice on the spin wheel for rewards or missions." />
              <PowerCard title="Floor Sweeper's Boon" description="Summon a floor Sol God into your possession, a blessing from the treasury whispered about in the Cabal." />
              <PowerCard title="Herald of the Cabal" description="For one week, every post you make echoes as prophecy — Cabal members are compelled to amplify your words." />
              <PowerCard title="The Grand Veto" description="Strike lightning on the altar of victory: cancel the chosen winner and decree a new one (other than yourself)." />
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-medium">Wizard Cabal Founder:</span>
              <div className="flex flex-wrap gap-3 mt-3">
                <a 
                  href="https://x.com/Axe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Axe
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Wings DAO */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <img src={wingsDaoLogo} alt="Wings DAO" className="h-24 sm:h-32 w-auto" />
              <h3 className="text-3xl font-bold">Wings DAO</h3>
            </div>
            
            <p className="text-lg text-blue-light font-medium mb-4">Elevate Your Sol God!</p>
            <p className="text-muted-foreground mb-6">
              The Wings DAO is the exclusive strategic hub for holders of Sol Gods NFTs with the rare Wings trait, 
              along with specific accessories. We focus on collective market elevation and building an elite, tight-knit community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold mb-2 text-sm">Market Elevation</h4>
                <p className="text-xs text-muted-foreground">Coordinated actions and deep analysis to increase the scarcity and value of the Wings trait.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold mb-2 text-sm">Exclusive Connection</h4>
                <p className="text-xs text-muted-foreground">Hosting private events and focused discussions for elite holders.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold mb-2 text-sm">Merchandise & Passive Income</h4>
                <p className="text-xs text-muted-foreground">Generating passive income for members, with a portion supporting charitable causes.</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">Eligible Membership Assets</h4>
              <div className="flex flex-wrap gap-2">
                {["Rainbow Parage", "Dark Wings", "Phoenix Wings", "Dragon Wings", "Angel Wings", "Mecha Wings", "Sol Gods Visor", "Sol Gods Sweatshirt"].map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full bg-blue/20 border border-blue/30 text-sm font-medium">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-medium">Wings SG DAO Founders:</span>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <a 
                  href="https://x.com/GlowBallbuster" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Glow (Fluttering)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300">
                  @CoryB
                </span>
                <span className="text-muted-foreground mx-2">|</span>
                <a href="https://x.com/WingsDaoSG" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-full bg-blue/20 border border-blue/30 hover:bg-blue/30 hover:border-blue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 inline-flex items-center gap-2">
                  X: @WingsDaoSG <ExternalLink size={12} />
                </a>
                <a href="https://discord.gg/havennfts" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-full bg-blue/20 border border-blue/30 hover:bg-blue/30 hover:border-blue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 inline-flex items-center gap-2">
                  Discord <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Mafia DAO */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <img src={mafiaDaoLogo} alt="Mafia DAO" className="h-32 sm:h-40 w-auto" />
              <h3 className="text-3xl font-bold">MAFIA DAO</h3>
            </div>
            
            <p className="text-lg text-blue-light font-medium mb-4">Mission Mafia is a family-first DAO</p>
            <p className="text-muted-foreground mb-6">
              Led by four core team members, built on loyalty, trust, and long-term alignment. Our focus is on creating 
              legendary outcomes through monetization, NFTs, content, and mining, while building a lasting legacy for the family.
            </p>
            
            <p className="text-sm text-muted-foreground mb-6 italic">
              This is not a hype-driven collective. It is a working DAO where reputation, contribution, and consistency define your place.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold mb-2 text-sm">Core Focus Areas</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Monetization & sustainable revenue</li>
                  <li>• NFTs & on-chain ownership</li>
                  <li>• Content creation with long-term value</li>
                  <li>• Mining & infrastructure-backed operations</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <h4 className="font-bold mb-2 text-sm">Required Traits</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {["Peaky Hat", "Mafia Hat", "Tuxedo", "Pinstripe Suit"].map((trait) => (
                    <span key={trait} className="px-3 py-1 rounded-full bg-blue/20 border border-blue/30 text-xs font-medium">
                      {trait}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-medium">Fee: 0.05 SOL/month</p>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-medium">Core Team:</span>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <a 
                  href="https://x.com/medraresteaker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Gnomie
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://x.com/DaveRmetax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Daver
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://x.com/borkermetax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Borker
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://x.com/AiArsenals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Morgen
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted-foreground mx-2">|</span>
                <a href="https://x.com/MAFIAxDAO" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-full bg-blue/20 border border-blue/30 hover:bg-blue/30 hover:border-blue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 inline-flex items-center gap-2">
                  X: @MAFIAxDAO <ExternalLink size={12} />
                </a>
                <a href="https://discord.gg/SN5gcncU7P" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-full bg-blue/20 border border-blue/30 hover:bg-blue/30 hover:border-blue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 inline-flex items-center gap-2">
                  Discord <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Do Good DAO */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <img src={doGoodDaoLogo} alt="Do Good DAO" className="h-24 sm:h-32 w-auto" />
              <h3 className="text-3xl font-bold">DO GOOD DAO (DGD)</h3>
            </div>
            
            <div className="bg-blue/10 border border-blue/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3 text-blue-light">We Accept Every Trait</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our main traits are:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pixel Puppy", "Strawhat"].map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full bg-blue/20 border border-blue/30 text-sm font-medium">
                    {trait}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                But we accept every trait, because doing good is for everyone.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-6 mb-6">
              <p className="text-muted-foreground mb-4">
                DGD is not your typical "charity" project. It's a community-powered movement using Web3 culture to create real-world impact.
              </p>
              <p className="text-muted-foreground mb-4">
                We're not asking for donations. We're asking for opportunities to help.
              </p>
              <p className="text-muted-foreground">
                DGD exists to be a bridge: connecting those who need help with those who want to help through actions 
                that spread positivity and represent Sol Gods the right way.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground italic mb-6">
              This has a real impact, backed by digital identity, proving that Web3 communities can drive change offline, not just trade JPEGs.
            </p>
            
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-medium">The DAO is led by:</span>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <a 
                  href="https://x.com/eddieisfine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @eddie
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://x.com/kmacmetax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @KMAC
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://x.com/auskyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Auskyn
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted-foreground mx-2">|</span>
                <a href="https://x.com/DGDdao" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-full bg-blue/20 border border-blue/30 hover:bg-blue/30 hover:border-blue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 inline-flex items-center gap-2">
                  X: @DGDdao <ExternalLink size={12} />
                </a>
              </div>
            </div>
            
            <p className="text-blue-light font-medium">Ready to be part of something meaningful? Open a ticket and let's get you onboarded.</p>
          </GlowCard>
        </div>
      </section>

      {/* Pantheon Circle */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <img src={pantheonCircleLogo} alt="Pantheon Circle" className="h-24 sm:h-32 w-auto" />
              <h3 className="text-3xl font-bold">The Pantheon Circle</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              The SOL GODs ecosystem is evolving, and the time has come to forge an elite circle dedicated to the highest 
              echelons of our community. We are thrilled to announce the founding of the Pantheon Circle DAO, an exclusive 
              organization where only the most powerful and storied SOL GODs will gather!
            </p>
            
            <div className="bg-blue/10 border border-blue/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3 text-blue-light">A New Era of Elite Governance</h4>
              <p className="text-sm text-muted-foreground">
                The Pantheon Circle is founded by the esteemed <span className="font-medium">@Rasi</span>, who will guide this DAO's vision. 
                Joining him to drive its operations and strategy is <span className="font-medium">@Swish</span>. Together, they will cultivate 
                a DAO focused on influence, growth, and the maximal potential of the SOL GODs project.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">Exclusive Membership: The Elite Traits</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Membership in the Pantheon Circle is an honor reserved for the true royalty among SOL GODs. 
                To be accepted, your GOD must possess at least ONE of the following legendary traits:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Blood Crown", "Medusa Hair", "God Suit", "Cat Suit"].map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full bg-blue/20 border border-blue/30 text-sm font-medium">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground italic mb-6">
              If your SOL God possesses these elite traits, prepare to take your rightful place among the Pantheon!
            </p>
            
            <div className="mb-6">
              <span className="text-sm text-muted-foreground font-medium">The Pantheon Circle is led by:</span>
              <div className="flex flex-wrap gap-3 mt-3">
                <a 
                  href="https://x.com/RasiMetaX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Rasi
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://x.com/Swishmeta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                >
                  @Swish
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            
            <p className="text-blue-light font-medium">
              Join us as we ascend to the next level of community governance and prestige!
            </p>
            <p className="text-xs text-muted-foreground mt-2 italic">Elitist DAO, no starter gods</p>
          </GlowCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer">
            Join Main Discord
            <ExternalLink size={20} />
          </ShinyButton>
        </div>
      </section>
    </Layout>
  );
};

function PowerCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 rounded-xl bg-secondary/30 border border-blue/10">
      <h5 className="font-bold text-sm mb-1 text-blue-light">{title}</h5>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

export default Dao;

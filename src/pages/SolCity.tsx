import { Layout } from "@/components/Layout";
import { ArrowRight, Coins, Users, Zap, Twitter, Send, Layers, Gift, FileText, TrendingUp, Wallet, PieChart, RefreshCw, AlertTriangle, ExternalLink } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MorphingText } from "@/components/ui/morphing-text";
import solcityLogo from "@/assets/solcity-logo.png";
const quickLinks = [{
  label: "Twitter/X",
  href: "https://x.com/SOLGodNFTs",
  icon: Twitter,
  description: "Follow for updates & alpha"
}, {
  label: "Telegram",
  href: "https://t.me/+TonrvVIf1t4zOGE0",
  icon: Send,
  description: "Join the community chat"
}, {
  label: "Stake",
  href: "https://sgstake.fluxinc.io/",
  icon: Layers,
  description: "Earn rewards by staking"
}, {
  label: "Mystery Pack",
  href: "https://sgtailor.fluxinc.io/packs",
  icon: Gift,
  description: "Open exclusive packs"
}];
const tableOfContents = [{
  id: "strategy",
  title: "1. Whitepaper - The Strategy"
}, {
  id: "mechanics",
  title: "2. Technical Whitepaper - The Mechanics"
}, {
  id: "allocations",
  title: "3. Allocations - The Funding"
}, {
  id: "graphs",
  title: "4. Graphs - The Data"
}, {
  id: "simplified",
  title: "5. Simplified Whitepaper - The Summaries"
}, {
  id: "disclaimer",
  title: "6. Disclaimer - The Risks"
}];
const SolCity = () => {
  return <Layout className="bg-solcity" showStars>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8" style={{
          animation: "fade-in 0.8s ease-out forwards"
        }}>
            <img src={solcityLogo} alt="SolCity" className="w-64 sm:w-80 md:w-96 mx-auto" />
            <div className="flex items-center justify-center gap-2 mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #a1e25b, #32db9a, #098fcc)"
                }}
              >
                Probably
              </span>
              <MorphingText words={["Nothing", "Something", "Everything"]} interval={2500} />
            </div>
          </div>
          
        </div>
      </section>

      {/* About SolCity Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent animate-gradient-flow" style={{
            backgroundImage: "linear-gradient(90deg, #a1e25b, #32db9a, #098fcc, #32db9a, #a1e25b)",
            backgroundSize: "200% 100%"
          }}>
            About SolCity
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">The Evolution of the Ecosystem</p>
          
          <div className="card-glow rounded-xl p-8 mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Following the success of our genesis collection, SolGods, we are proud to introduce SolCity—a high-end expansion that moves beyond traditional digital collectibles. While SolGods laid the foundation of our community, SolCity is engineered to push the boundaries of NFT utility on the Solana blockchain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SolCity is a masterfully crafted collection of 5,555 pixel art NFTs. This is not just a PFP; it is a sophisticated asset participation model where your art works for you.
            </p>
            
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#2053db" }}>The Collection at a Glance</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong className="text-foreground">Total Supply:</strong> 5,555 unique NFTs.</li>
              <li><strong className="text-foreground">Artistic Depth:</strong> Over 150 unique traits across 10 distinct creature types, including several ultra-rare 1/1 masterpieces.</li>
              <li><strong className="text-foreground">Proven Pedigree:</strong> The second major release from the team behind the SolGods Genesis collection.</li>
            </ul>
          </div>

          {/* Why Choose SolCity */}
          <div className="card-glow rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#2053db" }}>Why Choose SolCity?</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In a market often driven by speculation, SolCity stands apart by prioritizing systematic performance over floor price hype. When you hold a SolCity NFT, you aren't just holding art; you are holding a stake in an active economic engine.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/10" style={{ boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
                    <Wallet className="text-white" size={24} style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }} />
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: "#2053db" }}>1. Your NFT Works for You</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  The majority of mint proceeds (80%) are funneled directly into the Capital Allocation Engine. This engine utilizes diversified trading strategies and liquidity pools to generate consistent outputs.
                </p>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/10" style={{ boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
                    <Gift className="text-white" size={24} style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }} />
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: "#2053db" }}>2. Quarterly Airdrops</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  We believe in rewarding our citizens. Holders receive periodic on-chain distributions (quarterly airdrops) derived directly from the system's performance.
                </p>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/10" style={{ boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
                    <RefreshCw className="text-white" size={24} style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }} />
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: "#2053db" }}>3. A Compounding Ecosystem</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  SolCity is designed for the long term. A portion of all generated profits (20%) is systematically reinvested back into the engine, growing the capital base and aiming to increase future rewards for every holder.
                </p>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/10" style={{ boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
                    <AlertTriangle className="text-white" size={24} style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }} />
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: "#2053db" }}>4. Risk-Managed Stability</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Unlike many projects that rely on NFT market sentiment, our engine is guided by professional risk management frameworks, focusing on diverse assets like indices and commodities alongside on-chain liquidity strategies.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-center">
              Ready to dive deeper into the mechanics? Read the full <a href="#strategy" className="text-primary hover:underline">Whitepaper below</a> to see the data, the graphs, and the technical strategy powering the city.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent animate-gradient-flow" style={{
            backgroundImage: "linear-gradient(90deg, #a1e25b, #32db9a, #098fcc, #32db9a, #a1e25b)",
            backgroundSize: "200% 100%"
          }}>
              CAPITAL ALLOCATION ENGINE
            </h2>
            <p className="text-xl text-muted-foreground">
              Whitepaper
            </p>
          </div>

          {/* Table of Contents */}
          <div className="card-glow rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="text-primary" size={20} />
              Table of Contents
            </h3>
            <nav className="grid sm:grid-cols-2 gap-2">
              {tableOfContents.map(section => <a key={section.id} href={`#${section.id}`} className="block text-muted-foreground hover:text-primary transition-colors">
                  {section.title}
                </a>)}
            </nav>
          </div>

          {/* Section 1: The Strategy */}
          <article id="strategy" className="card-glow rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="text-primary" />
              1. The Strategy
            </h3>
            
            <h4 className="text-xl font-semibold mb-4">Overview</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SolCity's economic engine is designed to operate as a hybrid between a digitally-native capital allocation framework and an NFT-powered performance participation model. The collection is structured to generate sustained ecosystem outputs through diversified trading strategies, liquidity provisioning mechanisms, compounding cycles, and controlled treasury expansion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Holders receive periodic on-chain distributions derived from system performance, while a portion of generated outputs is systematically redeployed to support sustainability, long-term scalability, and future growth cycles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This NFT-based model is not designed to rely on secondary market floor prices, trading volume, or speculative resale activity as its primary source of system performance. A significant portion of the capital allocation engine is intended to be deployed through fiat-based trading brokerage accounts, focusing on indices and commodities using defined risk management frameworks.
            </p>

            <h4 className="text-xl font-semibold mb-4">Supply & Mint Structure</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left">
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 text-muted-foreground">Total Supply</td><td className="py-2 font-semibold">5,555 NFTs</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Airdropped Supply</td><td className="py-2 font-semibold">555 NFTs</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Public Sale Supply</td><td className="py-2 font-semibold">5,000 NFTs</td></tr>
                </tbody>
              </table>
            </div>

            <h5 className="text-lg font-semibold mb-3">Mint Pricing</h5>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-2 text-muted-foreground font-medium">Tier</th>
                    <th className="py-2 text-muted-foreground font-medium">Quantity</th>
                    <th className="py-2 text-muted-foreground font-medium">Price</th>
                    <th className="py-2 text-muted-foreground font-medium">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2">SolGods Holders</td><td className="py-2">700</td><td className="py-2">0.5 SOL</td><td className="py-2 font-semibold">350 SOL</td></tr>
                  <tr><td className="py-2">Pre Sale Phase 1</td><td className="py-2">300</td><td className="py-2">0.55 SOL</td><td className="py-2 font-semibold">165 SOL</td></tr>
                  <tr><td className="py-2">Whitelists</td><td className="py-2">1,200</td><td className="py-2">0.65 SOL</td><td className="py-2 font-semibold">780 SOL</td></tr>
                  <tr><td className="py-2">Pre Sale Phase 2</td><td className="py-2">500</td><td className="py-2">0.65 SOL</td><td className="py-2 font-semibold">325 SOL</td></tr>
                  <tr><td className="py-2">Public</td><td className="py-2">2,300</td><td className="py-2">0.775 SOL</td><td className="py-2 font-semibold">1,782.5 SOL</td></tr>
                  <tr className="bg-primary/10"><td className="py-3 font-bold" colSpan={3}>Total Mint Revenue</td><td className="py-3 font-bold text-primary">3,402.5 SOL</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">Mint Revenue Allocation</h4>
            <p className="text-muted-foreground mb-4">Mint funds are split to create immediate operational capacity and sustained long-term compounding.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-2 text-muted-foreground font-medium">Allocation</th>
                    <th className="py-2 text-muted-foreground font-medium">%</th>
                    <th className="py-2 text-muted-foreground font-medium">SOL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2">Capital Allocation Engine</td><td className="py-2">80%</td><td className="py-2 font-semibold">2,722 SOL</td></tr>
                  <tr><td className="py-2">SolGod Support</td><td className="py-2">5%</td><td className="py-2 font-semibold">170.125 SOL</td></tr>
                  <tr><td className="py-2">Treasury</td><td className="py-2">5%</td><td className="py-2 font-semibold">170.125 SOL</td></tr>
                  <tr><td className="py-2">Team Expansion</td><td className="py-2">10%</td><td className="py-2 font-semibold">340.25 SOL</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 2: The Mechanics */}
          <article id="mechanics" className="card-glow rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <PieChart className="text-primary" />
              2. Technical Whitepaper - The Mechanics
            </h3>

            <h4 className="text-xl font-semibold mb-4">Capital Allocation Engine Breakdown (2,722 SOL)</h4>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-2 text-muted-foreground font-medium">Component</th>
                    <th className="py-2 text-muted-foreground font-medium">% of Engine</th>
                    <th className="py-2 text-muted-foreground font-medium">Funds</th>
                    <th className="py-2 text-muted-foreground font-medium">Target Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2">Trading Engine</td><td className="py-2">70%</td><td className="py-2">1,905.4 SOL</td><td className="py-2 text-primary">up to 7.5%/month</td></tr>
                  <tr><td className="py-2">Liquidity Pools</td><td className="py-2">20%</td><td className="py-2">544.4 SOL</td><td className="py-2 text-primary">up to 5%/month</td></tr>
                  <tr><td className="py-2">Internal Treasury</td><td className="py-2">10%</td><td className="py-2">272.2 SOL</td><td className="py-2">Operations</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">Monthly Profit Output (Illustrative)</h4>
            <div className="bg-secondary/30 rounded-lg p-4 mb-6">
              <p className="text-muted-foreground mb-2">Trading Engine: 1,905.4 × up to 7.5% = <span className="text-primary font-semibold">142.905 SOL/month</span></p>
              <p className="text-muted-foreground mb-2">Liquidity Pools: 544.4 × up to 5% = <span className="text-primary font-semibold">27.22 SOL/month</span></p>
              <p className="text-foreground font-semibold mt-4">Total Monthly Profit: 170.125 SOL</p>
              <p className="text-foreground font-semibold">Quarterly Profit (×3 months): 510.375 SOL</p>
            </div>

            <h4 className="text-xl font-semibold mb-4">Profit Distribution Model</h4>
            <p className="text-muted-foreground mb-4">Quarterly profits are distributed as follows:</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-2 text-muted-foreground font-medium">Use</th>
                    <th className="py-2 text-muted-foreground font-medium">%</th>
                    <th className="py-2 text-muted-foreground font-medium">SOL (Quarterly)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2">Holders – Airdrop Pool</td><td className="py-2">65%</td><td className="py-2 font-semibold text-primary">331.74375 SOL</td></tr>
                  <tr><td className="py-2">Reinvest Back Into Trading/Liquidity</td><td className="py-2">20%</td><td className="py-2 font-semibold">102.075 SOL</td></tr>
                  <tr><td className="py-2">Internal Treasury</td><td className="py-2">5%</td><td className="py-2 font-semibold">25.51875 SOL</td></tr>
                  <tr><td className="py-2">Experiments/R&D</td><td className="py-2">10%</td><td className="py-2 font-semibold">51.0375 SOL</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">Per-NFT Airdrop Calculation</h4>
            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <p className="text-muted-foreground mb-2">Quarterly airdrop pool: 331.74375 SOL</p>
              <p className="text-muted-foreground mb-2">Total NFTs receiving rewards: 5,555</p>
              <p className="text-foreground font-semibold mt-4">Airdrop Per NFT: 331.74375 ÷ 5,555 = 0.059712 SOL per NFT per quarter</p>
            </div>

            <h5 className="text-lg font-semibold mb-3">Holder Reward Examples</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-2 text-muted-foreground font-medium">Holding</th>
                    <th className="py-2 text-muted-foreground font-medium">Quarterly Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2">1 NFT</td><td className="py-2 font-semibold">0.059712 SOL</td></tr>
                  <tr><td className="py-2">10 NFTs</td><td className="py-2 font-semibold">0.59712 SOL</td></tr>
                  <tr><td className="py-2">25 NFTs</td><td className="py-2 font-semibold">1.4930 SOL</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 3: Allocations */}
          <article id="allocations" className="card-glow rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wallet className="text-primary" />
              3. Allocations - The Funding
            </h3>

            <h4 className="text-xl font-semibold mb-4">Treasury Structure</h4>
            <p className="text-muted-foreground mb-4">The treasury is diversified into two components:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Mint Treasury: 170.125 SOL</li>
              <li>Internal Treasury - Operations: 272.2 SOL</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Quarterly profits of 25.51875 SOL will go to the Internal Treasury, plus an Experiments/R&D pool of 51.0375 SOL per quarter to test new models, products, or mechanisms for SolCity. Each treasury segment serves a distinct purpose and is not interchangeable.
            </p>

            <h4 className="text-xl font-semibold mb-4">Summary Sheet</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-2 text-muted-foreground font-medium">Metric</th>
                    <th className="py-2 text-muted-foreground font-medium">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2">Total Mint Revenue</td><td className="py-2 font-semibold">3,402.5 SOL</td></tr>
                  <tr><td className="py-2">Capital Allocation Engine Funds</td><td className="py-2 font-semibold">2,722 SOL</td></tr>
                  <tr><td className="py-2">Quarterly Profits</td><td className="py-2 font-semibold">510.375 SOL</td></tr>
                  <tr><td className="py-2">Quarterly Airdrop Pool</td><td className="py-2 font-semibold">331.74375 SOL</td></tr>
                  <tr><td className="py-2">Per NFT Quarterly Airdrop</td><td className="py-2 font-semibold text-primary">0.059712 SOL</td></tr>
                  <tr><td className="py-2">10 NFTs Quarterly</td><td className="py-2 font-semibold">0.59712 SOL</td></tr>
                  <tr><td className="py-2">25 NFTs Quarterly</td><td className="py-2 font-semibold">1.4930 SOL</td></tr>
                  <tr><td className="py-2">Quarterly Reinvest</td><td className="py-2 font-semibold">102.075 SOL</td></tr>
                  <tr><td className="py-2">Quarterly Internal Treasury</td><td className="py-2 font-semibold">25.51875 SOL</td></tr>
                  <tr><td className="py-2">Quarterly Experiments Pool</td><td className="py-2 font-semibold">51.0375 SOL</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 4: Graphs */}
          <article id="graphs" className="card-glow rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <RefreshCw className="text-primary" />
              4. Graphs - The Data
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h5 className="font-semibold mb-4 text-center">Capital Allocation Engine Breakdown</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Trading Engine</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{
                    width: '70%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Liquidity Pools</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/70 h-3 rounded-full" style={{
                    width: '20%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Internal Treasury</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/50 h-3 rounded-full" style={{
                    width: '10%'
                  }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <h5 className="font-semibold mb-4 text-center">Mint Revenue Allocation</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Capital Allocation Engine</span>
                    <span className="font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{
                    width: '80%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team Expansion</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/70 h-3 rounded-full" style={{
                    width: '10%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Treasury</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/50 h-3 rounded-full" style={{
                    width: '5%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">SolGod Support</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/40 h-3 rounded-full" style={{
                    width: '5%'
                  }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <h5 className="font-semibold mb-4 text-center">Profit Distribution Model</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Airdrop Pool</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{
                    width: '65%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Reinvest</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/70 h-3 rounded-full" style={{
                    width: '20%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Experiments/R&D</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/50 h-3 rounded-full" style={{
                    width: '10%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Treasury</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/40 h-3 rounded-full" style={{
                    width: '5%'
                  }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <h5 className="font-semibold mb-4 text-center">Reinvestment Logic</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Trading Engine</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{
                    width: '70%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Liquidity Pools</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/70 h-3 rounded-full" style={{
                    width: '20%'
                  }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Internal Treasury</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary/50 h-3 rounded-full" style={{
                    width: '10%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-4">Reinvestment Logic (Compounding)</h4>
            <p className="text-muted-foreground leading-relaxed">
              The 20% (102.075 SOL) reinvestment is crucial for the long-term compounding of the system. Every quarter, this capital is added back into the Trading and Liquidity Engines, increasing the base capital for profit generation. This directly contributes to a higher Return on Investment (ROI) base for future holder distributions. Reinvested capital follows the same 70% Trading / 20% Liquidity / 10% Internal Treasury allocation.
            </p>
          </article>

          {/* Section 5: Simplified */}
          <article id="simplified" className="card-glow rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6">5. Simplified Whitepaper - The Summaries</h3>

            <div className="space-y-8">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Option 1: SolCity in a Nutshell</h4>
                <p className="text-muted-foreground mb-4">
                  SolCity is a hybrid investment project where holding an NFT gives you automatic participation in a Capital Allocation Engine on the Solana blockchain.
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Your NFT is your stake:</strong> When you buy an NFT, your money is pooled and put to work.</li>
                  <li><strong className="text-foreground">The Engine generates profit:</strong> The pooled funds are actively invested and traded to generate profits.</li>
                  <li><strong className="text-foreground">You get paid quarterly:</strong> The profits are regularly distributed back to all NFT holders as a quarterly airdrop.</li>
                  <li><strong className="text-foreground">It grows itself:</strong> A portion of the profits is automatically reinvested, increasing capital and future rewards.</li>
                </ol>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Option 2: The Perpetual Income Machine</h4>
                <p className="text-muted-foreground mb-4">
                  SolCity NFTs serve as utility tokens, providing holders with a stake in the direction and success of the project's strategic treasury.
                </p>
                
                <h5 className="font-semibold mt-4 mb-2">1. The Fuel (Mint)</h5>
                <p className="text-muted-foreground mb-4">
                  The money raised from selling the NFTs is the initial capital. Most goes straight into the Capital Allocation Engine.
                </p>

                <h5 className="font-semibold mb-2">2. The Engine (Profit Generation)</h5>
                <p className="text-muted-foreground mb-4">
                  The Engine splits capital between Trading (active strategies for higher returns) and Liquidity Pools (steady, stable investments).
                </p>

                <h5 className="font-semibold mb-2">3. The Flow (Distribution Loop)</h5>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong className="text-foreground">Rewards:</strong> Largest share sent directly to NFT Holders as quarterly airdrop.</li>
                  <li><strong className="text-foreground">Growth:</strong> Significant portion fed back into the trading engine (compounding mechanism).</li>
                  <li><strong className="text-foreground">Safety:</strong> Percentage added to Treasury and R&D pool for long-term security.</li>
                </ul>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Option 3: Economic Model Overview</h4>
                <p className="text-muted-foreground mb-4">
                  SolCity is designed to function as a hybrid economic engine that combines the operational principles of a trading fund with an NFT-based asset participation model.
                </p>

                <h5 className="font-semibold mt-4 mb-2">Economic Goals</h5>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Predictable, recurring rewards for holders</li>
                  <li>Long-term sustainability through disciplined reinvestment</li>
                  <li>Robust growth of the project's overall financial strength</li>
                  <li>Transparent, measurable, and compounding system</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 6: Disclaimer */}
          <article id="disclaimer" className="card-glow rounded-xl p-8 mb-8 border-destructive/30 border-2">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-destructive">
              <AlertTriangle />
              6. Important Disclaimer & Risk Disclosure
            </h3>

            <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
              <p>
                The financial projections, figures, mechanisms, and performance illustrations presented in this document are based on assumed market scenarios and internal modeling frameworks. They are provided solely for informational, illustrative, and conceptual purposes and should not be interpreted as fixed outcomes, guarantees, or representations of future performance.
              </p>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Market Risk & Volatility</h5>
                <p>
                  Participation in the SolCity ecosystem is subject to substantial market risk. Digital asset markets, including cryptocurrencies and related financial instruments, are inherently volatile and unpredictable. Prices may fluctuate rapidly due to market conditions, liquidity shifts, regulatory developments, macroeconomic factors, and other variables beyond the control of the SolCity team.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Variable Performance & No Guarantee of Returns</h5>
                <p>
                  Any referenced performance targets, benchmarks, or modeled rates are aspirational and non-guaranteed. Actual performance may differ materially from projections due to market conditions, execution constraints, liquidity availability, risk management outcomes, and external economic events. There is no guarantee of profit, yield, return of capital, or periodic distribution.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-2">No Investment Advice / No Offer of Securities</h5>
                <p>
                  Nothing contained in this document constitutes financial advice, investment advice, trading advice, legal or tax advice, or an offer or solicitation to buy securities or regulated financial products. SolCity NFTs are not securities, investment contracts, equity interests, shares, derivatives, or any form of regulated financial instrument.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Experimental & Non-Custodial Nature</h5>
                <p>
                  SolCity is an experimental, digitally-native economic model. Participation involves untested mechanisms, smart contract dependencies, and evolving market dynamics. SolCity does not act as a licensed asset manager, investment advisor, broker or dealer, or custodian or fiduciary.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Assumption of Risk</h5>
                <p>
                  By participating in the SolCity ecosystem, you acknowledge and accept that digital assets carry inherent financial risk, loss of capital is possible, and outcomes may deviate substantially from projections. You should not commit funds you are not prepared to lose entirely.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Trading & Settlement Disclaimer</h5>
                <p>
                  All trading activities conducted under the Asset Management and Trading Engine will be executed primarily in USD denominated instruments and pairs. Where distributions, rewards, or airdrops are settled on-chain in Solana (SOL), the corresponding USD value will be converted to SOL at the prevailing market exchange rate at the time of distribution. No fixed SOL value is guaranteed.
                </p>
              </div>

              <div className="bg-destructive/10 rounded-lg p-4 mt-6">
                <p className="font-semibold text-foreground">
                  SolCity is designed for informed participants who understand the risks associated with digital assets, experimental economic systems, and evolving market structures. Participation is voluntary and undertaken at the sole discretion and responsibility of each individual.
                </p>
              </div>
            </div>
          </article>

          {/* Footer Links */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Have questions about the whitepaper?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Join Discord
                <ExternalLink size={14} />
              </a>
              <a href="https://twitter.com/SolGods" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Follow Twitter
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="blue" customSize className="w-full h-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: "#2053db" }}>Ready to Ascend?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-center">
              Join the family of X reply guys, traders, creators, and raiders rewriting what it means to be part of Web3.
            </p>
            <div className="flex justify-center">
              <ShinyButton as="a" href="https://discord.com/invite/gtrFTsmEAE" target="_blank" rel="noopener noreferrer" className="text-sm px-6 py-2">
                Join Discord
                <ArrowRight size={16} />
              </ShinyButton>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>;
};
function FeatureItem({
  icon,
  title,
  description,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return <div className="text-center" style={{
    animation: `fade-in-up 0.6s ease-out ${delay} forwards`,
    opacity: 0
  }}>
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>;
}
export default SolCity;
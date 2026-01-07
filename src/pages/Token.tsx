import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { TrendingUp, Lock, Sparkles, Zap, Shield, AlertTriangle, Wallet, ArrowRight, CheckCircle, ExternalLink, BookOpen, Coins, Gift, Droplets, Rocket } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/spotlight-card";

const Token = () => {
  return (
    <Layout>
      <Seo 
        title="$SOLGODS Token | SolGods"
        description="The native utility token powering the SolCity / SolGods ecosystem. Learn how to buy, stake, and participate in the digital economy."
      />
      
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)",
              backgroundSize: "200% 100%",
            }}
          >
            $SOLGODS TOKEN
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            $SOLGODS is the native utility token powering the SolCity / SolGods ecosystem. Engineered for utility and community growth, it serves as the primary engine for participation within our digital economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <ShinyButton as="a" href="https://dexscreener.com/solana/bomtmymoe7efgu2rytqjjg1mjsub6wjpqw13jpivjgkp" target="_blank" rel="noopener noreferrer">
              View on DEX Screener
              <TrendingUp size={20} />
            </ShinyButton>
            <ShinyButton as="a" href="https://sgstake.fluxinc.io/" target="_blank" rel="noopener noreferrer">
              Stake Your Gods
              <Lock size={20} />
            </ShinyButton>
          </div>

          {/* Core Utility Section */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#2053db" }}>Core Utility & Benefits</h2>
            <p className="text-muted-foreground text-center mb-8">$SOLGODS is designed to provide tangible value to active participants:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <UtilityCard icon={<Gift size={24} />} title="Mystery Packs" description="Access exclusive digital assets and rarities." />
              <UtilityCard icon={<Coins size={24} />} title="Staking Rewards" description="Earn passive yield by supporting the network." />
              <UtilityCard icon={<Sparkles size={24} />} title="Ecosystem Incentives" description="Participate in community-driven rewards and challenges." />
              <UtilityCard icon={<Droplets size={24} />} title="Liquidity & Trading" description="Provide liquidity or trade seamlessly on-chain." />
              <UtilityCard icon={<Rocket size={24} />} title="Future-Ready Access" description="Gain early entry to new features as the roadmap evolves." />
            </div>
          </div>

          {/* How to Buy Section */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#2053db" }}>How to Buy $SOLGODS</h2>
            <p className="text-muted-foreground text-center mb-8">Follow these six steps to join the SolCity economy.</p>
            <div className="grid gap-4">
              <StepRow step={1} action="Install Wallet" details="Download and set up the Phantom Wallet browser extension or mobile app." />
              <StepRow step={2} action="Acquire SOL" details="Purchase Solana ($SOL) on a trusted exchange like Coinbase, Kraken, or Gemini." />
              <StepRow step={3} action="Transfer SOL" details="Send your purchased $SOL from the exchange to your Phantom Wallet address." />
              <StepRow step={4} action="Connect to DEX" details="Visit the Official SolCity DEX link (found only on our verified channels)." />
              <StepRow step={5} action="Swap Assets" details="Input the amount of $SOL you wish to exchange and select $SOLGODS." />
              <StepRow step={6} action="Confirm" details="Approve the transaction in your Phantom pop-up. Welcome to SolCity!" />
            </div>
          </div>

          {/* Security Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlowCard glowColor="orange" customSize className="w-full h-auto">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-yellow-500" size={28} />
                  <h3 className="text-2xl font-bold">Security & Verification</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Shield className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Official Channels Only:</strong> Never click links from unsolicited DMs or unofficial social accounts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Verify the Contract:</strong> Scammers often create fake tokens. Always cross-reference the Token Mint Address on Solscan.</span>
                  </li>
                </ul>
              </div>
            </GlowCard>
            <GlowCard glowColor="red" customSize className="w-full h-auto">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-red-500" size={28} />
                  <h3 className="text-2xl font-bold">Financial Disclaimer</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The information provided does not constitute investment, financial, or trading advice. Cryptocurrency investments are volatile and carry significant risk.
                </p>
                <p className="text-muted-foreground">
                  We strongly advise you to <strong>Do Your Own Research (DYOR)</strong> before participating. Never invest more than you are willing to lose.
                </p>
              </div>
            </GlowCard>
          </div>

          {/* Quote */}
          <blockquote className="text-center text-xl italic text-muted-foreground border-l-4 border-primary pl-6 py-4 mb-16 max-w-3xl mx-auto">
            "SOLGODS isn't just a token; it's the heartbeat of a digital civilization. By aligning creators, holders, and builders within a shared economy, we are co-authoring the future of SolGods/SolCity."
          </blockquote>

          {/* Introduction to Crypto Section */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#2053db" }}>Introduction to Crypto and NFTs</h2>
            
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">1.</span> The New Digital Economy
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cryptocurrency and NFTs aren't just trends—they are the foundation of a new financial system built on transparency, ownership, and freedom.
                </p>
                <div className="bg-secondary/30 rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-lg">The Evolution of Value</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>The Origin:</strong> In 2008, following the global financial crisis, Satoshi Nakamoto released the Bitcoin whitepaper. By 2009, Bitcoin proved that value could be transferred globally without the need for a bank.</li>
                    <li><strong>The Record:</strong> Crypto runs on a blockchain—a public digital ledger copied across thousands of computers. Every transaction is permanent, verified, and immutable.</li>
                    <li><strong>Why It's Dependable:</strong> Unlike "Fiat" (government money), which can be printed endlessly, cryptocurrency is governed by mathematics. It is limited in supply and entirely permissionless.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">2.</span> Why We Build on Solana
                </h3>
                <p className="text-muted-foreground mb-6">Speed and cost are the biggest barriers to entry in crypto. Solana solves both.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <Zap className="text-primary mx-auto mb-2" size={24} />
                    <h4 className="font-semibold">Lightning Fast</h4>
                    <p className="text-sm text-muted-foreground">Transactions settle in seconds</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <Coins className="text-primary mx-auto mb-2" size={24} />
                    <h4 className="font-semibold">Fractional Fees</h4>
                    <p className="text-sm text-muted-foreground">Costs less than $0.01</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <Sparkles className="text-primary mx-auto mb-2" size={24} />
                    <h4 className="font-semibold">Eco-Friendly</h4>
                    <p className="text-sm text-muted-foreground">Most energy-efficient blockchain</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">3.</span> Your Gateway: The Solana Wallet
                </h3>
                <p className="text-muted-foreground mb-6">
                  A wallet doesn't "hold" your money; it stores the private keys that allow you to access your assets on the blockchain.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4">Recommended Wallets</th>
                        <th className="py-3 px-4">Security Rule #1</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Phantom (Highly Recommended)</td>
                        <td className="py-3 px-4">Never share your recovery phrase.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Solflare</td>
                        <td className="py-3 px-4">No support agent will ever ask for it.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Backpack</td>
                        <td className="py-3 px-4">If you lose this phrase, you lose your funds.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">4.</span> What Are NFTs? (Beyond the Art)
                </h3>
                <p className="text-muted-foreground mb-6">
                  Non-Fungible Tokens (NFTs) are digital certificates of ownership. While anyone can screenshot a picture, only one person holds the verified record on the blockchain.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Proof of Originality</h4>
                    <p className="text-sm text-muted-foreground">Before NFTs, digital files could be copied infinitely. Now, we can prove who owns the original.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Smart Contracts</h4>
                    <p className="text-sm text-muted-foreground">NFTs can include "royalties," ensuring creators get paid every time their work is resold.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Utility</h4>
                    <p className="text-sm text-muted-foreground">NFTs are in-game items, event tickets, membership passes, and digital identities.</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">5.</span> Get Started: The $50 Launch Plan
                </h3>
                <p className="text-muted-foreground mb-6">Ready to join the ecosystem? Here is a simple roadmap to your first transaction.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h4 className="font-semibold text-lg mb-4">Step 1: Fund Your Journey</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Buy Solana:</strong> Use a trusted exchange like Coinbase, Kraken, or Gemini.</li>
                      <li><strong>Withdraw:</strong> Send your SOL to your Phantom Wallet address.</li>
                      <li><strong>Budget:</strong> We recommend starting with $50:
                        <ul className="ml-4 mt-2 space-y-1">
                          <li>• $30 for your first asset</li>
                          <li>• $10 for network fees (lasts months)</li>
                          <li>• $10 for "learning" and exploring</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h4 className="font-semibold text-lg mb-4">Step 2: Buy Your First NFT</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Visit Magic Eden:</strong> The premier Solana marketplace (magiceden.io).</li>
                      <li><strong>Connect Wallet:</strong> Click "Connect" in the top right corner.</li>
                      <li><strong>Choose Your NFT:</strong> Browse the Solgods or SolCity collections.</li>
                      <li><strong>Confirm:</strong> Approve the transaction. Your NFT will appear in your "Collectibles" tab instantly.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Start CTA */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12 text-center">
            <Rocket className="text-primary mx-auto mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2053db" }}>Ready to Start?</h2>
            <p className="text-muted-foreground mb-6">The best way to learn is by doing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShinyButton as="a" href="https://phantom.app/" target="_blank" rel="noopener noreferrer">
                Install Phantom Wallet <ExternalLink size={16} />
              </ShinyButton>
              <ShinyButton as="a" href="https://x.com/solgods_" target="_blank" rel="noopener noreferrer">
                Follow on X <ExternalLink size={16} />
              </ShinyButton>
            </div>
          </div>

          {/* Crypto Safety Section */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="text-primary" size={32} />
              <h2 className="text-3xl font-bold" style={{ color: "#2053db" }}>Crypto Safety: Rules of the Digital Jungle</h2>
            </div>
            <p className="text-muted-foreground text-center mb-8">
              In the world of Web3, you are your own bank. This comes with total freedom, but also total responsibility. There are no "Forgot Password" buttons or customer support helplines to reverse a mistake.
            </p>

            <div className="space-y-8">
              {/* Golden Rule */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="text-yellow-500" size={24} />
                  The Golden Rule: Your Seed Phrase
                </h3>
                <p className="text-muted-foreground mb-4">Your Seed Phrase (12–24 words) is the master key to your entire wealth.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>If you lose it:</strong> You cannot recover your wallet. Your funds are gone forever.</li>
                  <li><strong>If you share it:</strong> Anyone who has those words has your money. Never type it into a website, save it in your notes app, or take a photo of it.</li>
                  <li><strong>How to store it:</strong> Write it on paper (or engrave it in metal) and keep it in a physical safe or a locked, fireproof location.</li>
                </ul>
              </div>

              {/* Transaction Safety */}
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Transaction Safety: No "Undo" Button</h3>
                <p className="text-muted-foreground mb-4">Blockchain transactions are immutable. Once you hit "Send," the data is written into history.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Verify the Destination:</strong> Always double-check (and triple-check) the first and last five characters of the wallet address.</li>
                  <li><strong>Test Small:</strong> If moving a large amount, send a tiny "test" amount first.</li>
                  <li><strong>Wrong Chain = Lost Funds:</strong> Ensure you're sending Solana assets to a Solana address.</li>
                </ul>
              </div>

              {/* Safe Trading */}
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Safe Trading & Middlemen</h3>
                <p className="text-muted-foreground mb-4">Peer-to-peer (P2P) trading is high risk. Scammers often promise a trade and disappear once they receive your asset.</p>
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2">The "Only Two" Rule:</h4>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                    <li>Only trade through verified marketplaces (like Magic Eden).</li>
                    <li>For direct P2P deals, use the Solgods Discord Tickets for safe facilitation.</li>
                  </ol>
                </div>
                <p className="text-muted-foreground"><strong>Avoid DMs:</strong> If someone "slides into your DMs" with a deal that seems too good to be true, it is a scam.</p>
              </div>

              {/* Pro Tips */}
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Pro-Tips for Maximum Security</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Burner Wallets:</strong> Use a separate "burner" wallet for minting new projects or connecting to unknown sites. Keep your main assets in a "cold" wallet.</li>
                  <li><strong>Revoke Permissions:</strong> Regularly revoke token/site approvals you no longer use.</li>
                  <li><strong>Official Links Only:</strong> Scammers create "spoof" websites. Always use official links from a project's Twitter (X) bio or Discord.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              <AlertTriangle className="text-red-500" size={24} />
              Disclaimer
            </h3>
            <p className="text-muted-foreground">
              The information provided on this page is for educational purposes only and does not constitute financial, legal, or investment advice. Cryptocurrency and NFTs are highly volatile and carry significant risk. We are not responsible for any losses incurred due to scams, lost seed phrases, or incorrect transactions. Always do your own research (DYOR) before committing funds.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function UtilityCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
      <div className="text-primary mb-3 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function StepRow({ step, action, details }: { step: number; action: string; details: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-background flex items-center justify-center font-bold">
        {step}
      </div>
      <div>
        <h4 className="font-semibold">{action}</h4>
        <p className="text-sm text-muted-foreground">{details}</p>
      </div>
    </div>
  );
}

export default Token;

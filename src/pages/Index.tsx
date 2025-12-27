import { Layout } from "@/components/Layout";
import { ArrowRight, Users, BookOpen, Palette, FolderOpen } from "lucide-react";
import solcityLogo from "@/assets/solcity-logo.png";

const features = [
  {
    title: "New to SolGods?",
    subtitle: "Let's get started.",
    href: "https://discord.gg/nfts",
    buttonText: "Join The Community",
    icon: Users,
  },
  {
    title: "Learn the basics…",
    subtitle: "And everything else.",
    href: "/whitepaper",
    buttonText: "Read Whitepaper",
    icon: BookOpen,
  },
  {
    title: "Stake your NFTs",
    subtitle: "Earn rewards.",
    href: "https://sgstake.fluxinc.io/",
    buttonText: "Start Staking",
    icon: Palette,
  },
  {
    title: "Mystery Packs",
    subtitle: "Open exclusive packs.",
    href: "https://sgtailor.fluxinc.io/packs",
    buttonText: "View Packs",
    icon: FolderOpen,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="mb-8"
            style={{ animation: "fade-in 0.8s ease-out forwards" }}
          >
            <img
              src={solcityLogo}
              alt="SolGods"
              className="w-48 sm:w-64 md:w-80 mx-auto mb-8"
            />
          </div>

          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              animation: "fade-in 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            SolGods are 10,000 unique NFTs on Solana. In a world where everything
            feels disposable, we stand as proof that some things are meant to last.
          </p>

          <div
            style={{
              animation: "fade-in 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            <a
              href="https://magiceden.io/marketplace/solgods_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid text-lg"
            >
              Buy a SolGod
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Zigzag Feature Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 card-clean p-8 md:p-12`}
                style={{
                  animation: `fade-in 0.6s ease-out ${0.1 * index}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Icon Side */}
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-secondary rounded-2xl flex items-center justify-center">
                  <Icon className="text-primary" size={64} />
                </div>

                {/* Content Side */}
                <div className={`flex-1 text-center ${isReversed ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                    {feature.subtitle}
                  </p>
                  <a
                    href={feature.href}
                    target={feature.href.startsWith("http") ? "_blank" : undefined}
                    rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="btn-solid inline-flex"
                  >
                    {feature.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">
            Stay Connected.
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://x.com/SOLGodNFTs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/nfts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="https://t.me/+TonrvVIf1t4zOGE0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

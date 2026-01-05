import { Layout } from "@/components/Layout";
import { GlowCard } from "@/components/ui/spotlight-card";
import solgodIcon from "@/assets/solgods-icon.png";

interface TeamRow {
  role: string;
  members: string;
}

const teamData: TeamRow[] = [
  { role: "Founders", members: "CreatorX (Trading Engine/Master Trader), Happy (King of Liquidity Pools)" },
  { role: "Co-Founders", members: "Asta (Token & Coin Master), Truth" },
  { role: "Core Team", members: "Rasi (Lead Admin, Front End, Culture Builder), Glow (Lead Admin, Spaces Lead, HR, Front/Back End, DAO Overseer)" },
  { role: "Lead Security", members: "LionX (Admin)" },
  { role: "Security Team", members: "Henry (Admin), Red (Admin), IRB" },
  { role: "Collaboration Manager", members: "Eddie (Admin)" },
  { role: "Community Connector", members: "TrashPanda, Gnomie" },
  { role: "Community Artist", members: "Viper" },
  { role: "X Management", members: "Mister (Mod), Savage (Mod)" },
  { role: "Moderators", members: "Auskyn, The SUL, Donald, Sonia, Woolfie, KMAC, Daver" },
  { role: "Developers", members: "Morgen, DevKid (Jr Dev)" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src={solgodIcon} 
            alt="SolGods" 
            className="w-20 h-20 mx-auto mb-8 opacity-80"
          />
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            THE TEAM
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The people who build, protect, and grow the SolGods ecosystem.
          </p>
        </div>
      </section>

      {/* Team Table */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <GlowCard glowColor="purple" className="p-6 sm:p-8" customSize={true} width="100%">
            <div className="space-y-0">
              {teamData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 py-5 ${
                    index !== teamData.length - 1 ? 'border-b border-border/30' : ''
                  }`}
                >
                  <div className="font-bold text-primary text-lg">{row.role}</div>
                  <div className="text-foreground text-base sm:text-lg leading-relaxed">{row.members}</div>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
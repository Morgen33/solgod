import { Layout } from "@/components/Layout";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Crown, Shield, Users, Palette, MessageCircle, Code, Megaphone, Heart } from "lucide-react";
import solgodIcon from "@/assets/solgods-icon.png";

interface TeamMember {
  name: string;
  role?: string;
}

interface TeamSection {
  title: string;
  icon: React.ReactNode;
  members: TeamMember[];
  span?: boolean;
}

const teamData: TeamSection[] = [
  {
    title: "Founders",
    icon: <Crown className="w-6 h-6" />,
    members: [
      { name: "CreatorX", role: "Trading Engine/Master Trader (Non Crypto)" },
      { name: "Happy", role: "King of Liquidity Pools" },
    ],
  },
  {
    title: "Co-Founders",
    icon: <Crown className="w-6 h-6" />,
    members: [
      { name: "Asta", role: "Token & Coin Master" },
      { name: "Truth" },
    ],
  },
  {
    title: "Core Team",
    icon: <Users className="w-6 h-6" />,
    members: [
      { name: "Rasi", role: "Lead Admin, Front End, Culture Builder" },
      { name: "Glow", role: "Lead Admin, Spaces Lead, HR, Front/Back End, DAO Overseer" },
    ],
  },
  {
    title: "Lead Security",
    icon: <Shield className="w-6 h-6" />,
    members: [
      { name: "LionX", role: "Admin" },
    ],
  },
  {
    title: "Security Team",
    icon: <Shield className="w-6 h-6" />,
    members: [
      { name: "Henry", role: "Admin" },
      { name: "Red", role: "Admin" },
      { name: "IRB" },
    ],
  },
  {
    title: "Collaboration Manager",
    icon: <Heart className="w-6 h-6" />,
    members: [
      { name: "Eddie", role: "Admin" },
    ],
  },
  {
    title: "Community Connector",
    icon: <Users className="w-6 h-6" />,
    members: [
      { name: "TrashPanda" },
      { name: "Gnomie" },
    ],
  },
  {
    title: "Community Artist",
    icon: <Palette className="w-6 h-6" />,
    members: [
      { name: "Viper" },
    ],
  },
  {
    title: "X Management",
    icon: <Megaphone className="w-6 h-6" />,
    members: [
      { name: "Mister", role: "Mod" },
      { name: "Savage", role: "Mod" },
    ],
  },
  {
    title: "Moderators",
    icon: <MessageCircle className="w-6 h-6" />,
    span: true,
    members: [
      { name: "Auskyn" },
      { name: "The SUL" },
      { name: "Donald" },
      { name: "Sonia" },
      { name: "Woolfie" },
      { name: "KMAC" },
      { name: "Daver" },
    ],
  },
  {
    title: "Developers",
    icon: <Code className="w-6 h-6" />,
    members: [
      { name: "Morgen" },
      { name: "DevKid", role: "Jr Dev" },
    ],
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
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

      {/* Team Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Regular grid for non-spanning sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.filter(section => !section.span).map((section, index) => (
              <GlowCard key={index} glowColor="purple" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.members.map((member, memberIndex) => (
                    <div 
                      key={memberIndex} 
                      className="p-3 rounded-lg bg-background/50 border border-border/30"
                    >
                      <p className="font-semibold text-foreground">{member.name}</p>
                      {member.role && (
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      )}
                    </div>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Full-width sections (Moderators) */}
          {teamData.filter(section => section.span).map((section, index) => (
            <GlowCard key={index} glowColor="purple" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {section.members.map((member, memberIndex) => (
                  <div 
                    key={memberIndex} 
                    className="p-4 rounded-lg bg-background/50 border border-border/30 text-center"
                  >
                    <p className="font-semibold text-foreground">{member.name}</p>
                    {member.role && (
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    )}
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Team;

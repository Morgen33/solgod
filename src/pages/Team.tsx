import { useState } from "react";
import { Layout } from "@/components/Layout";
import solgodsIcon from "@/assets/solgods-icon.png";
import creatorxAvatar from "@/assets/team/creatorx.avif";
import morgenAvatar from "@/assets/team/morgen.jpeg";
import morgenBackAvatar from "@/assets/team/morgen.avif";
import glowAvatar from "@/assets/team/glow.avif";
import redAvatar from "@/assets/team/red.webp";
import kmacAvatar from "@/assets/team/kmac.webp";
import kmacBackAvatar from "@/assets/team/kmac-back.webp";
import lionxAvatar from "@/assets/team/lionx.webp";
import woolfieAvatar from "@/assets/team/woolfie.png";
import woolfieBackAvatar from "@/assets/team/woolfie-back.jpg";
import henryAvatar from "@/assets/team/henry.jpg";
import gnomieAvatar from "@/assets/team/gnomie.png";
import gnomieBackAvatar from "@/assets/team/gnomie-back.jpg";
import misterAvatar from "@/assets/team/mister.webp";
import misterBackAvatar from "@/assets/team/mister-back.jpg";
import auskynAvatar from "@/assets/team/auskyn.webp";
import auskynBackAvatar from "@/assets/team/auskyn-back.jpg";
import irbAvatar from "@/assets/team/irb.png";
import viperAvatar from "@/assets/team/viper.png";
import trashPandaAvatar from "@/assets/team/trash-panda.jpg";
import trashPandaBackAvatar from "@/assets/team/trash-panda-back.jpg";
import glowBackAvatar from "@/assets/team/glow-back.webp";
import donaldAvatar from "@/assets/team/donald.jpeg";
import happyAvatar from "@/assets/team/happy.jpg";
import happyBackAvatar from "@/assets/team/happy-back.png";
import rasiAvatar from "@/assets/team/rasi.webp";
import soniaAvatar from "@/assets/team/sonia.jpg";
import daverAvatar from "@/assets/team/daver.jpg";
import astaBackAvatar from "@/assets/team/asta-back.png";
import astaAvatar from "@/assets/team/asta.jpg";
import savageAvatar from "@/assets/team/savage.jpg";
import eddieAvatar from "@/assets/team/eddie.avif";
import eddieBackAvatar from "@/assets/team/eddie-back.jpg";
import truthAvatar from "@/assets/team/truth.png";
import thesulAvatar from "@/assets/team/thesul.png";
import daverBackAvatar from "@/assets/team/daver-back.png";
import { Seo } from "@/components/Seo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Shield,
  Users,
  HeartHandshake,
  Paintbrush,
  Megaphone,
  MessageCircle,
  Code2,
} from "lucide-react";

type TeamMember = {
  name: string;
  tags?: string[];
  note?: string;
};

type TeamGroup = {
  role: string;
  members: TeamMember[];
};

const TEAM: TeamGroup[] = [
  {
    role: "Founders",
    members: [
      { name: "CreatorX", note: "Project Director" },
      { name: "Happy", note: "Creative Director" },
    ],
  },
  {
    role: "Co-Founders",
    members: [
      { name: "Asta", note: "Coin Advisor / Tokenomics Expert" },
      { name: "Truth", note: "Coin Advisor / Tokenomics Expert" },
    ],
  },
  {
    role: "Core Team",
    members: [
      { name: "Rasi", note: "Lead Admin, Culture Builder, Public Relations Lead (PR)" },
      { name: "Glow", note: "Lead Community Manager, Lead Admin, Spaces Lead, Human Resources (HR)" },
    ],
  },
  {
    role: "Security Team",
    members: [
      { name: "LionX", note: "Lead Security / Admin" },
      { name: "Henry", note: "Security Team / Admin" },
      { name: "Red", note: "Security Team / Admin" },
      { name: "IRB", note: "Security Team" },
    ],
  },
  {
    role: "Collaboration/Development",
    members: [
      { name: "Morgen", note: "Developer" },
      { name: "Eddie", note: "Collaboration Manager / Admin" },
    ],
  },
  {
    role: "Community",
    members: [
      { name: "TrashPanda", note: "Community Connector" },
      { name: "Gnomie", note: "Community Connector" },
      { name: "Viper", note: "Community Artist" },
    ],
  },
  {
    role: "Moderation/Social Media",
    members: [
      { name: "Mister", note: "X Management / Moderator" },
      { name: "Savage", note: "X Management / Moderator" },
      { name: "Auskyn", note: "Moderator" },
      { name: "The SUL", note: "Moderator" },
      { name: "Donald", note: "Moderator" },
      { name: "Sonia", note: "Moderator" },
      { name: "Woolfie", note: "Moderator" },
      { name: "KMAC", note: "Moderator" },
      { name: "DaveR", note: "Moderator" },
    ],
  },
];

const ROLE_ICON: Record<string, JSX.Element> = {
  Founders: <Crown className="h-4 w-4" />,
  "Co-Founders": <Crown className="h-4 w-4" />,
  "Core Team": <Users className="h-4 w-4" />,
  "Security Team": <Shield className="h-4 w-4" />,
  "Collaboration/Development": <Code2 className="h-4 w-4" />,
  Community: <Users className="h-4 w-4" />,
  "Moderation/Social Media": <MessageCircle className="h-4 w-4" />,
};

const MEMBER_AVATARS: Record<string, string> = {
  CreatorX: creatorxAvatar,
  Morgen: morgenAvatar,
  Glow: glowAvatar,
  Red: redAvatar,
  KMAC: kmacAvatar,
  LionX: lionxAvatar,
  Woolfie: woolfieAvatar,
  Henry: henryAvatar,
  Gnomie: gnomieAvatar,
  Mister: misterAvatar,
  Auskyn: auskynAvatar,
  IRB: irbAvatar,
  Viper: viperAvatar,
  TrashPanda: trashPandaAvatar,
  Donald: donaldAvatar,
  Rasi: rasiAvatar,
  Happy: happyBackAvatar,
  Sonia: soniaAvatar,
  DaveR: daverAvatar,
  Asta: astaAvatar,
  Savage: savageAvatar,
  Eddie: eddieAvatar,
  Truth: truthAvatar,
  "The SUL": thesulAvatar,
};

// Back images for flippable cards (add more as needed)
const MEMBER_BACK_AVATARS: Record<string, string> = {
  KMAC: kmacBackAvatar,
  Woolfie: woolfieBackAvatar,
  Gnomie: gnomieBackAvatar,
  TrashPanda: trashPandaBackAvatar,
  Glow: glowBackAvatar,
  Happy: happyAvatar,
  Auskyn: auskynBackAvatar,
  Mister: misterBackAvatar,
  Asta: astaBackAvatar,
  Morgen: morgenBackAvatar,
  Eddie: eddieBackAvatar,
  DaveR: daverBackAvatar,
};

const AVATAR_COLORS = [
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-cyan-500 to-blue-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-indigo-600",
  "from-lime-500 to-green-600",
];

// Specific overrides for visual balance
const MEMBER_COLOR_OVERRIDES: Record<string, string> = {
  Happy: "from-amber-500 to-yellow-600",
  Asta: "from-emerald-500 to-teal-600",
  Truth: "from-cyan-500 to-blue-600",
};

function getAvatarColor(name: string) {
  if (MEMBER_COLOR_OVERRIDES[name]) {
    return MEMBER_COLOR_OVERRIDES[name];
  }
  const index = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function FlippableAvatar({ 
  name, 
  size = "md" 
}: { 
  name: string; 
  size?: "lg" | "md" | "sm";
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasBackImage = MEMBER_BACK_AVATARS[name];
  const hasFrontImage = MEMBER_AVATARS[name];
  
  const sizeClasses = {
    lg: "h-36 w-36 text-4xl",
    md: "h-28 w-28 text-2xl",
    sm: "h-20 w-20 text-xl",
  };

  const containerSizes = {
    lg: "h-36 w-36",
    md: "h-28 w-28",
    sm: "h-20 w-20",
  };

  // Only make it flippable if there's a back image
  const isFlippable = hasBackImage;

  return (
    <div 
      className={`${containerSizes[size]} perspective-1000 ${isFlippable ? 'cursor-pointer' : ''}`}
      onClick={() => isFlippable && setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Avatar className={`${sizeClasses[size]} ring-2 ring-border/40 hover:ring-primary/50 transition-all`}>
            {hasFrontImage ? (
              <AvatarImage src={MEMBER_AVATARS[name]} alt={name} className="object-cover" />
            ) : null}
            <AvatarFallback
              className={`bg-gradient-to-br ${getAvatarColor(name)} text-white font-bold`}
            >
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        
        {/* Back */}
        {hasBackImage && (
          <div 
            className="absolute inset-0"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <Avatar className={`${sizeClasses[size]} ring-2 ring-primary/50 transition-all`}>
              <AvatarImage src={MEMBER_BACK_AVATARS[name]} alt={`${name} alternate`} className="object-cover" />
              <AvatarFallback
                className={`bg-gradient-to-br ${getAvatarColor(name)} text-white font-bold`}
              >
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
}

function MemberCard({ member, size = "md" }: { member: TeamMember; size?: "lg" | "md" | "sm" }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center group">
      <FlippableAvatar name={member.name} size={size} />
      <div>
        <p className="font-semibold text-foreground leading-tight">{member.name}</p>
        {member.tags && (
          <div className="flex gap-1 justify-center mt-1">
            {member.tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0">
                {t}
              </Badge>
            ))}
          </div>
        )}
        {member.note && (
          <p className="text-xs text-muted-foreground mt-1 max-w-[140px]">{member.note}</p>
        )}
      </div>
    </div>
  );
}

function TeamSection({ group, featured = false }: { group: TeamGroup; featured?: boolean }) {
  return (
    <div className={`${featured ? "mb-12" : "mb-10"} w-full`}>
      <div className="flex items-center justify-center gap-3 mb-6">
        <div 
          className="inline-flex items-center justify-center rounded-lg bg-primary/20 p-2 text-[#3b82f6]"
          style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))" }}
        >
          {ROLE_ICON[group.role] ?? <Users className="h-4 w-4" />}
        </div>
        <h3 className={`font-bold uppercase tracking-wide ${featured ? "text-xl text-primary" : "text-lg text-foreground"}`}>
          {group.role}
        </h3>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {group.members.map((m) => (
          <MemberCard key={m.name} member={m} size={featured ? "lg" : "md"} />
        ))}
      </div>
    </div>
  );
}

const Team = () => {
  const founders = TEAM.filter((g) => g.role === "Founders" || g.role === "Co-Founders");
  const coreTeam = TEAM.find((g) => g.role === "Core Team");
  const otherRoles = TEAM.filter(
    (g) => !["Founders", "Co-Founders", "Core Team"].includes(g.role)
  );

  return (
    <Layout>
      <Seo
        title="SolGods Team | Founders, Mods & Builders"
        description="Meet the SolGods team: founders, core team, security, moderators, and builders powering the ecosystem."
        canonicalPath="/team"
      />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src={solgodsIcon}
            alt="SolGods icon"
            className="h-28 sm:h-36 w-auto mx-auto mb-6 opacity-90"
            loading="lazy"
          />
          <h1
            className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)",
              backgroundSize: "200% 100%",
            }}
          >
            THE TEAM
          </h1>
          <p className="text-[#01b2ff] font-medium mb-6 text-sm sm:text-base">
            Before & After: Select any photo to see the 'In Real Life' (IRL) view.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <h2 
              className="text-xl sm:text-2xl font-['Cinzel'] text-[#e8e4dc] mb-4"
            >
              The Architects of Ascendancy
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Before the first portal was opened, there were those who channeled the Sol Core to build the foundation. The SolGods staff is more than a team; we are the stewards of Solara and the engineers of SolCity. From the depths of the trenches to the heights of the celestial orders, our mission is to ensure every member of this Sacred Accord has the tools to ascend. Meet the builders behind the light.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Founders */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#2053db]" />
                <div className="inline-flex items-center gap-2">
                  <Crown className="h-5 w-5 text-[#3b82f6]" />
                  <span 
                    className="text-2xl font-bold uppercase tracking-widest bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #2053db)" }}
                  >
                    Founders
                  </span>
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#2053db]" />
              </div>
              <div className="flex flex-wrap justify-center gap-12">
                {TEAM.find((g) => g.role === "Founders")?.members.map((m) => (
                  <MemberCard key={m.name} member={m} size="lg" />
                ))}
              </div>
            </div>
          </div>

          {/* Co-Founders & Core Team side by side */}
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center items-start gap-x-20 gap-y-12">
              {/* Co-Founders Group */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3b82f6]" />
                  <div className="inline-flex items-center gap-2">
                    <Crown className="h-4 w-4 text-[#93c5fd]" />
                    <span 
                      className="text-xl font-bold uppercase tracking-widest bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)" }}
                    >
                      Co-Founders
                    </span>
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#a463dd]" />
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                  {TEAM.find((g) => g.role === "Co-Founders")?.members.map((m) => (
                    <MemberCard key={m.name} member={m} size="lg" />
                  ))}
                </div>
              </div>

              {/* Core Team Group */}
              {coreTeam && (
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                    <div className="inline-flex items-center gap-2 text-primary">
                      {ROLE_ICON["Core Team"]}
                      <span className="text-xl font-bold uppercase tracking-widest">Core Team</span>
                    </div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                  </div>
                  <div className="flex flex-wrap justify-center gap-12">
                    {coreTeam.members.map((m) => (
                      <MemberCard key={m.name} member={m} size="lg" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-12" />

          {/* Other Roles Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 text-center place-items-center">
            {otherRoles.map((g) => (
              <TeamSection key={g.role} group={g} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Team;

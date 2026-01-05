import { useState } from "react";
import { Layout } from "@/components/Layout";
import solgodsIcon from "@/assets/solgods-icon.png";
import creatorxAvatar from "@/assets/team/creatorx.avif";
import rasiAvatar from "@/assets/team/rasi.jpg";
import morgenAvatar from "@/assets/team/morgen.avif";
import morgenBackAvatar from "@/assets/team/morgen-back.png";
import glowAvatar from "@/assets/team/glow.avif";
import redAvatar from "@/assets/team/red.webp";
import kmacAvatar from "@/assets/team/kmac.webp";
import kmacBackAvatar from "@/assets/team/kmac-back.webp";
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
      { name: "CreatorX", note: "Trading Engine / Master Trader" },
      { name: "Happy", note: "King of Liquidity Pools" },
    ],
  },
  {
    role: "Co-Founders",
    members: [{ name: "Asta", note: "Token & Coin Master" }, { name: "Truth" }],
  },
  {
    role: "Core Team",
    members: [
      { name: "Rasi", note: "Lead Admin, Front End, Culture Builder" },
      { name: "Glow", note: "Lead Admin, Spaces Lead, HR, DAO Overseer" },
    ],
  },
  {
    role: "Security",
    members: [
      { name: "LionX", tags: ["Lead"] },
      { name: "Henry", tags: ["Admin"] },
      { name: "Red", tags: ["Admin"] },
      { name: "IRB" },
    ],
  },
  {
    role: "Collaboration",
    members: [{ name: "Eddie", tags: ["Manager"] }],
  },
  {
    role: "Community",
    members: [
      { name: "TrashPanda" },
      { name: "Gnomie" },
      { name: "Viper", tags: ["Artist"] },
    ],
  },
  {
    role: "X Management",
    members: [{ name: "Mister" }, { name: "Savage" }],
  },
  {
    role: "Moderators",
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
    role: "Developers",
    members: [{ name: "Morgen" }, { name: "DevKid", tags: ["Jr"] }],
  },
];

const ROLE_ICON: Record<string, JSX.Element> = {
  Founders: <Crown className="h-4 w-4" />,
  "Co-Founders": <Crown className="h-4 w-4" />,
  "Core Team": <Users className="h-4 w-4" />,
  Security: <Shield className="h-4 w-4" />,
  Collaboration: <HeartHandshake className="h-4 w-4" />,
  Community: <Users className="h-4 w-4" />,
  "X Management": <Megaphone className="h-4 w-4" />,
  Moderators: <MessageCircle className="h-4 w-4" />,
  Developers: <Code2 className="h-4 w-4" />,
};

const MEMBER_AVATARS: Record<string, string> = {
  CreatorX: creatorxAvatar,
  Rasi: rasiAvatar,
  Morgen: morgenAvatar,
  Glow: glowAvatar,
  Red: redAvatar,
  KMAC: kmacAvatar,
};

// Back images for flippable cards (add more as needed)
const MEMBER_BACK_AVATARS: Record<string, string> = {
  Morgen: morgenBackAvatar,
  KMAC: kmacBackAvatar,
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
    <div className={featured ? "mb-12" : "mb-10"}>
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center rounded-lg bg-primary/20 p-2 text-primary">
          {ROLE_ICON[group.role] ?? <Users className="h-4 w-4" />}
        </div>
        <h3 className={`font-bold uppercase tracking-wide ${featured ? "text-xl text-primary" : "text-lg text-foreground"}`}>
          {group.role}
        </h3>
        <div className="h-px flex-1 bg-border/30" />
      </div>
      <div className={`flex flex-wrap gap-8 ${featured ? "justify-center" : "justify-start pl-2"}`}>
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
                "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            THE TEAM
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The people behind SolGods.
          </p>
        </div>
      </section>

      <main className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Founders & Co-Founders on same line */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center items-start gap-x-20 gap-y-12">
              {/* Founders Group */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a24d]" />
                  <div className="inline-flex items-center gap-2">
                    <Crown className="h-5 w-5 text-[#e6c97a]" />
                    <span 
                      className="text-2xl font-bold uppercase tracking-widest bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, #fff1c1, #e6c97a, #c9a24d)" }}
                    >
                      Founders
                    </span>
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a24d]" />
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                  {TEAM.find((g) => g.role === "Founders")?.members.map((m) => (
                    <MemberCard key={m.name} member={m} size="lg" />
                  ))}
                </div>
              </div>

              {/* Co-Founders Group */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#a463dd]" />
                  <div className="inline-flex items-center gap-2">
                    <Crown className="h-4 w-4 text-[#d0a7f0]" />
                    <span 
                      className="text-xl font-bold uppercase tracking-widest bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1)" }}
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
            </div>
          </div>

          {/* Core Team */}
          {coreTeam && (
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                <div className="inline-flex items-center gap-2 text-primary">
                  {ROLE_ICON["Core Team"]}
                  <span className="text-xl font-bold uppercase tracking-widest">Core Team</span>
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              <div className="flex flex-wrap justify-center gap-16">
                {coreTeam.members.map((m) => (
                  <MemberCard key={m.name} member={m} size="lg" />
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-12" />

          {/* Other Roles Grid */}
          <div className="grid md:grid-cols-2 gap-x-12">
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

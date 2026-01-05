import { Layout } from "@/components/Layout";
import solgodsIcon from "@/assets/solgods-icon.png";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Seo } from "@/components/Seo";
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
  emphasis?: "primary" | "secondary";
  members: TeamMember[];
};

const TEAM: TeamGroup[] = [
  {
    role: "Founders",
    emphasis: "primary",
    members: [
      { name: "CreatorX", note: "Trading Engine / Master Trader (Non Crypto)" },
      { name: "Happy", note: "King of Liquidity Pools" },
    ],
  },
  {
    role: "Co-Founders",
    emphasis: "primary",
    members: [{ name: "Asta", note: "Token & Coin Master" }, { name: "Truth" }],
  },
  {
    role: "Core Team",
    emphasis: "primary",
    members: [
      { name: "Rasi", note: "Lead Admin, Front End, Culture Builder" },
      { name: "Glow", note: "Lead Admin, Spaces Lead, HR, Front/Back End, DAO Overseer" },
    ],
  },
  {
    role: "Lead Security",
    members: [{ name: "LionX", tags: ["Admin"] }],
  },
  {
    role: "Security Team",
    members: [
      { name: "Henry", tags: ["Admin"] },
      { name: "Red", tags: ["Admin"] },
      { name: "IRB" },
    ],
  },
  {
    role: "Collaboration Manager",
    members: [{ name: "Eddie", tags: ["Admin"] }],
  },
  {
    role: "Community Connector",
    members: [{ name: "TrashPanda" }, { name: "Gnomie" }],
  },
  {
    role: "Community Artist",
    members: [{ name: "Viper" }],
  },
  {
    role: "X Management",
    members: [{ name: "Mister", tags: ["Mod"] }, { name: "Savage", tags: ["Mod"] }],
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
    members: [{ name: "Morgen" }, { name: "DevKid", tags: ["Jr Dev"] }],
  },
];

const ROLE_ICON: Record<string, JSX.Element> = {
  Founders: <Crown className="h-5 w-5" />,
  "Co-Founders": <Crown className="h-5 w-5" />,
  "Core Team": <Users className="h-5 w-5" />,
  "Lead Security": <Shield className="h-5 w-5" />,
  "Security Team": <Shield className="h-5 w-5" />,
  "Collaboration Manager": <HeartHandshake className="h-5 w-5" />,
  "Community Connector": <Users className="h-5 w-5" />,
  "Community Artist": <Paintbrush className="h-5 w-5" />,
  "X Management": <Megaphone className="h-5 w-5" />,
  Moderators: <MessageCircle className="h-5 w-5" />,
  Developers: <Code2 className="h-5 w-5" />,
};

const TOP_LEADERSHIP = new Set(["Founders", "Co-Founders", "Core Team"]);
const OTHER_ROLES = new Set([
  "Lead Security",
  "Security Team",
  "Collaboration Manager",
  "Community Connector",
  "Community Artist",
  "X Management",
  "Moderators",
  "Developers",
]);

function LeaderCard({ member, role }: { member: TeamMember; role: string }) {
  const isFounder = role === "Founders" || role === "Co-Founders";
  return (
    <article
      className={`group relative rounded-2xl border p-6 transition-all ${
        isFounder
          ? "border-primary/50 bg-gradient-to-br from-primary/20 via-card/40 to-card/20 hover:border-primary/70"
          : "border-border/40 bg-card/30 hover:border-primary/40"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`inline-flex items-center justify-center rounded-full p-2 ${
            isFounder ? "bg-primary/30 text-primary" : "bg-secondary/40 text-primary"
          }`}
        >
          {ROLE_ICON[role] ?? <Users className="h-5 w-5" />}
        </div>
        <p
          className={`text-xl font-bold tracking-wide ${
            isFounder ? "text-primary" : "text-foreground"
          }`}
        >
          {member.name}
        </p>
      </div>
      {member.note && (
        <p className="text-sm text-muted-foreground leading-snug pl-12">
          {member.note}
        </p>
      )}
    </article>
  );
}

function MemberPill({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-card/20 border border-border/30 hover:border-primary/30 transition-all">
      <p className="font-medium text-foreground text-sm">{member.name}</p>
      {member.tags?.map((t) => (
        <Badge
          key={t}
          variant="secondary"
          className="text-xs border border-border/40 bg-secondary/40"
        >
          {t}
        </Badge>
      ))}
    </div>
  );
}

function RoleRow({ group }: { group: TeamGroup }) {
  return (
    <div className="flex flex-wrap items-start gap-4 py-4 border-b border-border/20 last:border-b-0">
      <div className="flex items-center gap-2 min-w-[180px]">
        <div className="inline-flex items-center justify-center rounded-lg bg-secondary/30 p-1.5 text-primary">
          {ROLE_ICON[group.role] ?? <Users className="h-4 w-4" />}
        </div>
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          {group.role}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 flex-1">
        {group.members.map((m) => (
          <MemberPill key={`${group.role}-${m.name}`} member={m} />
        ))}
      </div>
    </div>
  );
}

const Team = () => {
  const topLeadership = TEAM.filter((g) => TOP_LEADERSHIP.has(g.role));
  const otherRoles = TEAM.filter((g) => OTHER_ROLES.has(g.role));

  return (
    <Layout>
      <Seo
        title="SolGods Team | Founders, Mods & Builders"
        description="Meet the SolGods team: founders, core team, security, moderators, and builders powering the ecosystem."
        canonicalPath="/team"
      />

      <header>
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <img
              src={solgodsIcon}
              alt="SolGods icon"
              className="h-24 sm:h-28 w-auto mx-auto mb-6 opacity-80"
              loading="lazy"
            />
            <h1
              className="text-5xl sm:text-7xl font-bold mb-5 bg-clip-text text-transparent animate-gradient-flow"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
                backgroundSize: "200% 100%",
              }}
            >
              THE TEAM
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              The people who make it happen.
            </p>
          </div>
        </section>
      </header>

      <main>
        <div
          className="fixed inset-0 z-[1] pointer-events-none opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--purple-soft) / 0.5) 1px, transparent 0)`,
            backgroundSize: "64px 64px",
          }}
        />

        <section className="pb-16 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Top Leadership - Featured */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">Leadership</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topLeadership.flatMap((g) =>
                  g.members.map((m) => (
                    <LeaderCard key={`${g.role}-${m.name}`} member={m} role={g.role} />
                  ))
                )}
              </div>
            </div>

            {/* Rest of Team - Compact */}
            <GlowCard glowColor="purple" customSize className="w-full h-auto p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Team Roles</h2>
                <div className="h-px flex-1 bg-border/40" />
              </div>
              {otherRoles.map((g) => (
                <RoleRow key={g.role} group={g} />
              ))}
            </GlowCard>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Team;

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

const LEADERSHIP = new Set([
  "Founders",
  "Co-Founders",
  "Core Team",
  "Lead Security",
  "Security Team",
]);

function MemberPill({ member }: { member: TeamMember }) {
  return (
    <article className="group rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm px-4 py-4 transition-all hover:bg-card/45 hover:border-primary/40">
      <div className="flex items-center gap-2 flex-wrap">
        <p className="font-bold text-foreground leading-none tracking-wide">
          {member.name}
        </p>
        {member.tags?.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="border border-border/40 bg-secondary/40"
          >
            {t}
          </Badge>
        ))}
      </div>
      {member.note && (
        <p className="mt-2 text-sm text-muted-foreground leading-snug">
          {member.note}
        </p>
      )}
    </article>
  );
}

function GroupCard({ group }: { group: TeamGroup }) {
  const membersGridClass =
    group.members.length === 1
      ? "grid grid-cols-1 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 gap-4";

  return (
    <GlowCard glowColor="purple" customSize className="w-full h-auto p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="inline-flex items-center justify-center rounded-xl border border-border/40 bg-secondary/30 p-2 text-primary">
          {ROLE_ICON[group.role] ?? <Users className="h-5 w-5" />}
        </div>
        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-wide ${
            group.emphasis === "primary" ? "text-primary" : "text-foreground"
          }`}
        >
          {group.role.toUpperCase()}
        </h2>
      </div>

      <div className={membersGridClass}>
        {group.members.map((m) => (
          <MemberPill key={`${group.role}-${m.name}`} member={m} />
        ))}
      </div>
    </GlowCard>
  );
}

const Team = () => {
  const leadership = TEAM.filter((g) => LEADERSHIP.has(g.role));
  const community = TEAM.filter((g) => !LEADERSHIP.has(g.role));

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
              Leaders up top. Operators below. Everyone has a lane.
            </p>
          </div>
        </section>
      </header>

      <main>
        {/* Subtle dot grid overlay */}
        <div
          className="fixed inset-0 z-[1] pointer-events-none opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--purple-soft) / 0.5) 1px, transparent 0)`,
            backgroundSize: "64px 64px",
          }}
        />
        <section className="pb-24 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <section className="space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Leadership
                  </h2>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
                {leadership.map((g) => (
                  <GroupCard key={g.role} group={g} />
                ))}
              </section>

              <section className="space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Community Ops
                  </h2>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
                {community.map((g) => (
                  <GroupCard key={g.role} group={g} />
                ))}
              </section>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Team;

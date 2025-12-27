import { Layout } from "@/components/Layout";
import { Mic, Calendar, Users, Play } from "lucide-react";

const upcomingSpaces = [
  { title: "Weekly Community Call", date: "Every Friday @ 8PM UTC", host: "Core Team" },
  { title: "Market Alpha Discussion", date: "Wednesdays @ 6PM UTC", host: "Trading Guild" },
  { title: "Art & Culture Hour", date: "Sundays @ 4PM UTC", host: "Art Council" },
];

const pastSpaces = [
  { title: "2024 Roadmap Reveal", date: "Dec 15, 2024", listeners: "2.4K" },
  { title: "Partnership Announcement", date: "Dec 8, 2024", listeners: "1.8K" },
  { title: "Tokenomics Deep Dive", date: "Dec 1, 2024", listeners: "3.1K" },
];

const Spaces = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold text-gold-gradient mb-4 text-center">
            SOLGODS SPACES
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Join our Twitter Spaces for alpha, community updates, and vibes.
          </p>

          {/* Upcoming */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="text-primary" size={28} />
              Upcoming Spaces
            </h2>
            <div className="grid gap-4">
              {upcomingSpaces.map((space) => (
                <div key={space.title} className="card-glow rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{space.title}</h3>
                    <p className="text-muted-foreground text-sm">{space.date} • Hosted by {space.host}</p>
                  </div>
                  <button className="glow-button px-6 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm">
                    <Mic size={16} />
                    Set Reminder
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Past Spaces */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Play className="text-primary" size={28} />
              Past Recordings
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {pastSpaces.map((space) => (
                <div key={space.title} className="card-glow rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer">
                  <h3 className="font-bold mb-2">{space.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{space.date}</p>
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <Users size={14} />
                    {space.listeners} listeners
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Twitter CTA */}
          <div className="card-glow rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Space</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Follow us on Twitter and turn on notifications to get alerts for all our Spaces.
            </p>
            <a
              href="https://twitter.com/SolGods"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Follow @SolGods
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Spaces;

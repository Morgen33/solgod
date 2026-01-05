import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            ABOUT SOLGODS
          </h1>
          <div className="card-glow rounded-2xl p-8 sm:p-12 space-y-6 text-lg text-muted-foreground">
            <p>
              SolGods is a premier NFT collection and decentralized community built on the Solana blockchain. 
              We represent the convergence of art, technology, and community governance.
            </p>
            <p>
              Born from the vision of creating a truly community-owned digital collective, SolGods empowers 
              holders to participate in governance, earn rewards, and shape the future of Web3 culture.
            </p>
            <h2 className="text-3xl font-bold text-foreground pt-6">Our Mission</h2>
            <p>
              To build the most engaged and impactful community in Web3, where every member has a voice 
              and the collective vision drives innovation, partnerships, and cultural influence.
            </p>
            <h2 className="text-3xl font-bold text-foreground pt-6">The Collection</h2>
            <p>
              Each SolGod is a unique piece of digital art, meticulously crafted with divine attributes 
              and traits. Holding a SolGod grants access to exclusive benefits, governance rights, and 
              a seat at the table of the pantheon.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <StatCard value="10,000" label="Total Supply" />
              <StatCard value="5,000+" label="Holders" />
              <StatCard value="$2M+" label="Treasury" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6 bg-secondary/30 rounded-xl">
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default About;

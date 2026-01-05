import { Layout } from "@/components/Layout";

const Team = () => {
  return (
    <Layout>
      <section className="py-24 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundImage: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundSize: "200% 100%",
            }}
          >
            TEAM
          </h1>
          <div className="inline-block px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-xl text-muted-foreground">Coming Soon</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

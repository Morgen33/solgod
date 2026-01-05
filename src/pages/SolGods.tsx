import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";

export default function SolGods() {
  return (
    <Layout>
      <Seo 
        title="SolGods - Coming Soon" 
        description="The SolGods collection page is coming soon. Stay tuned for updates."
        canonicalPath="/solgods"
      />
      
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #a463dd, #d0a7f0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            SolGods
          </h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground">
            Coming Soon
          </p>
        </div>
      </section>
    </Layout>
  );
}

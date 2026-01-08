import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const Gallery = () => {
  return (
    <Layout>
      <Seo
        title="The Solara Archive | SolGods"
        description="A curated exhibition of Community 1/1s, Staff Editions, and the Genesis SolGods."
        canonicalPath="/gallery"
      />
      
      {/* Subtle dot grid overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--blue-soft) / 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-cinzel mb-6"
            style={{ color: "#e8e4dc", animation: "fade-in 0.8s ease-out forwards" }}
          >
            The Solara Archive
          </h1>
          
          <p 
            className="text-lg md:text-xl mb-8"
            style={{ color: "#01b2ff", animation: "fade-in 0.8s ease-out 0.2s forwards", opacity: 0 }}
          >
            A Curated Exhibition of Community 1/1s, Staff Editions, and the Genesis SolGods
          </p>
          
          <div 
            className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed"
            style={{ animation: "fade-in 0.8s ease-out 0.4s forwards", opacity: 0 }}
          >
            <p>
              Welcome to the visual heart of the collection. The Solara Archive is a dedicated showcase 
              of the diverse identities within our ecosystem. This gallery brings together three distinct 
              pillars of our world: the bespoke Community 1/1s crafted for our holders, the unique Staff 1/1s 
              representing the architects of the project, and the original SolGods—the foundation of the 
              entire Solara movement. Browse through the carousel below to witness the evolution of the art 
              and the unique figures that define our community.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section Placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center"
            style={{ animation: "fade-in 0.8s ease-out 0.6s forwards", opacity: 0 }}
          >
            <p className="text-muted-foreground text-lg">
              Gallery carousel coming soon...
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

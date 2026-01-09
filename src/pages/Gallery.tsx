import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

// Import Community 1/1s
import communityKmac from "@/assets/heroes/community-kmac.jpg";
import communityTick from "@/assets/heroes/community-tick.png";
import communityAntler from "@/assets/heroes/community-antler.png";
import communityOneofone from "@/assets/heroes/community-oneofone.jpg";
import communityQueen from "@/assets/heroes/community-queen.jpg";
import communityCrown from "@/assets/heroes/community-crown.jpg";

// Import Staff 1/1s
import glow1of1 from "@/assets/heroes/glow-1of1.png";
import happy1of1 from "@/assets/heroes/happy-1of1.png";
import bastet1of1 from "@/assets/heroes/bastet-1of1.webp";
import staff1of1Img from "@/assets/heroes/staff-1of1.avif";
// Import SolGods (remaining heroes)
import antler from "@/assets/heroes/antler.png";
import athena from "@/assets/heroes/athena.png";
import bastet from "@/assets/heroes/bastet-new.png";
import cyborg from "@/assets/heroes/cyborg.png";
import frost from "@/assets/heroes/frost.png";
import marcus from "@/assets/heroes/marcus.png";

const community1of1s: string[] = [communityKmac, communityOneofone, communityTick, communityAntler, communityQueen, communityCrown];
const staff1of1s: string[] = [glow1of1, happy1of1, bastet1of1, staff1of1Img];
const solgods: string[] = [];

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

      {/* Community 1/1s Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel mb-8 text-center"
            style={{ color: "#e8e4dc" }}
          >
            Community 1/1s
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bespoke creations crafted exclusively for our dedicated holders
          </p>
          <ThreeDPhotoCarousel images={community1of1s} />
        </div>
      </section>

      {/* Staff 1/1s Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel mb-8 text-center"
            style={{ color: "#e8e4dc" }}
          >
            Staff 1/1s
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unique editions representing the architects of the project
          </p>
          <ThreeDPhotoCarousel images={staff1of1s} />
        </div>
      </section>

      {/* SolGods Section */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel mb-8 text-center"
            style={{ color: "#e8e4dc" }}
          >
            Genesis SolGods
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            The foundation of the entire Solara movement
          </p>
          <ThreeDPhotoCarousel images={solgods} />
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

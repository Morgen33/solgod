import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

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

// Import SolGods (Genesis collection)
import iceAngel from "@/assets/heroes/genesis/ice-angel.png";
import leopardQueen from "@/assets/heroes/genesis/leopard-queen.png";
import pinkShiva from "@/assets/heroes/genesis/pink-shiva.png";
import butterflyLaser from "@/assets/heroes/genesis/butterfly-laser.png";
import rainbowArcher from "@/assets/heroes/genesis/rainbow-archer.jpg";
import cosmicDemon from "@/assets/heroes/genesis/cosmic-demon.png";
import greenMafia from "@/assets/heroes/genesis/green-mafia.png";
import pantherRider from "@/assets/heroes/genesis/panther-rider.png";
import skeletonKnight from "@/assets/heroes/genesis/skeleton-knight.png";
import reaperSuit from "@/assets/heroes/genesis/reaper-suit.png";
import gangHq from "@/assets/heroes/genesis/gang-hq.png";
import iceQueen from "@/assets/heroes/genesis/ice-queen.jpg";
import genesis38 from "@/assets/heroes/genesis/38.avif";
import phoenixWarrior from "@/assets/heroes/genesis/phoenix-warrior.png";
import demonTrident from "@/assets/heroes/genesis/demon-trident.png";
import medusa from "@/assets/heroes/genesis/medusa.png";
import iceMech from "@/assets/heroes/genesis/ice-mech.png";
import fireHammer from "@/assets/heroes/genesis/fire-hammer.png";
import cosmicWarrior from "@/assets/heroes/genesis/cosmic-warrior.png";
import leopardBlind from "@/assets/heroes/genesis/leopard-blind.png";
import pinkShivaFur from "@/assets/heroes/genesis/pink-shiva-fur.png";
import captainCosmic from "@/assets/heroes/genesis/captain-cosmic.png";
import reaperLaser from "@/assets/heroes/genesis/reaper-laser.png";
import genesis127 from "@/assets/heroes/genesis/127.png";
import genesis11 from "@/assets/heroes/genesis/11.png";
import genesis214 from "@/assets/heroes/genesis/214.png";
import genesis255 from "@/assets/heroes/genesis/255.png";
import genesis323 from "@/assets/heroes/genesis/323.png";
import genesis736 from "@/assets/heroes/genesis/736.png";
import genesis587 from "@/assets/heroes/genesis/587.png";
import genesis933 from "@/assets/heroes/genesis/933.avif";
import genesis1280 from "@/assets/heroes/genesis/1280.png";
import genesis1526 from "@/assets/heroes/genesis/1526.png";
import genesis1616 from "@/assets/heroes/genesis/1616.png";
import genesis1801 from "@/assets/heroes/genesis/1801.png";
import genesis1814 from "@/assets/heroes/genesis/1814.png";
import genesis2004 from "@/assets/heroes/genesis/2004.png";
import genesis2397 from "@/assets/heroes/genesis/2397.png";
import genesis2405 from "@/assets/heroes/genesis/2405.png";
import genesis2497 from "@/assets/heroes/genesis/2497.jpg";
import genesis2903 from "@/assets/heroes/genesis/2903.png";
import genesis3324 from "@/assets/heroes/genesis/3324.png";
import genesis3331 from "@/assets/heroes/genesis/3331.png";
import cosmicSword from "@/assets/heroes/genesis/cosmic-sword.png";
import zombieMafia from "@/assets/heroes/genesis/zombie-mafia.png";
import dragonMage from "@/assets/heroes/genesis/dragon-mage.png";
import dragonAxe from "@/assets/heroes/genesis/dragon-axe.png";
import witchWings from "@/assets/heroes/genesis/witch-wings.png";
import lightningPhoenix from "@/assets/heroes/genesis/lightning-phoenix.png";
import butterflyPunk from "@/assets/heroes/genesis/butterfly-punk.png";
import vineSamurai from "@/assets/heroes/genesis/vine-samurai.png";
import phoenixHood from "@/assets/heroes/genesis/phoenix-hood.png";
import tuxedoAngel from "@/assets/heroes/genesis/tuxedo-angel.png";
import genesis2276 from "@/assets/heroes/genesis/2276.png";
import genesis2410 from "@/assets/heroes/genesis/2410.png";
import genesis3269 from "@/assets/heroes/genesis/3269.png";
import genesis38v2 from "@/assets/heroes/genesis/38-v2.avif";
import eddieSpecial from "@/assets/heroes/genesis/eddie-special.avif";
import wizardForest from "@/assets/heroes/genesis/wizard-forest.png";
import cosmicWizard from "@/assets/heroes/genesis/cosmic-wizard.png";

const community1of1s: string[] = [communityKmac, communityOneofone, communityTick, communityAntler, communityQueen, communityCrown];
const staff1of1s: string[] = [glow1of1, happy1of1, bastet1of1, staff1of1Img];
const solgods: string[] = [
  iceAngel, leopardQueen, butterflyLaser, rainbowArcher,
  cosmicDemon, greenMafia, pantherRider, skeletonKnight, reaperSuit,
  gangHq, iceQueen, genesis38, phoenixWarrior, demonTrident, medusa,
  iceMech, fireHammer, cosmicWarrior, leopardBlind,
  captainCosmic, genesis127, genesis11, genesis214,
  genesis255, genesis323, genesis736, genesis587, genesis933,
  genesis1280, genesis1526, genesis1616, genesis1801, genesis1814,
  genesis2004, genesis2397, genesis2405, genesis2497, genesis2903,
  genesis3324, genesis3331, cosmicSword, zombieMafia, dragonMage,
  dragonAxe, witchWings, lightningPhoenix, butterflyPunk, vineSamurai,
  phoenixHood, tuxedoAngel, genesis2276, genesis2410,
  cosmicWizard
];

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
          <ParallaxScrollSecond images={solgods} />
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

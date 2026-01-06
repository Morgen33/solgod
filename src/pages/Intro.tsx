import { useNavigate } from "react-router-dom";
import PlasmaHero from "@/components/ui/plasma-hero";
import solgodIntro from "@/assets/solgod-intro.avif";
import { Seo } from "@/components/Seo";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <>
      <Seo 
        title="SolGods - Enter the Pantheon" 
        description="Welcome to SolGods. 3,333 divine beings on Solana. Enter to discover the collection."
        canonicalPath="/"
      />
      <PlasmaHero
        title="SOLGODS"
        subtitle="NFTS"
        imageSrc={solgodIntro}
        onEnter={() => navigate("/home")}
      />
    </>
  );
}

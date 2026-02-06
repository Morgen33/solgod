import { useNavigate } from "react-router-dom";
import PlasmaHero from "@/components/ui/plasma-hero";
import { Seo } from "@/components/Seo";
import { MintBanner } from "@/components/MintBanner";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <>
      <Seo 
        title="SolGods - Enter the Pantheon" 
        description="Welcome to SolGods. 3,333 divine beings on Solana. Enter to discover the collection."
        canonicalPath="/"
      />
      <MintBanner />
      <PlasmaHero
        title="SOLGODS"
        subtitle="NFTS"
        onEnter={() => navigate("/home")}
      />
    </>
  );
}

import { useNavigate } from "react-router-dom";
import LightningIntro from "@/components/ui/lightning-intro";
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
      <LightningIntro
        text="SOLGODS NFTS"
        cyclesBeforeReveal={2}
        solgodImageSrc={solgodIntro}
        onEnter={() => navigate("/home")}
        buttonText="Enter"
      />
    </>
  );
}

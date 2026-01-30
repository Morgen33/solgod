import { Layout } from "@/components/Layout";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MintSolCity = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24">
        <h1 
          className="text-5xl sm:text-7xl font-bold mb-6 text-center"
          style={{ 
            fontFamily: "'Cinzel', serif",
            color: "#01b2ff"
          }}
        >
          Coming Soon
        </h1>
        <p 
          className="text-2xl sm:text-4xl font-semibold mb-8 text-center"
          style={{ 
            fontFamily: "'Cinzel', serif",
            color: "#e8e4dc"
          }}
        >
          Feb 6th
        </p>
        <p className="text-muted-foreground text-lg mb-12 text-center max-w-xl">
          The SolCity mint is approaching. Prepare to claim your place in the city.
        </p>
        <ShinyButton onClick={() => navigate("/home")}>
          <ArrowLeft size={20} />
          Back to Home
        </ShinyButton>
      </section>
    </Layout>
  );
};

export default MintSolCity;

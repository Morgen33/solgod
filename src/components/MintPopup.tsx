import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShinyButton } from "@/components/ui/shiny-button";
import solcityBanner from "@/assets/solcity-mint-banner.png";

export const MintPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md sm:max-w-lg p-0 bg-[#0a0a2e] border-[#01b2ff]/40 overflow-hidden rounded-2xl [&>button]:hidden">
        <div className="relative">

          <div className="flex flex-col items-center p-6 pt-4">
            <img
              src={solcityBanner}
              alt="SolCity Mint"
              className="w-64 h-64 object-contain mb-4 rounded-xl"
            />

            <h2
              className="text-2xl sm:text-3xl font-bold text-center mb-2"
              style={{ fontFamily: "'Cinzel', serif", color: "#01b2ff" }}
            >
              🚀 SolCity Mint is LIVE!
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-center text-[#e8e4dc] mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
              Today, Feb 6th
            </p>

            <p className="text-base text-center text-[#e8e4dc]/80 mb-5">
              Launching at <span className="text-[#01b2ff] font-bold">6:05 PM EST</span> on LaunchMyNFT
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <ShinyButton
                className="flex-1"
                onClick={() => window.open("https://launchmynft.io/collections/6SHjDHLFpGQnE241cxeTiCBe8rVVa7Bqnq7RCdNtBURt/OyJM6fOrhHVQb8XM4hvY", "_blank")}
              >
                Go to LaunchMyNFT
              </ShinyButton>
              <ShinyButton className="flex-1" onClick={() => setIsOpen(false)}>
                Close
              </ShinyButton>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

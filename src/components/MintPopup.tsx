import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import solcityBanner from "@/assets/solcity-mint-banner.png";

const TARGET_DATE = new Date("2026-02-06T18:05:00-05:00"); // 6:05 PM EST

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-[#01b2ff]/15 border border-[#01b2ff]/30 rounded-lg px-3 py-2 min-w-[60px] text-center">
      <span className="text-2xl sm:text-3xl font-bold text-[#01b2ff] font-mono">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs text-[#e8e4dc]/60 mt-1 uppercase tracking-wider">{label}</span>
  </div>
);

export const MintPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const isLive = timeLeft === null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md sm:max-w-lg p-0 bg-[#0a0a2e] border-[#01b2ff]/40 overflow-hidden rounded-2xl [&>button]:hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-4 h-4 text-white" />
          </button>
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
              {isLive ? "🚀 SolCity Mint is LIVE!" : "⏳ SolCity Mint"}
            </h2>

            {isLive ? (
              <p className="text-base text-center text-[#e8e4dc]/80 mb-5">
                Mint is <span className="text-[#01b2ff] font-bold">LIVE NOW</span> on LaunchMyNFT!
              </p>
            ) : (
              <>
                <p className="text-base text-center text-[#e8e4dc]/80 mb-3">
                  Launching at <span className="text-[#01b2ff] font-bold">6:05 PM EST</span> on LaunchMyNFT
                </p>
                <div className="flex gap-3 mb-5">
                  <TimeBox value={timeLeft.hours} label="Hours" />
                  <TimeBox value={timeLeft.minutes} label="Min" />
                  <TimeBox value={timeLeft.seconds} label="Sec" />
                </div>
              </>
            )}

            <div className="flex flex-col gap-3 w-full">
              <ShinyButton
                className="w-full"
                onClick={() => window.open("https://launchmynft.io/collections/6SHjDHLFpGQnE241cxeTiCBe8rVVa7Bqnq7RCdNtBURt/OyJM6fOrhHVQb8XM4hvY", "_blank")}
              >
                Go to LaunchMyNFT
              </ShinyButton>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

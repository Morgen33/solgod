import { useNavigate } from "react-router-dom";

export const MintBanner = () => {
  const text = "🚀 SolCity Mint — LIVE TODAY at 6:05 PM EST on LaunchMyNFT   •   🎙️ X Space LIVE at 5:00 PM EST   •   ";
  const repeated = text.repeat(6);

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-[#01b2ff]/10 border-b border-[#01b2ff]/20 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center h-10 whitespace-nowrap animate-scroll-left">
        <span className="inline-flex items-center gap-1 text-sm font-semibold">
          {repeated.split("•").map((segment, i) => {
            const trimmed = segment.trim();
            if (!trimmed) return null;
            if (trimmed.includes("LaunchMyNFT")) {
              return (
                <a
                  key={i}
                  href="https://launchmynft.io/collections/6SHjDHLFpGQnE241cxeTiCBe8rVVa7Bqnq7RCdNtBURt/OyJM6fOrhHVQb8XM4hvY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01b2ff] hover:text-white transition-colors cursor-pointer px-2"
                >
                  {trimmed}
                </a>
              );
            }
            if (trimmed.includes("X Space")) {
              return (
                <a
                  key={i}
                  href="https://x.com/i/spaces/1mrxmBMmNwNKy?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8e4dc] hover:text-[#01b2ff] transition-colors cursor-pointer px-2"
                >
                  {trimmed}
                </a>
              );
            }
            return (
              <span key={i} className="text-[#e8e4dc]/60 px-2">{trimmed}</span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

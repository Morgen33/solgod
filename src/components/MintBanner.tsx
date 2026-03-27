export const MintBanner = () => {
  const text = "🚀 SolGods NFTs & SolCity are now available on Exclusivo — Buy & Sell Here!   •   ";
  const repeated = text.repeat(6);

  return (
    <a
      href="https://app.exclusivo.one/p/solgods"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-[#01b2ff]/10 border-b border-[#01b2ff]/20 backdrop-blur-sm overflow-hidden block hover:bg-[#01b2ff]/20 transition-colors cursor-pointer"
    >
      <div className="flex items-center h-10 whitespace-nowrap animate-scroll-left">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#01b2ff]">
          {repeated}
        </span>
      </div>
    </a>
  );
};

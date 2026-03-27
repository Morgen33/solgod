export const MintBanner = () => {
  const segment = (
    <>
      🚀 SolGods NFTs &amp; SolCity are now available on Exclusivo —{" "}
      <a
        href="https://app.exclusivo.one/p/solgods"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
      >
        Buy &amp; Sell Here!
      </a>
      {"   •   "}
    </>
  );

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-[#01b2ff]/10 border-b border-[#01b2ff]/20 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center h-10 whitespace-nowrap animate-scroll-left">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#01b2ff]">
          {Array.from({ length: 6 }).map((_, i) => <span key={i}>{segment}</span>)}
        </span>
      </div>
    </div>
  );
};

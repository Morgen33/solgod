export const MintBanner = () => {
  const text = "🚀 SolCity Mint is Live Now — Mint it Here!   •   ";
  const repeated = text.repeat(6);

  return (
    <a
      href="https://launchmynft.io/collections/6SHjDHLFpGQnE241cxeTiCBe8rVVa7Bqnq7RCdNtBURt/OyJM6fOrhHVQb8XM4hvY"
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

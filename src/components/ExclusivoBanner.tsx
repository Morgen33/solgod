export const ExclusivoBanner = () => {
  const segment = (
    <>
      🔥 SolGods &amp; SolCity — Now available to{" "}
      <a
        href="https://launchmynft.io/collections/6SHjDHLFpGQnE241cxeTiCBe8rVVa7Bqnq7RCdNtBURt/OyJM6fOrhHVQb8XM4hvY"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
      >
        Buy, Sell &amp; Trade Here!
      </a>
      {"   •   "}
    </>
  );

  return (
    <div className="fixed top-[6.5rem] sm:top-[7.5rem] left-0 right-0 z-40 bg-primary/10 border-b border-primary/20 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center h-10 whitespace-nowrap animate-scroll-right-slow">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {Array.from({ length: 6 }).map((_, i) => <span key={i}>{segment}</span>)}
        </span>
      </div>
    </div>
  );
};

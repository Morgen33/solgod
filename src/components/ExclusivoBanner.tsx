export const ExclusivoBanner = () => {
  const text = "🔥 SolGods & SolCity — Now available to Buy, Sell & Trade Here!   •   ";
  const repeated = text.repeat(6);

  return (
    <a
      href="https://app.exclusivo.one/p/solgods"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-[6.5rem] sm:top-[7.5rem] left-0 right-0 z-40 bg-primary/10 border-b border-primary/20 backdrop-blur-sm overflow-hidden block hover:bg-primary/20 transition-colors cursor-pointer"
    >
      <div className="flex items-center h-10 whitespace-nowrap animate-scroll-right-slow">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {repeated}
        </span>
      </div>
    </a>
  );
};

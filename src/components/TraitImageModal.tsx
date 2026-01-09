import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TraitImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

export const TraitImageModal = ({ src, alt, className = "" }: TraitImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer hover:scale-105 transition-transform duration-300`}
        onClick={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg sm:max-w-xl md:max-w-2xl p-0 bg-secondary/95 border-blue/30 overflow-hidden">
          <div className="relative p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center">
              <img
                src={src}
                alt={alt}
                className="max-h-[70vh] w-auto object-contain"
              />
              <p className="mt-4 text-lg font-medium text-[#e8e4dc] font-cinzel">{alt}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

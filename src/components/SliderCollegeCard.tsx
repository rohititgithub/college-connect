import TicketIcon from "@/assets/ticket_icon.png";
import Image from "next/image";

type SliderCollegeCardProps = {
  position: number;
  logoImage: string;
  name: string;
  footfall: number;
};

export default function SliderCollegeCard({
  position,
  logoImage,
  name,
  footfall,
}: SliderCollegeCardProps) {
  return (
    <div
      style={{ "--position": position } as React.CSSProperties}
      className="item absolute flex h-16 w-56 items-center justify-between overflow-hidden rounded-full bg-white px-4 py-1.5 transition-all lg:h-20.25 lg:w-68.25 lg:py-3"
    >
      <div className="relative flex size-10 items-center justify-center lg:size-16">
        <Image
          src={logoImage}
          alt="College Logo"
          className="max-h-full max-w-full"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-1">
        <span className="text-center leading-none font-semibold lg:text-lg">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <Image
            src={TicketIcon}
            alt="Ticket Icon"
            className="max-h-[13.5px] w-3.75 object-contain"
          />
          <span className="text-xs font-medium text-[#5F5F5F]">
            Footfall - {footfall}
          </span>
        </div>
      </div>
    </div>
  );
}

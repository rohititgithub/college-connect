import TicketIcon from "../assets/ticket_icon.png";

type SliderCollegeCardProps = {
  position: number;
  image: string;
  name: string;
};

export default function SliderCollegeCard({
  position,
  image,
  name,
}: SliderCollegeCardProps) {
  return (
    <div
      style={{ "--position": position } as React.CSSProperties}
      className="item absolute flex h-20.25 w-68.25 items-center justify-between rounded-full bg-white px-4 py-3 transition-all"
    >
      <img src={image} alt="College Logo" className="max-h-full max-w-full" />
      <div className="flex flex-1 flex-col items-center gap-1">
        <span className="text-center text-lg leading-none font-semibold">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <img
            src={TicketIcon}
            alt="Ticket Icon"
            className="max-h-[13.5px] w-3.75"
          />
          <span className="text-xs font-medium text-[#5F5F5F]">
            Footfall - 20,000
          </span>
        </div>
      </div>
    </div>
  );
}

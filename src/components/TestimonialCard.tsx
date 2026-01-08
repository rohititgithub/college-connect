import OpenQuotes from "../assets/Open_Quotes.png";
import CloseQuotes from "../assets/Close_Quotes.png";

type SliderCollegeCardProps = {
  position: number;
  author: string;
  college: string;
  event?: string;
  review: string;
};

export default function TestimonialCard({
  position,
  author,
  college,
  event,
  review,
}: SliderCollegeCardProps) {
  return (
    <div
      style={{ "--position": position } as React.CSSProperties}
      className="item absolute flex h-55.25 w-86.5 flex-col bg-white px-4 py-10 transition-all lg:h-82.5 lg:w-114.5 lg:px-12 lg:pt-20"
    >
      <img
        src={OpenQuotes}
        alt="Open Quotes"
        className="absolute top-0 left-0 aspect-4/3 w-10 lg:w-16"
      />
      <span className="z-10 leading-tight font-bold lg:text-[20px]">
        {author}
      </span>
      <span className="z-10 text-xs leading-tight lg:text-sm">
        {college}
        {event && ` - ${event}`}
      </span>
      <p className="z-10 mt-2 text-sm lg:text-[15px]">{review}</p>
      <img
        src={CloseQuotes}
        alt="Close Quotes"
        className="absolute right-0 bottom-0 aspect-4/3 w-10 lg:w-16"
      />
    </div>
  );
}

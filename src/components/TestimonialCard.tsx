import OpenQuotes from "../assets/Open_Quotes.png";
import CloseQuotes from "../assets/Close_Quotes.png";

type SliderCollegeCardProps = {
  position: number;
  author: string;
  review: string;
};

export default function TestimonialCard({
  position,
  author,
  review,
}: SliderCollegeCardProps) {
  return (
    <div
      style={{ "--position": position } as React.CSSProperties}
      className="item absolute flex h-82.5 w-114.5 flex-col gap-3 bg-white px-12 pt-20 pb-4 transition-all"
    >
      <img
        src={OpenQuotes}
        alt="Open Quotes"
        className="absolute top-0 left-0"
      />
      <span className="text-[20px] font-bold">{author}</span>
      <p className="text-[15px]">{review}</p>
      <img
        src={CloseQuotes}
        alt="Close Quotes"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}

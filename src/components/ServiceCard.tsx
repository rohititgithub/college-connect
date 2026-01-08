type ServiceCardProps = {
  label: string;
  desciption: string;
  image: string;
};

export default function ServiceCard({
  label,
  desciption,
  image,
}: ServiceCardProps) {
  return (
    <div className="relative flex h-48 w-full max-w-103 flex-col rounded-2xl bg-white px-7.5 pt-13 pb-7.5 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] lg:h-56.25 lg:gap-3 lg:pt-19.5">
      <div className="absolute -top-18 left-8 flex size-28 items-center justify-center rounded-full bg-[#234AFF]">
        <img src={image} alt="Service Card Image" />
      </div>
      <span className="text-2xl font-bold">{label}</span>
      <p className="text-[#74787C]">{desciption}</p>
    </div>
  );
}

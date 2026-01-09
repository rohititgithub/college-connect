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
    <div className="relative flex h-36 w-full max-w-103 flex-col rounded-2xl bg-white px-7.5 pt-8 pb-7.5 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] lg:h-56.25 lg:gap-3 lg:pt-19.5">
      <div className="absolute -top-10 left-8 flex size-16 items-center justify-center rounded-full bg-[#234AFF] p-2 lg:-top-18 lg:size-28">
        <img
          src={image}
          alt="Service Card Image"
          className="max-w-8 object-contain lg:max-w-full"
        />
      </div>
      <span className="text-lg font-bold lg:text-2xl">{label}</span>
      <p className="text-sm text-[#74787C] lg:text-base">{desciption}</p>
    </div>
  );
}

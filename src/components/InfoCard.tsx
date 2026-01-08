import InfoIcon from "../assets/Info_Icon.png";

type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="flex w-full max-w-102.5 flex-col gap-2 rounded-2xl bg-white p-6 lg:h-78 lg:p-10">
      <img
        src={InfoIcon}
        alt="Info Card Icon"
        className="hidden size-16.25 lg:block"
      />
      <span className="text-[22px] font-bold lg:mt-4">{title}</span>
      <p className="text-[#74787C]">{description}</p>
    </div>
  );
}

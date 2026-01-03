import InfoIcon from "../assets/Info_Icon.png";

type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="flex h-78 w-102.5 flex-col gap-2 rounded-2xl bg-white p-10">
      <img src={InfoIcon} alt="Info Card Icon" className="size-16.25" />
      <span className="mt-4 text-[22px] font-bold">{title}</span>
      <p className="text-[#74787C]">{description}</p>
    </div>
  );
}

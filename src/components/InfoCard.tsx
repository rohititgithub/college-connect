import Image from "next/image";
import InfoIcon from "@/assets/Info_Icon.png";

type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="flex w-full max-w-102.5 flex-col gap-0.5 rounded-2xl bg-white p-6 lg:h-78 lg:gap-2 lg:p-10">
      <Image
        src={InfoIcon}
        alt="Info Card Icon"
        className="size-8 lg:size-16.25"
      />
      <span className="text-lg font-bold lg:mt-4 lg:text-[22px]">{title}</span>
      <p className="text-sm text-[#74787C] lg:text-base">{description}</p>
    </div>
  );
}

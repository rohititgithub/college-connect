import { type LucideProps } from "lucide-react";

type MembershipInfoCardProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

export default function MembershipInfoCard({
  Icon,
  title,
  description,
}: MembershipInfoCardProps) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border border-[#F3F4F6] p-6 shadow-md lg:h-44.5 lg:w-61">
      <Icon size={32} className="min-h-8 min-w-8 text-[#155DFC]" />
      <span>{title}</span>
      <span className="text-sm text-[#4A5565]">{description}</span>
    </div>
  );
}

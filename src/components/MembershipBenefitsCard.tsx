import type { LucideProps } from "lucide-react";

type MembershipBenefitsCardProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
};

export default function MembershipBenefitsCard({
  Icon,
  label,
}: MembershipBenefitsCardProps) {
  return (
    <div className="flex h-25 w-full items-center gap-2 rounded-2xl p-6 shadow-md">
      <div className="rounded-[14px] bg-[#DBEAFE] p-3">
        <Icon size={28} className="text-[#155DFC]" />
      </div>
      <span className="flex-1 text-wrap">{label}</span>
    </div>
  );
}

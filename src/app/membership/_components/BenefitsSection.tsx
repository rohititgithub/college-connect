"use client";

import MembershipBenefitsCard from "@/components/MembershipBenefitsCard";
import {
  Award,
  Briefcase,
  Calendar,
  Coffee,
  DollarSign,
  FileCheck,
  GraduationCap,
  Heart,
  Lightbulb,
  Network,
  PartyPopper,
  Star,
  Tag,
  Target,
  Ticket,
  Users,
  type LucideProps,
} from "lucide-react";

type Benefit = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
};
export default function BenefitsSection() {
  const benefits: Benefit[] = [
    {
      Icon: Briefcase,
      label: "First Internship Program",
    },
    {
      Icon: GraduationCap,
      label: "Member Exclusive Workshops",
    },
    {
      Icon: Ticket,
      label: "Free Event Passes",
    },
    {
      Icon: Award,
      label: "Premium Courses",
    },
    {
      Icon: PartyPopper,
      label: "Exclusive Party",
    },
    {
      Icon: Tag,
      label: "Brand Discounts",
    },
    {
      Icon: DollarSign,
      label: "Earning Opportunities",
    },
    {
      Icon: Coffee,
      label: "Cafe & Club Discounts",
    },
    {
      Icon: Calendar,
      label: "Event Discounts",
    },
    {
      Icon: Users,
      label: "Meetups & Get-Togethers",
    },
    {
      Icon: Network,
      label: "Networking Zones",
    },
    {
      Icon: FileCheck,
      label: "Certificates",
    },
    {
      Icon: Heart,
      label: "Volunteering with NGOs",
    },
    {
      Icon: Target,
      label: "Skill Development Programs",
    },
    {
      Icon: Star,
      label: "Meet Celebs & Artists",
    },
    {
      Icon: Lightbulb,
      label: "Unconventional Internships",
    },
  ];

  return (
    <section
      id="benefits"
      className="mx-auto flex w-full max-w-7xl scroll-mt-24 flex-col items-center gap-4 px-4 py-12 md:gap-8 md:py-20"
    >
      <span className="font-plus-jakarta-sans text-3xl md:text-5xl">
        Membership Benefits
      </span>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <MembershipBenefitsCard
            key={index}
            Icon={benefit.Icon}
            label={benefit.label}
          />
        ))}
      </div>
    </section>
  );
}

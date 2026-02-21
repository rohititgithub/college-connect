"use client";

import MembershipInfoCard from "@/components/MembershipInfoCard";
import { Award, Calendar, TrendingUp, Users } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="mx-auto mt-0 flex w-full max-w-6xl flex-col items-center px-4 md:gap-8">
      <span className="font-plus-jakarta-sans text-center text-3xl md:text-5xl">
        What is INGLU Membership?
      </span>

      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="mt-10 flex flex-1 flex-col gap-7 text-lg text-[#364153] lg:max-w-xl">
          <p>
            INGLU Membership is a monthly subscription-based program that opens
            doors to countless opportunities for students and young
            professionals.
          </p>
          <p>
            As a member, you&apos;ll enjoy special discounts, exciting
            giveaways, volunteering opportunities with NGOs, and recognition for
            your achievements.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-xl">
          <MembershipInfoCard
            Icon={Users}
            title="Community Access"
            description="Connect with thousands of like-minded students"
          />
          <MembershipInfoCard
            Icon={Award}
            title="Certified Training"
            description="Get industry-recognized certifications"
          />
          <MembershipInfoCard
            Icon={Calendar}
            title="Exclusive Events"
            description="Access to workshops, seminars, and meetups"
          />
          <MembershipInfoCard
            Icon={TrendingUp}
            title="Career Growth"
            description="Internship and earning opportunities"
          />
        </div>
      </div>
    </section>
  );
}

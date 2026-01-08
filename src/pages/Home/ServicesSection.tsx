import ServiceCard from "../../components/ServiceCard";
import ForBrandsIcon from "../../assets/For_Brands_Service_Icon.png";
import ForCollegesIcon from "../../assets/For_Colleges_Service_Icon.png";
import ArtistsCreatorsIcon from "../../assets/Artists_&_Creators_Service_Icon.png";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto flex flex-col items-center gap-22 p-8 lg:gap-32"
    >
      <div className="relative w-full max-w-7xl">
        <span className="text-[32px] font-bold lg:text-6xl">What We Do</span>
        <div className="absolute top-0 left-42 -z-10 h-9 w-12 rounded-[22px] bg-[#6F86F3]/60 lg:-top-2.25 lg:left-79 lg:h-15.5 lg:w-20.5" />
      </div>
      <div className="flex flex-col gap-24 lg:flex-row lg:gap-8">
        <ServiceCard
          label="For Brands"
          desciption="Strategic brand activations, youth marketing, and college circuit campaigns"
          image={ForBrandsIcon}
        />
        <ServiceCard
          label="For Colleges"
          desciption="Brand tie-ups, student programs, and experiential events for campus communities."
          image={ForCollegesIcon}
        />
        <ServiceCard
          label="Artists & Creators"
          desciption="Showcase talent, perform at festivals, and grow with brand collabs."
          image={ArtistsCreatorsIcon}
        />
      </div>
    </section>
  );
}

import BrandLogoCard from "../../components/BrandLogoCard";
import DenverLogo from "../../assets/Denver_Horizontal_Logo.png";
import NykaaLogo from "../../assets/Nykaa_New_Logo.svg";
import MonsterLogo from "../../assets/Logo_Monster_Energy.webp";
import AxeLogo from "../../assets/Axe_logo_2016.svg";
import PizzaHutLogo from "../../assets/Pizza_Hut_international_logo_2014.svg";
import TacoBellLogo from "../../assets/Taco_Bell_2023.svg";
import HellLogo from "../../assets/HELL_ENERGY_logo.png";
import PWLogo from "../../assets/Physics_wallah_logo.jpg";
import ResponsibleWhatrLogo from "../../assets/responsible_whatr_logo.jpg";
import WoodsmenLogo from "../../assets/woodsmen-logo-dark.png";
import WoodNoteLogo from "../../assets/woodnote.webp";
import ManforceLogo from "../../assets/Manforce_Logo.png";
import SuperSmellyLogo from "../../assets/Super_Smelly_Logo.jpg";
import RedBullLogo from "../../assets/RedBullEnergyDrink.svg";
import SimbaBeerLogo from "../../assets/Simba_Beer_Logo.png";

export default function BrandsSection() {
  const logos = [
    DenverLogo,
    NykaaLogo,
    MonsterLogo,
    AxeLogo,
    PizzaHutLogo,
    TacoBellLogo,
    HellLogo,
    PWLogo,
    ResponsibleWhatrLogo,
    WoodsmenLogo,
    WoodNoteLogo,
    ManforceLogo,
    SuperSmellyLogo,
    RedBullLogo,
    SimbaBeerLogo,
  ];

  return (
    <section id="Brands" className="flex flex-col gap-6">
      <div className="mx-auto flex w-7xl items-center gap-4">
        <div className="h-12.5 w-16.5 rounded-full bg-[#234AFF]/60 outline-2 outline-offset-4 outline-white outline-dashed" />
        <div className="flex items-baseline gap-4">
          <span className="text-6xl font-bold">Brands</span>
          <span className="text-[15px] font-bold tracking-widest text-[#234AFF] uppercase">
            We Work With
          </span>
        </div>
      </div>
      <div
        style={
          {
            "--width": "196px",
            "--height": "96px",
            "--quantity": logos.length,
            "--duration": "18s",
          } as React.CSSProperties
        }
        className="slider w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          {logos.map((logo, index) => (
            <BrandLogoCard position={index + 1} image={logo} />
          ))}
        </div>{" "}
      </div>
    </section>
  );
}

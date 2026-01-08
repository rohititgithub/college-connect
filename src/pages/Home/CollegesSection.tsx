import SliderCollegeCard from "../../components/SliderCollegeCard";
import IITKanpurLogo from "../../assets/IIT_Kanpur_Logo.svg";
import IITGuwahatiLogo from "../../assets/IIT_Guwahati_Logo.svg";
import BITSPilaniLogo from "../../assets/BITS_Pilani-Logo.svg";
import HansrajCollegeLogo from "../../assets/Hansraj_College_Logo.jpg";
import HinduCollegeLogo from "../../assets/Hindu_College,_Delhi_shield.svg";
import LadyIrwinCollegeLogo from "../../assets/Lady_Irwin_College_Logo.png";
import RuiaCollegeLogo from "../../assets/Ruia_College_Logo.png";
import IITBombayLogo from "../../assets/Indian_Institute_of_Technology_Bombay_Logo.svg";
import SIBMLogo from "../../assets/Logo_of_Symbiosis_International_University.svg";
import NIITNeemranaLogo from "../../assets/NIIT_Neemrana_Logo.jpeg";
import COEPLogo from "../../assets/College_of_Engineering,_Pune_logo.jpg";
import IITMadrasLogo from "../../assets/IIT_Madras_Logo.svg";
import LPULogo from "../../assets/Lovely_Professional_University_logo.png";
import NMIMSNaviMumbaiLogo from "../../assets/Narsee_Monjee_Institute_of_Management_Studies_Logo.png";
import BPITCollegeLogo from "../../assets/BPIT-logo.jpg";
import IITPalakkadLogo from "../../assets/IIT_Palakkad_Logo.svg";
import SriVenkateswaraCollegeLogo from "../../assets/Sri_Venkateswara_College_Logo.png";
import IITPatnaLogo from "../../assets/Indian_Institute_of_Technology,_Patna.svg";

export default function CollegesSection() {
  const colleges = [
    [
      {
        name: "IIT Kanpur",
        logo: IITKanpurLogo,
        footfall: 50000,
      },
      {
        name: "IIT Guwahati",
        logo: IITGuwahatiLogo,
        footfall: 85000,
      },
      {
        name: "BITS Pilani",
        logo: BITSPilaniLogo,
        footfall: 20000,
      },
      {
        name: "Hansraj College",
        logo: HansrajCollegeLogo,
        footfall: 25000,
      },
      {
        name: "Hindu College",
        logo: HinduCollegeLogo,
        footfall: 30000,
      },
      {
        name: "Lady Irwin College",
        logo: LadyIrwinCollegeLogo,
        footfall: 8000,
      },
      {
        name: "Ruia College",
        logo: RuiaCollegeLogo,
        footfall: 12000,
      },
      {
        name: "IIT Bombay",
        logo: IITBombayLogo,
        footfall: 145000,
      },
      {
        name: "Symbiosis",
        logo: SIBMLogo,
        footfall: 15000,
      },
    ],
    [
      {
        name: "NIIT",
        logo: NIITNeemranaLogo,
        footfall: 5000,
      },
      {
        name: "COEP",
        logo: COEPLogo,
        footfall: 18000,
      },
      {
        name: "IIT Madras",
        logo: IITMadrasLogo,
        footfall: 75000,
      },
      {
        name: "LPU",
        logo: LPULogo,
        footfall: 40000,
      },
      {
        name: "NMIMS",
        logo: NMIMSNaviMumbaiLogo,
        footfall: 8500,
      },
      {
        name: "BPIT College",
        logo: BPITCollegeLogo,
        footfall: 6000,
      },
      {
        name: "IIT Palakkad",
        logo: IITPalakkadLogo,
        footfall: 3500,
      },
      {
        name: "Sri Venkateswara College",
        logo: SriVenkateswaraCollegeLogo,
        footfall: 18000,
      },
      {
        name: "IIT Patna",
        logo: IITPatnaLogo,
        footfall: 7000,
      },
    ],
  ];

  return (
    <section id="colleges" className="flex flex-col gap-6">
      <div className="mx-auto mb-4 flex w-full max-w-7xl items-center gap-4 px-8 lg:mb-12">
        <div className="h-9 w-12 rounded-full bg-[#234AFF]/60 outline-2 outline-offset-4 outline-white outline-dashed lg:h-12.5 lg:w-16.5" />
        <div className="flex items-baseline gap-4">
          <span className="text-[32px] font-bold lg:text-6xl">Colleges</span>
          <span className="text-[10px] font-bold tracking-widest text-[#234AFF] uppercase lg:text-[15px]">
            We Onboard
          </span>
        </div>
      </div>
      <div
        style={
          {
            "--width": "max(18dvw, 256px)",
            "--height": "81px",
            "--quantity": colleges[0].length,
            "--duration": "18s",
          } as React.CSSProperties
        }
        className="slider max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          {colleges[0].map((college, index) => (
            <SliderCollegeCard
              position={index + 1}
              name={college.name}
              logoImage={college.logo}
              footfall={college.footfall}
            />
          ))}
        </div>
      </div>
      <div
        style={
          {
            "--width": "max(18dvw, 256px)",
            "--height": "81px",
            "--quantity": colleges[1].length,
            "--duration": "18s",
          } as React.CSSProperties
        }
        className="slider_alternate max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          {colleges[1].map((college, index) => (
            <SliderCollegeCard
              position={index + 1}
              name={college.name}
              logoImage={college.logo}
              footfall={college.footfall}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

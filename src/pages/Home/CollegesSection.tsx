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
  return (
    <section id="colleges" className="flex flex-col gap-6">
      <div className="mx-auto mb-12 flex w-7xl items-center gap-4">
        <div className="h-12.5 w-16.5 rounded-full bg-[#234AFF]/60 outline-2 outline-offset-4 outline-white outline-dashed" />
        <div className="flex items-baseline gap-4">
          <span className="text-6xl font-bold">Colleges</span>
          <span className="text-[15px] font-bold tracking-widest text-[#234AFF] uppercase">
            We Onboard
          </span>
        </div>
      </div>
      <div
        style={
          {
            "--width": "286px",
            "--height": "81px",
            "--quantity": 9,
            "--duration": "18s",
          } as React.CSSProperties
        }
        className="slider max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          <SliderCollegeCard
            position={1}
            name="IIT Kanpur"
            image={IITKanpurLogo}
            footfall={50000}
          />
          <SliderCollegeCard
            position={2}
            name="IIT Guwahati"
            image={IITGuwahatiLogo}
            footfall={85000}
          />
          <SliderCollegeCard
            position={3}
            name="BITS Pilani"
            image={BITSPilaniLogo}
            footfall={20000}
          />
          <SliderCollegeCard
            position={4}
            name="Hansraj College"
            image={HansrajCollegeLogo}
            footfall={25000}
          />
          <SliderCollegeCard
            position={5}
            name="Hindu College"
            image={HinduCollegeLogo}
            footfall={30000}
          />
          <SliderCollegeCard
            position={6}
            name="Lady Irwin College"
            image={LadyIrwinCollegeLogo}
            footfall={8000}
          />
          <SliderCollegeCard
            position={7}
            name="Ruia College"
            image={RuiaCollegeLogo}
            footfall={12000}
          />
          <SliderCollegeCard
            position={8}
            name="IIT Bombay"
            image={IITBombayLogo}
            footfall={145000}
          />
          <SliderCollegeCard
            position={9}
            name="Symbiosis"
            image={SIBMLogo}
            footfall={15000}
          />
        </div>
      </div>
      <div
        style={
          {
            "--width": "286px",
            "--height": "81px",
            "--quantity": 9,
            "--duration": "18s",
          } as React.CSSProperties
        }
        className="slider_alternate max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          <SliderCollegeCard
            position={1}
            name="NIIT"
            image={NIITNeemranaLogo}
            footfall={5000}
          />
          <SliderCollegeCard
            position={2}
            name="COEP"
            image={COEPLogo}
            footfall={18000}
          />
          <SliderCollegeCard
            position={3}
            name="IIT Madras"
            image={IITMadrasLogo}
            footfall={75000}
          />
          <SliderCollegeCard
            position={4}
            name="LPU"
            image={LPULogo}
            footfall={40000}
          />
          <SliderCollegeCard
            position={5}
            name="NMIMS"
            image={NMIMSNaviMumbaiLogo}
            footfall={8500}
          />
          <SliderCollegeCard
            position={6}
            name="BPIT College"
            image={BPITCollegeLogo}
            footfall={6000}
          />
          <SliderCollegeCard
            position={7}
            name="IIT Palakkad"
            image={IITPalakkadLogo}
            footfall={3500}
          />
          <SliderCollegeCard
            position={8}
            name="Sri Venkateswara College"
            image={SriVenkateswaraCollegeLogo}
            footfall={18000}
          />
          <SliderCollegeCard
            position={9}
            name="IIT Patna"
            image={IITPatnaLogo}
            footfall={7000}
          />
        </div>
      </div>
    </section>
  );
}

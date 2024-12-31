import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import MagicButton from "@/components/ui/animatedButton";
import { FiDownload } from "react-icons/fi";
import { FlipWords } from "@/components/ui/flipWords";
import { TypewriterEffectSmooth } from "@/components/ui/typewriterEffect";

const Home = () => {
  const flipWords = [
    "Full stack developer",
    "Android developer",
    "AI/ ML Learner",
  ];

  const writterWords = [
    { text: "Hirumitha", className: "text-white" },
    { text: "\u00A0", className: "text-white" },
    { text: "Kuladewa", className: "text-white" },
  ];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full overflow-hidden relative">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hello I'm <br />
              <TypewriterEffectSmooth
                words={writterWords}
                className="flex text-center justify-center items-center xl:justify-normal"
              />
            </h1>
            <h3 className="mb-4 xl:mb-8 text-2xl font-semibold">
              <FlipWords words={flipWords} />
            </h3>
            <p className="max-w-[500px] xl:mb-5 mb-6 ml-2 text-white/80 font-medium">
              Creative problem-solver driven by innovation and passion,
              showcasing expertise through impactful projects and thoughtful
              design.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-4 xl:items-center">
              <a
                href="/assets/Hirumitha-CV.pdf"
                download="Hirumitha-Kuladewa-CV.pdf"
                className="xl:-mt-4"
              >
                <MagicButton
                  title="Download CV"
                  icon={<FiDownload />}
                  position="right"
                />
              </a>
              <div className="flex items-center gap-4 lg:mt-6 lg:ms-2">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 mt-5 xl:mt-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

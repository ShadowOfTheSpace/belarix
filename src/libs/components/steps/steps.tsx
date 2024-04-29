import { StepCard } from "./libs/components/components";
import stepsImage from "@assets/images/steps-image.png";

const Steps: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-[80px] xs:mt-[150px]">
      <h2 className="font-semibold text-[32px] text-bxm-white text-center xs:text-[52px] uppercase leading-[37px] xs:leading-[63px] tracking-lighter xs:tracking-light">
        From Thought to Finish
      </h2>
      <p className="mt-[16px] xs:mt-[20px] text-[18px] text-bxm-gray text-center xs:text-[20px] leading-[22px] xs:leading-[24px]">
        Share your idea, and we’ll handle the rest.
      </p>
      <p className="text-[18px] text-bxm-gray text-center xs:text-[20px] leading-[22px] xs:leading-[24px]">
        No idea? Let’s brainstorm together and make it real!
      </p>

      <div className="relative flex flex-col mt-[40px] xs:mt-[70px] w-screen xs:w-auto">
        <img
          src={stepsImage}
          alt="steps"
          className="xs:rounded-[10px] object-cover"
        />
        <div className="top-[62%] lg:top-auto lg:bottom-[20px] absolute lg:flex contents">
          <div className="flex xs:flex-row flex-col flex-wrap lg:flex-nowrap justify-center gap-[16px] xs:gap-[20px] -mt-[19%] lg:mt-0 px-[10px] xs:px-[20px]">
            <StepCard
              step="01"
              title="Pre-Production"
              description="We start by discussing your idea. Then we develop your concept or create a new one. Jointly we plan the storyline and its realization"
              className="relative s:max-w-[70%] lg:basis-1/3 bg-bxm-black/20 lg:bg-none backdrop-blur-[100px] grow"
            />
            <StepCard
              step="02"
              title="Production"
              description="We move on to technical realization with skilled professionals and specialized equipment"
              className="border-[#313131] lg:border-0 bg-bxm-card lg:bg-bxm-black/20 lg:backdrop-blur-[100px] border s:max-w-[70%] lg:basis-1/3 grow"
            />
            <StepCard
              step="03"
              title="Post-Production"
              description="Digesting collected materials, crafting your customized story and adding effects. Enjoy your video!"
              className="border-[#313131] lg:border-0 bg-bxm-card lg:bg-bxm-black/20 lg:backdrop-blur-[100px] border s:max-w-[70%] lg:basis-1/3 grow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Steps };

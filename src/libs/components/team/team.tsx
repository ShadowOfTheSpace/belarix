import { TeamCarousel } from "./libs/components/team-carousel/team-carousel/team-carousel";

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="flex flex-col md:items-center gap-y-[16px] xs:gap-y-[70px] mt-[80px] xs:mt-[150px] px-[10px] sm:px-[20px] md:px-[40px]"
    >
      <h2 className="w-full max-w-[1200px] font-semibold text-[25px] text-bxm-white xs:text-[46px] uppercase leading-[30px] xs:leading-[56px] tracking-lighter xs:tracking-light">
        Meet Our Team
      </h2>
      <div className="-ml-[10px] px-[10px] w-screen overflow-hidden xs:contents">
        <TeamCarousel />
      </div>
    </section>
  );
};

export { Team };

import { type TeamMember } from "../../types/types";

type Properties = {
  teamMember: TeamMember;
};

const TeamMemberPreview: React.FC<Properties> = ({ teamMember }) => {
  const { description, image, name, role } = teamMember;
  return (
    <div className="flex flex-col gap-y-[8px] xs:gap-y-[10px]">
      <img alt={name} className="rounded-[10px]" src={image} />
      <h4 className="text-bxm-white">{name}</h4>
      <p className="text-bxm-gray">{role}</p>
      <p className="text-[14px] text-bxm-gray xs:text-[16px] leading-[17px] xs:leading-[19px]">
        {description}
      </p>
    </div>
  );
};

export { TeamMemberPreview };

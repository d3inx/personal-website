import LatestProjects from "../components/LatestProjects";
import PersonalCard from "../components/PersonalCard";
import SkillExperience from "../components/SkillExperience";

export default function Main() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <PersonalCard />
      </div>
      <SkillExperience />
      <LatestProjects />
    </>
  );
}

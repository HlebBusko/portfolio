import github from "../../assets/github.svg";
import live from "../../assets/live.png";

function ProjectCard({
  projectImage,
  heading,
  description,
  techStack,
  gitHubLink,
  LiveLink,
}) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <img className="rounded-2xl " src={projectImage} alt="Project Image" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-[#F59E0B]">{heading}</h1>
        <h2 className="text-sm md:text-md">{description}</h2>
        <h2 className="font-semibold">{techStack}</h2>
        <div className="flex flex-col gap-2">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F59E0B] hover:scale-105 transition-all ease-in-out duration-300"
          >
            <div className="flex items-end gap-2">
              <img className="w-8" src={github} alt="GitHub" />
              <div className="text-lg">GitHub Repo</div>
            </div>
          </a>
          <a
            href={LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F59E0B] transition-all ease-in-out duration-300 hover:scale-105"
          >
            <div className="flex items-end gap-2">
              <img className="w-8" src={live} alt="Live Demo" />
              <div className="text-lg">Live Demo</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

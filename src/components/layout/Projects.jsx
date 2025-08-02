import swimZoneScreenshot from "../../assets/swimZoneScreenshot.png";
import ProjectCard from "../ui/ProjectCard.jsx";
import hlebSwimScreenshot from "../../assets/hlebSwimScreenshot.png";

function Projects() {
  return (
    <section id="projects" className="px-12 py-4">
      <h1 className="text-5xl font-semibold text-center text-[#F59E0B] pb-6">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          projectImage={swimZoneScreenshot}
          heading={`SwimZone - Dropshipping Site`}
          description={`A modern e-commerce app built for a fictional swimwear brand. Fully
        responsive, with dynamic routing, reusable components, and cart logic
        using React Context API.`}
          techStack={`Tech stack: React + Vite, Tailwind CSS, React Router, Context API, Git`}
          LiveLink={`https://swimzone-dropshipping.netlify.app/`}
          gitHubLink={"https://github.com/HlebBusko/DropShippingMain"}
        ></ProjectCard>
        <ProjectCard
          projectImage={hlebSwimScreenshot}
          heading={`HlebSwim - Swimming Coach`}
          description={`Swimming instructor page for personal business. Fully responsive, SPA with react-scroll layout routing, enroll form(FrontEnd only) and realtime-feedback custom calendar booking logic component.`}
          techStack={`Tech stack: React + Vite, Tailwind CSS, react-scroll, JSON Server, Git`}
          LiveLink={`https://hlebswim.netlify.app/`}
          gitHubLink={`https://github.com/HlebBusko/HlebSwim_webSite`}
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;

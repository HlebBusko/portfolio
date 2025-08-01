import mainPhoto from "../../assets/mainPhoto.png";
function AboutMe() {
  return (
    <section id="about" className="px-12 py-4">
      <h1 className="text-5xl font-bold text-center mb-6 text-[#F59E0B]">
        About me
      </h1>
      <div className="sm:flex gap-6">
        <div className="rounded-2xl hidden md:block overflow-hidden md:w-86">
          <img className="rounded-2xl" src={mainPhoto} alt="" />
        </div>
        <div className="flex flex-col gap-2 md:w-[70%]">
          <h2 className="lg:text-lg text-lg md:text-sm">
            I'm Hleb — a dedicated frontend developer in the making with a
            background in professional swimming and coaching. For years, I’ve
            teached people how to swim. Now, I’ve redirected that same
            discipline and focus into writing clean, maintainable code. I’ve
            built fully responsive React projects, developed reusable UI
            components, and handled state logic with care. My recent projects
            include a personal instructor site and a dropshipping storefront —
            both designed, coded, and deployed independently.
          </h2>
          <h2 className="lg:text-lg text-lg md:text-sm">
            I approach coding the same way I approach training: with
            consistency, problem-solving, and a drive to improve every day. My
            goal is to join a team where I can grow as a developer and
            contribute from day one.
          </h2>
          <h2 className="font-semibold text-lg mt-4">
            Tech Stack: HTML & CSS, Tailwind CSS, JS, ReactJS + Vite
          </h2>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import ButtonMain from "../components/ui/ButtonMain";
import mainPhotoCircle2 from "../assets/mainPhotoCircle2.JPG";
function Hero() {
  return (
    <section
      id="home"
      className="sm:pt-24 pb-8 pt-18 flex justify-center min-h-screen"
    >
      <div className="flex flex-col items-center lg:w-[50%] sm:w-[70%] px-4 w-full gap-4">
        <div className="w-66">
          <img
            className="rounded-[50%]"
            src={mainPhotoCircle2}
            alt="Main Photo"
          />
        </div>
        <h1 className="text-center text-4xl font-bold pb-2">
          I'm Hleb Busko, swimming coach and coding passionate based in Warsaw,
          Poland.
        </h1>
        <h2 className="text-center text-xl">
          I craft responsive, user-focused web interfaces using React,
          JavaScript, and Tailwind CSS. Currently transitioning from coaching to
          FrontEnd development.{" "}
        </h2>
        <div className="flex gap-8">
          <ButtonMain
            className={`rounded-4xl py-4 px-10 bg-[#F59E0B] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F59E0B] font-bold`}
          >
            Connect with me
          </ButtonMain>
          <ButtonMain
            className={`rounded-4xl py-4 px-10 hover:border-[#F59E0B]  hover:text-[#F59E0B] font-bold`}
          >
            My resume
          </ButtonMain>
        </div>
      </div>
    </section>
  );
}

export default Hero;

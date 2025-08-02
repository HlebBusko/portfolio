import { FaPhone, FaGithub, FaEnvelope } from "react-icons/fa";
import ContactLink from "../ui/ContactLink";

function Contact() {
  return (
    <section id="contact" className="px-12 py-4 flex flex-col gap-4">
      <h1 className="text-center text-5xl text-[#F59E0B] font-semibold">
        Contact me
      </h1>
      <p className="text-lg font-semibold">
        I am actively seeking junior Frontend developer opportunities. Please
        feel free to reach out via message or phone—I’m happy to discuss how I
        can contribute to your team. I’m available for contact during business
        hours or by appointment.
      </p>
      <div className="flex flex-col gap-4 ">
        <ContactLink
          icon={<FaGithub size={30} />}
          info={`My GitHub profile`}
          href={`https://github.com/HlebBusko`}
        />
        <ContactLink
          icon={<FaEnvelope size={28} />}
          info={`hleb.busko@gmail.com`}
          href={`mailto:hleb.busko@gmail.com`}
        />
        <ContactLink
          icon={<FaPhone size={25} />}
          info={`+48796746210`}
          href={`tel:+48796746210`}
        />
      </div>
    </section>
  );
}

export default Contact;

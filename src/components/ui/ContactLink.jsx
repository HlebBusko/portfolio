function ContactLink({ icon, info }) {
  return (
    <a
      className="flex gap-2 items-center hover:scale-105 transition-all ease-in-out duration-300 hover:text-[#F59E0B]"
      href="https://github.com/HlebBusko"
      target="_blank"
    >
      {icon} <div>{info}</div>
    </a>
  );
}

export default ContactLink;

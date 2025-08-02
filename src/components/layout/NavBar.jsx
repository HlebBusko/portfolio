import ButtonMain from "../ui/ButtonMain.jsx";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import NavLink from "../ui/NavLink.jsx";
import logo from "../../assets/logo3.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

function NavBar() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleUX(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDisplayed(false);
      }
    }
    document.addEventListener("click", handleUX);
    return () => {
      document.removeEventListener("click", handleUX);
    };
  }, []);

  function handleMenu() {
    setIsDisplayed((prev) => !prev);
  }

  const links = [
    { link: "Home", id: "home" },
    { link: "About me", id: "about" },
    { link: "Projects", id: "projects" },
  ];

  return (
    <div ref={dropDownRef}>
      <nav
        className={`flex h-18 w-full fixed top-0 left-0 right-0 lg:px-16 md:px-8 px-4 py-2 bg-[#0F0F0F] ${
          !isDisplayed ? "shadow" : ""
        } z-50`}
      >
        <div className="left-section mr-auto">
          <Link to="home" smooth={true} duration={300} offset={-100}>
            <img
              className="cursor-pointer w-auto h-14 hover:scale-110 transition-all duration-500 "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="middle-section flex">
          <ul className="lg:gap-5 gap-3 items-center h-full hidden sm:flex">
            {links.map((link) => (
              <NavLink
                key={link.id}
                link={link}
                className={
                  "h-full cursor-pointer hover:text-[#F59E0B] flex px-2 items-center rounded w-full transition-all duration-300 font-medium text-[#F1F1F1] whitespace-nowrap"
                }
                offset={-80}
                activeClass={
                  "underline decoration-2 text-[#F59E0B] decoration-[#F59E0B] underline-offset-20"
                }
              ></NavLink>
            ))}
          </ul>
        </div>
        <div className="right-section flex items-center ml-6 gap-3">
          <img
            className={`w-8 sm:hidden cursor-pointer ${
              !isDisplayed ? "block" : "hidden"
            }`}
            src={menu}
            alt="Open dropdown"
            onClick={handleMenu}
            role="button"
            tabIndex={0}
            aria-expanded={isDisplayed}
          />
          <img
            src={close}
            className={`w-8 ${isDisplayed ? "block" : "hidden"} cursor-pointer`}
            alt="Close dropdown"
            onClick={handleMenu}
          />
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="inline-block"
            spy={true}
            offset={-70}
          >
            <ButtonMain className="rounded hover:border-[#F59E0B] hover:text-[#F59E0B] font-medium shadow-lg py-1 text-[#F1F1F1] px-6">
              Contact Me
            </ButtonMain>
          </Link>
        </div>
      </nav>

      <ul
        className={`fixed top-18 ${
          isDisplayed ? "translate-y-0" : "-translate-y-60"
        }  w-full transition-all duration-700 ease-in-out z-40 shadow`}
      >
        {links.map((link) => (
          <NavLink
            key={link.id}
            link={link}
            className={
              "w-full flex align-center justify-center py-2 transition-all ease-in-out duration-400 bg-[#0F0F0F] text-[#F1F1F1] hover:text-[#F59E0B] hover:bg-main font-medium cursor-pointer"
            }
            offset={-80}
            activeClass={"!text-[#F59E0B]"}
            onClick={handleMenu}
          ></NavLink>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;

import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [offset, setOffset] = useState(-100);
  const [showSidebar, setShowSidebar] = useState(false);
  const trigger = useRef(null);
  const BUTTONS_NAV = [
    {
      path: "home",
      text: "Inicio",
    },
    {
      path: "companies",
      text: "Empresas",
    },
    {
      path: "services",
      text: "Servicios",
    },
    {
      path: "contact",
      text: "Contacto",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOffset(-105); // Ajuste para pantallas grandes
      } else {
        setOffset(-100); // Ajuste para pantallas pequeñas
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener("resize", handleResize);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between shadow-md items-center bg-white px-5 md:px-10 min-[870px]:px-20 py-2">
      <ScrollLink
        to={"home"}
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
        onSetActive={handleSetActive}
      >
        <img
          src="/seguros-icon.svg"
          alt="icon"
          className="h-14 min-[400px]:h-20 cursor-pointer"
          onClick={() => setActiveSection("home")}
        />
      </ScrollLink>
      <MenuButton
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        trigger={trigger}
      />
      <Menu
        trigger={trigger}
        showSidebar={showSidebar}
        buttons={BUTTONS_NAV}
        activeSection={activeSection}
        handleSetActive={handleSetActive}
        setShowSidebar={setShowSidebar}
      />
      <section className="hidden md:flex flex-row gap-10">
        {BUTTONS_NAV.map(({ path, text }, i) => (
          <ScrollLink
            key={i}
            to={path}
            smooth={true}
            duration={500}
            spy={true}
            offset={offset}
            onSetActive={handleSetActive}
            className={`border cursor-pointer py-1 px-4 rounded-full border-[#F90607] transition-all ${
              activeSection === path
                ? "bg-[#F90607] text-white"
                : "hover:border-transparent hover:bg-[#F90607] hover:text-white"
            }`}
          >
            {text}
          </ScrollLink>
        ))}
      </section>
    </header>
  );
};

export default Header;

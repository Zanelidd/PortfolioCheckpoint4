import { useContext, useState } from "react";
import NavBar from "./NavBar";
import style from "./styles/Header.module.css";
import Hamburger from "hamburger-react";
import BurgerNavBar from "./BurgerNavBar";
import { DarkModeContext } from "./Context/DarkModeProvider";

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={
        darkMode ? style.dark_header_container : style.header_container
      }
    >
      <div className={style.navBarContainer}>
        <NavBar />
      </div>
      <div className={style.burger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <BurgerNavBar isOpen={isOpen} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Header;

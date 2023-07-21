import { NavLink } from "react-router-dom";
import style from "./styles/Header.module.css";
import { DarkModeContext } from "./Context/DarkModeProvider";
import { useContext } from "react";

const NavBar = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <nav className={style.navBar}>
      <NavLink
        to="/home"
        className={darkMode ? style.darklinkNavBar : style.linkNavBar}
      >
        Accueil
      </NavLink>
      <NavLink to="/projects" className={darkMode ? style.darklinkNavBar : style.linkNavBar}>
        Projets
      </NavLink>
      <NavLink to="/contact" className={darkMode ? style.darklinkNavBar : style.linkNavBar}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;

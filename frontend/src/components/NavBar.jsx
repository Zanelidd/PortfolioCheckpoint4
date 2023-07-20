import { NavLink } from "react-router-dom";
import style from "./styles/Header.module.css";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <NavLink to="/home" className={style.linkNavBar}>
        Acceuil
      </NavLink>
      <NavLink to="/about" className={style.linkNavBar}>
        A propos
      </NavLink>
      <NavLink to="/projects" className={style.linkNavBar}>
        Projets
      </NavLink>
      <NavLink to="/contact" className={style.linkNavBar}>
        Contactez moi
      </NavLink>
    </nav>
  );
};

export default NavBar;

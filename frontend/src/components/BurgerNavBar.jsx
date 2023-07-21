import { NavLink } from "react-router-dom";
import style from "./styles/BugerNavBar.module.css";
import Hamburger from "hamburger-react";
import PropTypes from "prop-types";
import { DarkModeContext } from "./Context/DarkModeProvider";
import { useContext } from "react";

const BurgerNavBar = ({ isOpen, setOpen }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <nav className={style.burger_navBar}>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color={darkMode ? " #FFFFFF" : "#000"}
      />

      <NavLink
        to="/home"
        className={style.linkNavBar}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        
        Accueil
      </NavLink>
      <NavLink
        to="/projects"
        className={style.linkNavBar}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Projets
      </NavLink>
      <NavLink
        to="/contact"
        className={style.linkNavBar}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Contact
      </NavLink>
    </nav>
  );
};

BurgerNavBar.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
};

export default BurgerNavBar;

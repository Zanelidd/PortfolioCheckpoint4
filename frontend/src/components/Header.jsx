import { useState } from "react";
import NavBar from "./NavBar";
import style from "./styles/Header.module.css";
import Hamburger from "hamburger-react";
import BurgerNavBar from "./BurgerNavBar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={style.header_container}>
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

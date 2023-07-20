import NavBar from "./NavBar";
import style from "./styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.navBarContainer}>
      <h1 className={style.titre}>Header</h1>
      <NavBar />
    </div>
  );
};

export default Header;

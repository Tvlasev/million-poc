import logo from "../../images/million-logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header_logo__container">
        <img className="header_logo" alt="million-logo" src={logo} />
        <h1 className="header_title">Million</h1>
      </div>
      <div className="header_menu__container">
        <a href="/">About</a>
        <a href="/">Whitepaper</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Header;
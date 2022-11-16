import { Outlet, Link } from "react-router-dom";
import logo from "../../../logo.svg";

const Header = () => {
  return (
    <>
    <header className="header">
      <nav className="header-navbar">
        <ul className="header-list">
        <li>
          <Link to="/"><img alt="tourisme nouvelle calédonie" src={logo} width="128" /></Link>
        </li>
          <li>
            <Link to="/" className="header-link">Accueil</Link>
          </li>
          <li>
            <Link to="/spots" className="header-link">Spots</Link>
          </li>
          <li>
            <Link to="/update" className="header-link">Modifier la liste</Link>
          </li>
          <li>
            <Link to="/login" className="header-link">Connexion</Link>
          </li>
        </ul>
      </nav>
    </header>
      <Outlet />
    </>
  )
};

export default Header;

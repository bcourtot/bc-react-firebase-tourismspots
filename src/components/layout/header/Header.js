import { Outlet, Link } from "react-router-dom";
import logo from "../../../logo.png";

const Header = () =>
{
  return (
    <>
      <header className="header">
        <nav className="header-navbar">
          <ul className="header-list">
            <li>
              <Link to="/"><img alt="tourisme nouvelle calédonie" src={logo} width="64" /></Link>
            </li>
            <li>
              <Link to="/" className="header-link">Accueil</Link>
            </li>
            <li>
              <Link to="/spots" className="header-link">Spots</Link>
            </li>
            <li>
              <Link to="/create" className="header-link">Ajouter un spot</Link>
            </li>
            <li>
              <Link to="/update" className="header-link">Modifier un spot</Link>
            </li>
            <li>
              <Link to="" className="header-link">Créer un compte</Link>
            </li>
            <li>
              <Link to="" className="header-link">Se connecter</Link>
            </li>
            <li>
              <Link to="" className="header-link">Se déconnecter</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from "../../../logo.png";
import firebase from 'firebase/app';
import 'firebase/auth';



const Header = () =>
{
  const [ user, setUser ] = useState(null);

  useEffect(() =>
  {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user)
    {
      if (user)
      {
        setUser(user);
      } else
      {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
              <li>
                {user && <Link to="/create" className="header-link">Ajouter un spot</Link>}
              </li>
              {!user && <Link to="/register" className="header-link">Créer un compte</Link>}
            </li>
            <li>
              {!user && <Link to="/login" className="header-link">Se connecter</Link>}
            </li>
            <li>
              {user && <Link onClick={() => firebase.auth().signOut()} className="header-link">Se déconnecter</Link>}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Header;

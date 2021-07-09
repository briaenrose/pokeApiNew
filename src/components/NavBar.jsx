import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  let logoURl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <header>
      <div />
      <div className="header-pokeapiLogo">
        <img src={logoURl} alt="PokeApi-Logo" className="navbar-pokeapilogo" />
      </div>
      <nav className="navigationBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>{" "}
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

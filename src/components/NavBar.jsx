import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  let logoURl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <header>
      <nav className="navigationBar">
        <div />
        <div>
          <Link to="/">
            <img
              src={logoURl}
              alt="PokeApi-Logo"
              className="navbar-pokeapilogo"
            />
          </Link>
        </div>
        <div>
          <ul>
            <li></li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>{" "}
            </li>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

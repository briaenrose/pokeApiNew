import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;

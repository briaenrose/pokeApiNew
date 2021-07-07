import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Games from "./components/pages/Games";
import Location from "./components/pages/Location";
import Pokemons from "./components/pages/Pokemons";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/games" component={Games} />
        <Route path="/location" component={Location} />
        <Route path="/pokemons" component={Pokemons} />
      </switch>
      <div className="container">
        <nav className="navigationBar">
          <ul>
            <li>
              <a href="/games">Games</a>
            </li>
            <li>
              <a href="/locations">Locations</a>
            </li>
            <li>
              <a href="/pokemons">Pokemons</a>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;

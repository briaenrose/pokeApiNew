import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Games from "./components/Pages/Games";
import Locations from "./components/Pages/Locations";
import Pokemons from "./components/Pages/Pokemons";
import GameDetail from "./components/Pages/GameDetail";
import LocationDetail from "./components/Pages/LocationDetail";
import PokemonDetail from "./components/Pages/PokemonDetail";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { InfoProvider } from "./Context/Context";

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <NavBar />
        <SearchBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/games" component={Games} exact />
          <Route path="/locations" component={Locations} exact />
          <Route path="/pokemons" component={Pokemons} exact />
          <Route path="/games/:id" component={GameDetail} exact />
          <Route path="/locations/:id" component={LocationDetail} exact />
          <Route path="/pokemons/:id" component={PokemonDetail} exact />
        </Switch>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;

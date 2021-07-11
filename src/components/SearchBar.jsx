import React from "react";
import { searchGame, searchLocation, searchPokemon } from "../api";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  //const [game] = useState();
  //const [location, setLocation] = useState();
  //const [pokemon, setPokemon] = useState();
  const onChange = (evt) => {
    setSearch(evt.target.value);
  };

  const onClick = async (evt) => {
    const pokedata = await searchPokemon(search);
    const locatdata = await searchLocation(search);
    const gamedata = await searchGame(search);
    console.log(pokedata);
    console.log(locatdata);
    console.log(gamedata);
  };
  return (
    <div className="searchBar-wrapper">
      <div className="searchBar">
        <input placeholder="I'm looking for..." onChange={onChange} />
      </div>
      <div>
        <button className="button" onClick={onClick}>
          <p>Search</p>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

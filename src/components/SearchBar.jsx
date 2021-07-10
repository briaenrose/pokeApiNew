import React from "react";
import { searchGame, searchLocation, searchPokemon } from "../api";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");

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
      <div className="searchBar-button">
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

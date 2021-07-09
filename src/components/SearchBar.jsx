import React from "react";
import { searchGame, searchItem, searchLocation, searchPokemon } from "../api";
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
    <div>
      <div>
        <input placeholder="I'm looking for..." onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

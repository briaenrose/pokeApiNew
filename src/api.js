//import Context from "/src/Context";

export const Search = async (param, id) => {
  try {
    let url = `http://pokeapi.co/api/v2/${param}/${id}/?`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const searchGame = (id) => {
  Search("version", id);
};

export const searchLocation = (id) => {
  Search("location", id);
};

export const searchPokemon = (id) => {
  Search("pokemon", id);
};

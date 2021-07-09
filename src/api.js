//import Context from "/src/Context";

export const searchPokemon = async (id) => {
  try {
    let url = `http://pokeapi.co/api/v2/pokemon/${id}/?`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return <p>Oops! Sorry, error here...</p>;
  }
};

export const searchGame = async (id) => {
  try {
    let url = `http://pokeapi.co/api/v2/version/${id}/?`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return <p>Oops! Sorry, error here...</p>;
  }
};

export const searchLocation = async (id) => {
  try {
    let url = `http://pokeapi.co/api/v2/location/${id}/?`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return <p>Oops! Sorry, error here...</p>;
  }
};

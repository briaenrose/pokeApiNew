const Pokemons = () => <h1>Pokemons</h1>;
const getPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error("Oops! Something went wrong");
  }
};

export { getPokemon };
export default Pokemons;

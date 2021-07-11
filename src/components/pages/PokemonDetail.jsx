import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

const PokemonDetail = () => {
  //const { info, toggle } = useContext(GetContext);
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getPokemon = async (
    url = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10`
  ) => {
    try {
      const RES = await fetch(url);
      const data = await RES.json();
      setData(data);
      console.log(data);
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePrevious = () => {
    const url = data.previous;
    getPokemon(url);
  };

  const handleNext = () => {
    const url = data.next;
    getPokemon(url);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <h2>Pokemons</h2>
      <ul>
        {data && data.results.length > 0
          ? data.results.map((item) => {
              return <li>{item.name}</li>;
            })
          : null}
      </ul>
      <Pagination handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  );
};

export default PokemonDetail;

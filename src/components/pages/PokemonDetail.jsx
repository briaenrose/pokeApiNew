import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { GetContext } from "../../Context/Context";

const PokemonDetail = () => {
  const { info, toggle } = useContext(GetContext);
  const { id } = useParams();
  console.log(id);
  const getPokemon = async () => {
    try {
      const RES = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10`
      );
      const data = await RES.json();
      toggle(data.results);

      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const info2 = info[0];
  return (
    <>
      <h2>Pokemons</h2>
      <ul>
        {info.length > 0
          ? info.map((item) => {
              return <li>{item.name}</li>;
            })
          : null}
      </ul>
    </>
  );
};

export default PokemonDetail;

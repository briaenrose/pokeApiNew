import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

const GameDetail = () => {
  //const { info, toggle } = useContext(GetContext);
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getGame = async (
    url = `https://pokeapi.co/api/v2/version/?limit=10&offset=10`
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
    getGame(url);
  };

  const handleNext = () => {
    const url = data.next;
    getGame(url);
  };
  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Games</h2>
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

export default GameDetail;
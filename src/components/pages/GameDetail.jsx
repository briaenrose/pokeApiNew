import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

const GameDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getGame = async (
    url = `https://pokeapi.co/api/v2/version/?limit=10&offset=10`
  ) => {
    try {
      const response = await fetch(url);
      const info = await response.json();
      setData(info);
      //const dataurl = info.results.counter;
      //console.log(dataurl);
      console.log(info);
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
  }, []);

  return (
    <>
      <div>
        <h2>Games</h2>
        <div>
          {data && data.results.length > 0
            ? data.results.map((item) => {
                return (
                  <ul>
                    <li className="Card-grid">
                      <ul className="Card-grid">
                        <li>
                          <h3>{item.name}</h3>
                        </li>
                        <li>{item.url}</li>
                      </ul>
                    </li>
                  </ul>
                );
              })
            : null}
        </div>
      </div>

      <Pagination handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  );
};

export default GameDetail;

/*
const GamesList = (props) => {
  return (
    <>
      <ul className="game-grid">
        <li className="game-content">1</li>
        <li className="game-content">2</li>
        <li className="game-content">3</li>
        <li className="game-content">4</li>
        <li className="game-content">5</li>
        <li className="game-content">6</li>
        <li className="game-content">7</li>
        <li className="game-content">8</li>
        <li className="game-content">9</li>
        <li className="game-content">10</li>
      </ul>
    </>
  );
};

export default GamesList
*/

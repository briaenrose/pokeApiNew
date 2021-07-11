import GameDetail from "./GameDetail";
const Games = () => {
  return <GameDetail />;
};

export default Games;

/*
import { getGames } from "../../api";
import { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState([]);
  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGames(data.results);
    } catch (err) {}
  };
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <h2>Games</h2>
      <Games games={games} />
    </div>
  );
  
  const handlePrevious = () => {
    const url = data.previous;
    getGame(url);
  };

  const handleNext = () => {
    const url = data.next;
    getGame(url);
  }
};
export default Games;
*/

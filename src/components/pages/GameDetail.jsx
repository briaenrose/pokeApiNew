import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { GetContext } from "../../Context/Context";

const GameDetail = () => {
  const { info, toggle } = useContext(GetContext);
  const { version } = useParams();
  console.log(version);
  const getGame = async () => {
    try {
      const RES = await fetch(
        `https://pokeapi.co/api/v2/version-group/?limit=10&offset=10`
      );
      const data = await RES.json();
      toggle(data.results);

      console.log(info);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const info2 = info[0];
  return (
    <>
      <h2>Games</h2>
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

export default GameDetail;

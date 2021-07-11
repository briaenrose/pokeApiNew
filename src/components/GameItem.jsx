import React, { useParams } from "react-router-dom";
import { GetContext } from "../../src/Context/Context";
import { useContext } from "react";
import { useEffect } from "react";

const GameItem = () => {
  const { info, toggle } = useContext(GetContext);
  const { id } = useParams();
  console.log(id);
  const getGame = async (id) => {
    try {
      const RES = await fetch(`https://pokeapi.co/api/v2/version/?${id}`);
      const data = await RES.json();
      toggle(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGame(id);
  }, []);

  const info2 = info[0];

  return (
    <>
      <div className="row-container">
        <h2>{info2.id}</h2>
        <ul>
          <li>Names: {info2.names}</li>
          <li>VersionGroup: {info2.version_group}</li>
        </ul>
      </div>
    </>
  );
};

export default GameItem;

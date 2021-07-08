import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { GetContext } from "../../Context/Context";

const LocationDetail = () => {
  const { info, toggle } = useContext(GetContext);
  const { id } = useParams();
  console.log(id);
  const getLocation = async () => {
    try {
      const RES = await fetch(
        `https://pokeapi.co/api/v2/location/?limit=10&offset=10`
      );
      const data = await RES.json();
      toggle(data.results);

      console.log(info);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const info2 = info[0];
  return (
    <>
      <h2>Locations</h2>
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

export default LocationDetail;

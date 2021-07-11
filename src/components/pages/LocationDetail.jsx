import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

const LocationDetail = () => {
  //const { info, toggle } = useContext(GetContext);
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getLocation = async (
    url = `https://pokeapi.co/api/v2/location/?limit=10&offset=10`
  ) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePrevious = () => {
    const url = data.previous;
    getLocation(url);
  };

  const handleNext = () => {
    const url = data.next;
    getLocation(url);
  };
  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h2>Locations</h2>
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

export default LocationDetail;


export const getDetail = async (id) => {
    try {
      let url = `https://pokeapi.co/api/v2/version/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
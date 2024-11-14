import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Types = () => {
  const { name } = useParams();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const response = await axios.get(`https://pokeapi.co/api/v2/type`);

      setTypes(response.data.results);
    }
    if (!types.length) {
      fetchTypes();
    }
  }, []);
  console.log(types);
  return (
    <>
      {types.map((type) => (
        <p>{type.name}</p>
      ))}
    </>
  );
};

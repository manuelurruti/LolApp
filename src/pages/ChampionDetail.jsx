import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChampionDetail() {
  const { championName } = useParams();
  const [championData, setChampionData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/lol-api/cdn/11.4.1/data/es_AR/champion/${championName}.json`)
      console.log(response);
      setChampionData(response.data.data[championName]);
    }

    fetchData();
  }, [championName]);

  if (!championData) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h2>{championData.name}</h2>
      <p>{championData.title}</p>
      {/* Mostrar otros datos del campeón */}
    </div>
  );
}

export default ChampionDetail;
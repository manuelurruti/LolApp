import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'animate.css/animate.min.css';
import "./Card.css"

export const Detail = () => {
  const { ChampionName } = useParams();
  const [championData, setChampionData] = useState('');
  const [passiveImage, setPassiveImage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_AR/champion/${ChampionName}.json`);

        setChampionData(response.data.data[ChampionName]);
        const passiveImageData = championData.passive.image.full;
        const passiveImageUrl = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/passive/${passiveImageData}`;




        setPassiveImage(passiveImageUrl);
      } catch (error) {
        console.error(error);

      }
    }

    fetchData();
  }, [ChampionName]);





  if (!championData) {
    return <div>loading</div>;
  }

  return (
    <div className="Card">

      <p className='fontSize'>{championData.name}</p>

      <img
        src={passiveImage}
        alt={`${ChampionName} passive`}
      />





      <p className="fontSize">{championData.blurb}</p>





      {/* Mostrar otros datos del campeón */}
    </div >

  );
}

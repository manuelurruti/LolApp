import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'animate.css/animate.min.css';
import "./Card.css"

export const Detail = () => {
  const { ChampionName } = useParams();
  const [championData, setChampionData] = useState(null);
  const [passiveImage, setPassiveImage] = useState("");
  const [powerImage, setPowerImage] = useState("")
  const [powerImage1, setPowerImage1] = useState("")
  const [powerImage2, setPowerImage2] = useState("")
  const [powerImage3, setPowerImage3] = useState("")

  let passiveImageUrl = "";
  let powerImageUlr = ""
  let powerImageUlr1 = ""
  let powerImageUlr2 = ""
  let powerImageUlr3 = ""
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_AR/champion/${ChampionName}.json`);
        console.log(response);
        setChampionData(response.data.data[ChampionName]);
        passiveImageUrl = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/passive/${response.data.data[ChampionName].passive.image.full}`;
        setPassiveImage(passiveImageUrl);
        powerImageUlr = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${response.data.data[ChampionName].spells[0].image.full}`
        setPowerImage(powerImageUlr)
        powerImageUlr1 = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${response.data.data[ChampionName].spells[1].image.full}`
        setPowerImage1(powerImageUlr1)
        powerImageUlr2 = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${response.data.data[ChampionName].spells[2].image.full}`
        setPowerImage2(powerImageUlr2)
        powerImageUlr3 = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${response.data.data[ChampionName].spells[3].image.full}`
        setPowerImage3(powerImageUlr3)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [ChampionName]);

  if (!championData) {
    return <div>loading</div>;
  }



  return (
    <div className="Card d-flex justify-content-center align-items-center flex-column">
      <p className='fontSizeXX d-flex justify-content-center fuentex'>{championData.name}</p>
      <div className="d-flex flex-row justify-content-center align-items-center divcard">
        <img className="d-flex justify-content-center image" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_1.jpg`} alt={`${championData.name} loading screen`} />
        <div className="d-flex flex-column">
          <h2 className="fontSizeX d-flex justify-content-center">Poderes:</h2>
          <div className="d-flex flex-row posicionando">
            <img
              className=" imagesx"
              src={passiveImage}
              alt={`${ChampionName} passive`}
            />

            <img className=" imagesx"
              src={powerImage}
              alt={`${ChampionName} passive`}
            />
            <img className=" imagesx"
              src={powerImage1}
              alt={`${ChampionName} passive`}
            />
            <img className=" imagesx"
              src={powerImage2}
              alt={`${ChampionName} passive`}
            />
            <img className="imagesx"
              src={powerImage3}
              alt={`${ChampionName} passive`}
            />
          </div>
          <h2 className="fontSizeX d-flex justify-content-center">Historia:</h2>

          <p className="fontSizeX ">{championData.lore}</p>
        </div>
      </div>
    </div>
  );
};


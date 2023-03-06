import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import "./Card.css"
import 'animate.css/animate.min.css';




function Champions() {
  const [champions, setChampions] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_AR/champion.json`);
        const championsData = Object.values(response.data.data);
        setChampions(championsData);
      } catch (error) {
        console.error(error);
        setChampions([]); // Limpiamos el estado en caso de error
      }
    }

    fetchData();
  }, []);



  useEffect(() => {
    const fetchDatax = async () => {
      try {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_AR/champion/${query}.json`);
        const data = await response.json();
        const championsData = Object.values(data.data);
        setChampions(championsData);
      } catch (error) {
        console.error(error)
      }
    }
    fetchDatax()
  }, [query]);


  const filteredChampions = champions.filter(champion =>
    champion.name.toLowerCase().includes(query.toLowerCase())
  );




  return (
    <div>
      <div className='asdasd'>
        <input type="text" onChange={event => setQuery(event.target.value)} value={query} placeholder="Busca tu campeon!" />
      </div>


      <div className='d-flex justify-content-center flex-wrap m-4 align-items-center animate__animated animate__slideInRight'>

        {
          filteredChampions.map(champion => (

            <div key={champion.id} champion={champion} className="m-4 borderbox">
              <Link to={`/champion/${champion.name}`}> <img className="d-flex justify-content-center image" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_1.jpg`} alt={`${champion.name} loading screen`} /></Link>
              <div className='d-flex justify-content-center flex-column align-items-center fonche'>
                <p className='fontSize'>{champion.name}</p>

                <p className='fontSize'>{champion.title}</p>
                <p className='fontSize'>{champion.tags[0]}</p>
              </div>
            </div>

          ))
        }

      </div>
    </div >
  );
}

export default Champions;
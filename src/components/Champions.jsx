import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Card.css"
import WOW from 'wowjs';
import 'animate.css/animate.min.css';




function Champions() {
  const [champions, setChampions] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_AR/champion.json`)
          .then(res => {
            const championsData = Object.values(res.data.data);
            setChampions(championsData);
          })
      } catch (error) {
        console.error(error)
      }

    }

    fetchData()
  }, [])


  useEffect(() => {
    const fetchDatax = async () => {
      try {

        await axios.get(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_AR/champion/${query}.json`)
          .then(res => {
            const championsData = Object.values(res.data.data);
            setChampions(championsData);

          })
      } catch (error) {
        console.error(error)
      }
    }


    fetchDatax()
  }, [query])





  return (
    <div>
      <form method="GET" className='asd'>
        <input type="text" onChange={event => setQuery(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase())} value={query} />

      </form>

      <div className='d-flex justify-content-center flex-wrap m-4 align-items-center animate__animated animate__slideInRight'>
        {champions.map(champion => (
          <div key={champion.id} champion={champion} className="m-4 borderbox">
            <img className="d-flex justify-content-center image" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_1.jpg`} alt={`${champion.name} loading screen`} />
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
import React, { useState, useEffect } from "react"
import axios from "axios"
import Stars from "./components/Stars"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import Spinner from 'react-bootstrap/Spinner'

import "./App.scss"

const swapi = axios.create({
  baseURL: "https://swapi.dev/api/"
});

function App() {
  const [character, setCharacter] = useState([])
  const [vehicle, setVehicles] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchCharacterData()
  }, []);

  const fetchCharacterData = async () => {
    try {
      setIsLoading(true);
      let characterData = await swapi.get("/people/")
      setCharacter(characterData.data.results)
      //let vehicleData = await swapi.get(characterData.data.vehicles[0])
      //setVehicles(await vehicleData.data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <Stars />
      <Navbar />
      {isLoading ? (
        <div class="spinner"><Spinner animation="grow" variant="warning" /></div>
      ) : (
      <div className="cards">
        {character.map((item, i) => <Cards key={i} item={item}/>)}
      </div>
      )}
    </>
  );
}

export default App;

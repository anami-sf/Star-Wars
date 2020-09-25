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
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("initialCharacterData")) || [])
  const [vehicle, setVehicles] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [pageNum, setPageNum] = useState('people/?page=1')
  const [previous, setPrevious] = useState(null)
  const [next, setNext] = useState('people/?page=2')
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    fetchCharacterData()
  }, [pageNum]);

  const fetchCharacterData = async () => {
    if ((initialLoad && characters.length === 0) || !initialLoad) {
      try {
        setIsLoading(true);
        let characterData = await swapi.get(pageNum)
        localStorage.setItem("initialCharacterData", JSON.stringify(characterData.data.results))
        setCharacters(characterData.data.results)
        setPrevious(characterData.data.previous)
        setNext(characterData.data.next)
        //let vehicleData = await swapi.get(characterData.data.vehicles[0])
        //setVehicles(await vehicleData.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    setInitialLoad(false)
  };

  const handlePrevious = () => {
    setPageNum(previous)
  }

  const handleNext = () => {
    setPageNum(next)
  }

  return (
    <>
      <Stars />
      <Navbar />
      {isLoading ? (
        <div className="spinner"><Spinner animation="grow" variant="warning" /></div>
      ) : (
          <div className="cards">
            {characters.map((character, i) => <Cards key={i} character={character}/>)}
          </div>
        )}
      <button className="prev" onClick={handlePrevious} style={{ display: previous && !isLoading ? "block" : "none" }}>Previous</button>
      <button className="next" onClick={handleNext} style={{ display: next && !isLoading ? "block" : "none" }}>Next</button>
    </>
  );
}

export default App;

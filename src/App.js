import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const swapi = axios.create({
  baseURL: "https://swapi.dev/api/"
});

function App() {
  const [character, setCharacter] = useState({});
  const [vehicle, setVehicles] = useState({});

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      let characterData = await swapi.get("/people/1/");
      setCharacter(characterData.data);
      let vehicleData = await swapi.get(characterData.data.vehicles[0]);
      setVehicles(await vehicleData.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>{character.name}</div>
      <div>{vehicle.name}</div>
    </>
  );
}

export default App;

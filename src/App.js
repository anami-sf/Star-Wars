import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState({});
  const [vehicle, setVehicles] = useState({});

  async function fetchCharacterData() {
    let characterData = await fetch("https://swapi.dev/api/people/1/");
    characterData = await characterData.json();
    setCharacter(characterData);
    let vehicleData = await fetch(characterData.vehicles[0]);
    setVehicles(await vehicleData.json());
  }

  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <>
      <div>{character.name}</div>
      <div>{vehicle.name}</div>
    </>
  );
}

export default App;

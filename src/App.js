import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState({});
  const [vehicles, setVehicles] = useState({});

  async function fetchCharacterData() {
    const characterData = await fetch("https://swapi.dev/api/people/1/");
    const vehicleData = await fetch(characterData.vehicles);
    setCharacter(await characterData.json());
    const car = await vehicleData.json();
    console.log(car);
    // setVehicles(await vehicleData.json());
  }

  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <>
      <div>{character.name}</div>
      <div>{vehicles.name}</div>
    </>
  );
}

export default App;

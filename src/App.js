import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState({});
  const [vehicles, setVehicles] = useState({});

  async function fetchLoop(characterData) {
    var i = 0;

    while (vehicles[i]) {
      let vehicle = await fetch(characterData.vehicles[i]);
      setVehicles(await vehicles.push(vehicle.json()));
      i++;
    }
  }

  async function fetchCharacterData() {
    let characterData = await fetch("https://swapi.dev/api/people/1/");
    characterData = await characterData.json();
    setCharacter(await characterData);
    fetchLoop(characterData);
    // let vehicleData = await fetch(characterData.vehicles[0]);
    // setVehicles(await vehicleData.json());
  }

  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <>
      <div>{character.name}</div>
      <div>{vehicles}</div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Particles from "react-particles-js";

import "./App.scss";

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
      <div style={{ backgroundColor: "#000000", position: "absolute", zIndex: "-1", width: "100%", height: "100%" }}>
        <Particles
          params={{
            particles: {
              color: "rgba(255, 255, 0, 1)",
              number: {
                value: 60,
                density: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true
              },
              move: {
                direction: "top",
                out_mode: "out",
                straight: "true"
              },
              line_linked: {
                enable: false
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "remove"
                }
              },
              modes: {
                remove: {
                  particles_nb: 10
                }
              }
            }
          }}
        />
      </div>
      <nav class="nav">STAR WARS</nav>
      <div>{character.name}</div>
      <div>{vehicle.name}</div>
    </>
  );
}

export default App;

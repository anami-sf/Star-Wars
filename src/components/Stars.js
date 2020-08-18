import React from "react"
import Particles from "react-particles-js"

function Stars() {
      return (
          <div class = 'particles'>
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
  )
}

export default Stars
import React from "react"

function Cards({character}) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                        <div className="name">{character.name}</div>
                        <div className="image">
                            <img src="https://sm.ign.com/ign_za/gallery/a/all-the-st/all-the-star-wars-characters-creatures-and-droids-youll-find_ex38.jpg"></img>
                        </div>
                        <div className="info">
                            <div class="attributes">
                                <div>Gender
                            <br />
                                    {character.gender}
                                </div>
                                <div>Height
                            <br />
                                    {character.height}
                                </div>
                                <div>Mass
                            <br />
                                    {character.mass}
                                </div>
                            </div>
                            <div>Skin: {character.skin_color}</div>
                            <div>Eyes: {character.eye_color}</div>
                            <div>Birth Year: {character.birth_year}</div>
                        </div>
                </div>
                <div className="flip-card-back">
                    <p>Back of card - vehicles/planets?</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
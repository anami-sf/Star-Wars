import React from "react"

function Cards(props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                        <div className="name">{props.item.name}</div>
                        <div className="image">
                            <img src="https://sm.ign.com/ign_za/gallery/a/all-the-st/all-the-star-wars-characters-creatures-and-droids-youll-find_ex38.jpg"></img>
                        </div>
                        <div className="info">
                            <div class="attributes">
                                <div>Gender
                            <br />
                                    {props.item.gender}
                                </div>
                                <div>Height
                            <br />
                                    {props.item.height}
                                </div>
                                <div>Mass
                            <br />
                                    {props.item.mass}
                                </div>
                            </div>
                            <div>Skin: {props.item.skin_color}</div>
                            <div>Eyes: {props.item.eye_color}</div>
                            <div>Birth Year: {props.item.birth_year}</div>
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
import React from "react"

import Card from "./TravelCards"

import vacationSpots from "./travel_spots"

function App(){
    const cardComponits = vacationSpots.map(card => <Card place={card.place} price={card.price} timeToGo={card.timeToGo} />)
    return (
        <div>
            {cardComponits}
        </div>
    )
}

export default App
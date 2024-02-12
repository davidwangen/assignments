import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import Platform from "./Platform"
import Description from "./Description"
import axios, { AxiosHeaders } from "axios";

//code to make stuff work

/*
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0c70a2812msh52e30dfd49e6d95p18691fjsnd5978247a2d3',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error); 
}

*/



export default function App() {
  


  const [gameListData, setgameListData] = React.useState({})

  React.useEffect(() => {
    async function getGameListData() {
        const res = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
          method: 'GET',
          headers:{
            'X-RapidAPI-Key': 'e0c70a2812msh52e30dfd49e6d95p18691fjsnd5978247a2d3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
        const data = await res.json()
        setgameListData(data)
    }
    getGameListData()
}, [])

console.log(gameListData)

  return (

    <Router>
      Test Time oki dokie
      
      {/* nav bar with links*/}
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  )
}

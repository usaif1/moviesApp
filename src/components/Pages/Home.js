import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import alita from "../../assets/posters/alita.jpg"
import avengersEndgame from "../../assets/posters/avengers-endgame.jpg"
import avengersInfinityWar from "../../assets/posters/avengers-infinity-war.jpg"
import interstellar from "../../assets/posters/interstellar.jpg"
import joker from "../../assets/posters/joker.jpg"
import justiceLeague from "../../assets/posters/justice-league.jpg"

const Home = () => {
	return (
		<div className="container">
			<h1>All your favourite movies in one place</h1>
			<Carousel style={{ height: "50%", width: "100%" }}>
				<div>
					<img src={alita} alt="first-pic" />
				</div>
				<div>
					<img src={avengersEndgame} alt="second-pic" />
				</div>
				<div>
					<img src={avengersInfinityWar} alt="first-pic" />
				</div>
				<div>
					<img src={interstellar} alt="second-pic" />
				</div>
				<div>
					<img src={joker} alt="first-pic" />
				</div>
				<div>
					<img src={justiceLeague} alt="second-pic" />
				</div>
			</Carousel>
		</div>
	)
}

export default Home

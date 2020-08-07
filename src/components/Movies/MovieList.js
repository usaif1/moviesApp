//dependencies
import React, { Component } from "react"
import axios from "axios"

//imports
import MovieDetails from "./MovieDetails"

class GamesList extends Component {
	state = {
		movies: [],
	}

	async componentDidMount() {
		const response = await axios.get("https://yts.mx/api/v2/list_movies.json", {
			params: {
				limit: 10,
			},
		})
		const { data } = response.data
		console.log(data)
		this.setState({ movies: data.movies })
	}

	render() {
		const gamesList = this.state.movies.map((movie) => (
			<MovieDetails
				key={movie.id}
				title={movie.title}
				bg={movie.medium_cover_image}
				summary={movie.summary}
			/>
		))

		return (
			<div className="container mx-auto">
				<div className="row">{gamesList}</div>
			</div>
		)
	}
}

export default GamesList

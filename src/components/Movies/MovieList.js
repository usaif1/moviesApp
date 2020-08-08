//dependencies
import React from "react"

//imports
import MovieDetails from "./MovieDetails"

const MovieList = ({ moviearray }) => {
	// async componentDidMount() {
	// 	const response = await axios.get("https://yts.mx/api/v2/list_movies.json", {
	// 		params: {
	// 			limit: 10,
	// 		},
	// 	})
	// 	const { data } = response.data
	// 	console.log(data)
	// 	this.setState({ movies: data.movies })
	// }

	const gamesList = moviearray.map((movie) => (
		<MovieDetails
			key={movie.id}
			title={movie.title}
			bg={movie.large_cover_image} //
			summary={movie.summary}
			year={movie.year}
			id={movie.id}
		/>
	))

	return (
		<div className="container mx-auto">
			<div className="row">{gamesList}</div>
		</div>
	)
}

export default MovieList

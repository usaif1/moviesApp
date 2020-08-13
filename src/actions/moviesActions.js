import { INPUT_TEXT, FETCH_MOVIES, SET_ERROR } from "./types"
import axios from "axios"

export const inputText = (title) => (dispatch) => {
	dispatch({ type: INPUT_TEXT, payload: title })
}

export const fetchMovies = (movieName) => (dispatch) => {
	try {
		axios
			.get("https://yts.mx/api/v2/list_movies.json", {
				params: {
					query_term: movieName.trim(),
					sort_by: "rating",
				},
			})
			.then((movieData) => {
				const movies = movieData.data.data.movies

				if (movieData.data.data.movie_count === 0) {
					dispatch({ type: SET_ERROR })
					// this.setState({ error: true })
				} else {
					dispatch({ type: FETCH_MOVIES, payload: movies })
					// this.setState({ error: false, movies: response.data.data.movies })
				}
			})
			.catch((err) => console.log(err))
	} catch (err) {
		console.log(err)
	}
}

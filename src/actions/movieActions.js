import { FETCH_MOVIE_DETAILS } from "./types"
import axios from "axios"

export const fetchMovieDetails = (title) => async (dispatch) => {
	const response = await axios.get(
		"https://www.omdbapi.com/?apikey=1c97a54a&&t=" + title
	)
	const {
		Title,
		Released,
		Rated,
		Poster,
		Runtime,
		Genre,
		Director,
		Plot,
		Actors,
		Ratings,
		imdbID,
	} = response.data

	const payload = {
		Title,
		Released,
		Rated,
		Poster,
		Runtime,
		Genre,
		Director,
		Plot,
		Actors,
		Ratings,
		imdbID
	}

	dispatch({ type: FETCH_MOVIE_DETAILS, payload: payload })
}

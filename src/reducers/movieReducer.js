import { FETCH_MOVIE_DETAILS } from "../actions/types"

const initialState = {
	title: "",
	year: "",
	rated: "",
	poster: "",
	released: "",
	runtime: "",
	genre: "",
	director: "",
	plot: "",
	cast: "",
	imdbId: null,
	rating: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_MOVIE_DETAILS: {
			return {
				...state,
				title: action.payload.Title,
				year: action.payload.Released,
				rated: action.payload.Rated,
				poster: action.payload.Poster,
				released: action.payload.Released,
				runtime: action.payload.Runtime,
				genre: action.payload.Genre,
				director: action.payload.Director,
				plot: action.payload.Plot,
				cast: action.payload.Actors,
				rating: action.payload.Ratings,
				imdbId: action.payload.imdbID,
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
}

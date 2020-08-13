import { FETCH_MOVIES, SET_ERROR, INPUT_TEXT } from "../actions/types"

const initialState = {
	title: "",
	movies: [],
	error: false,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_MOVIES: {
			return {
				...state,
				error: false,
				movies: action.payload,
			}
		}
		case SET_ERROR: {
			return {
				...state,
				error: true,
			}
		}
		case INPUT_TEXT: {
			return {
				...state,
				title: action.payload,
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
}

import React from "react"
import { connect } from "react-redux"
import { inputText, fetchMovies } from "../../actions/moviesActions"
import MovieList from "../Movies/MovieList"

const Search = (props) => {
	const onChangeHandler = (e) => {
		props.inputText(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		const {
			search: { title },
		} = props
		props.fetchMovies(title)
	}

	let allmovies
	const movies = props.search.movies
	props.search.movies.length > 0
		? (allmovies = <MovieList moviearray={movies} />)
		: (allmovies = null)

	const errComp = (
		<div className="alert alert-danger w-50 m-auto" role="alert">
			<p className="font-weight-bolder">
				Error! - No Movie Found. Please Check Your Search Term
			</p>
		</div>
	)

	return (
		<div className="container">
			<form style={{ width: "65%", margin: "auto" }} onSubmit={onSubmitHandler}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Search Movie"
						aria-label="Search Movie"
						aria-describedby="button-addon2"
						name="title"
						onChange={(e) => onChangeHandler(e)}
						value={props.search.title}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="submit"
							id="button-addon2"
						>
							Search
						</button>
					</div>
				</div>
			</form>
			{props.search.error ? errComp : allmovies}
		</div>
	)
}

const mapStateToProps = (state) => ({
	search: state.movies,
})

export default connect(mapStateToProps, { inputText, fetchMovies })(Search)

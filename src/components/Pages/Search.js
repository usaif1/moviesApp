import React, { Component } from "react"
import axios from "axios"

import MovieList from "../Movies/MovieList"

class Search extends Component {
	state = {
		title: "",
		movies: [],
	}

	onChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitHandler = async (e) => {
		e.preventDefault()
		const { title } = this.state
		const response = await axios.get("https://yts.mx/api/v2/list_movies.json", {
			params: {
				query_term: title,
				sort_by: "rating",
			},
		})
		this.setState({ movies: response.data.data.movies })
	}

	render() {
		let allmovies

		this.state.movies.length > 0
			? (allmovies = <MovieList moviearray={this.state.movies} />)
			: (allmovies = null)

		return (
			<div className="container">
				<form
					style={{ width: "65%", margin: "auto" }}
					onSubmit={this.onSubmitHandler}
				>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Search Movie"
							aria-label="Search Movie"
							aria-describedby="button-addon2"
							name="title"
							onChange={this.onChangeHandler}
							value={this.state.title}
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
				{allmovies}
				{/* {this.state.movies.length > 0 ? (
					<MovieList moviearray={this.state.movies} />
				) : null} */}
			</div>
		)
	}
}

export default Search

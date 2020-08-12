import React, { Component } from "react"
import axios from "axios"

import MovieList from "../Movies/MovieList"

class Search extends Component {
	state = {
		title: "",
		movies: [],
		error: false,
	}

	onChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitHandler = async (e) => {
		e.preventDefault()
		const { title } = this.state

		try {
			const response = await axios.get(
				"https://yts.mx/api/v2/list_movies.json",
				{
					params: {
						query_term: title.trim(),
						sort_by: "rating",
					},
				}
			)
			console.log(response.data)
			if (response.data.data.movie_count === 0) {
				this.setState({ error: true })
			} else {
				this.setState({ error: false, movies: response.data.data.movies })
			}
			console.log(this.state)
		} catch (err) {
			this.setState({ error: "Server side error" })
		}
	}

	render() {
		let allmovies

		this.state.movies.length > 0
			? (allmovies = <MovieList moviearray={this.state.movies} />)
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
				{this.state.error ? errComp : allmovies}
				{/* {allmovies} */}
				{/* {this.state.movies.length > 0 ? (
					<MovieList moviearray={this.state.movies} />
				) : null} */}
			</div>
		)
	}
}

export default Search

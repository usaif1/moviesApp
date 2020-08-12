import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export class SingleMovie extends Component {
	state = {
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
		rating: [],
	}

	async componentDidMount() {
		console.log(this.props.match.params.title)
		const response = await axios.get(
			"https://www.omdbapi.com/?apikey=1c97a54a&&t=" +
				this.props.match.params.title
			// {
			// 	params: {
			// 		apikey: "1c97a54a",
			// 		// t: this.props.match.params.title,
			// 	},
			// }
		)
		console.log(response.data)
		// console.log(this.props.match.params.title)

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
		} = response.data

		this.setState({
			title: Title,
			year: Released,
			rated: Rated,
			poster: Poster,
			released: Released,
			runtime: Runtime,
			genre: Genre,
			director: Director,
			plot: Plot,
			cast: Actors,
			rating: Ratings,
		})
		console.log(this.state.cast)
	}

	render() {
		const ratings = this.state.rating.map((r) => {
			return r.Value
		})

		return (
			<div className="container">
				<div>
					<h2 className="text-left">{this.state.title} </h2>
					<p className="text-left">Release Date - {this.state.released}</p>
				</div>
				<div className="img and ratings" style={{ display: "flex" }}>
					<div className="movie poster">
						<img src={this.state.poster} alt="Movie Poster Large"></img>
					</div>
					<div className="ratings">
						<h6 className="text-left ml-5">Ratings</h6>
						<p className="text-left ml-5">IMDb - {ratings[0]} </p>
						<p className="text-left ml-5">Rotten tomatoes - {ratings[1]}</p>
						<p className="text-left ml-5">Metacritic - {ratings[2]}</p>
					</div>
				</div>
				<div className="cast details and genre mt-3">
					<p className="text-left">Cast - {this.state.cast}</p>
					<p className="text-left">Director(s) - {this.state.director}</p>
					<p className="text-left">Genre - {this.state.genre}</p>
				</div>
				<div>
					<h6 className="text-left">Summary -</h6>
				</div>
				<div className="text-left">
					<p>{this.state.plot}</p>
				</div>
				<div className="back to search">
					<Link to="/search">
						<button className="btn btn-success"> Back To Search</button>
					</Link>
				</div>
			</div>
		)
	}
}

export default SingleMovie

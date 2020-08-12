import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import imdb from "../../assets/imdb-icon.jpg"
import rottenTomatoes from "../../assets/rotten-tomatoes.png"
import metacritic from "../../assets/metacritic-icon.png"

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
						<h4 className="text-left ml-5">Ratings</h4>
						<p className="text-left ml-5">
							<img src={imdb} alt="imdb-icon" style={{ width: "7%" }} />-
							{ratings[0]}
						</p>
						<p className="text-left ml-5">
							<img
								src={rottenTomatoes}
								alt="rotten-tomatoes icon"
								style={{ width: "7%" }}
							/>
							- {ratings[1]}
						</p>
						<p className="text-left ml-5">
							<img
								src={metacritic}
								alt="metacritic-icon"
								style={{ width: "7%" }}
							/>
							- {ratings[2]}
						</p>
					</div>
				</div>
				<div className="cast details and genre mt-3">
					<p className="text-left">
						<span className="font-weight-bold">Cast</span> - {this.state.cast}
					</p>
					<p className="text-left">
						<span className="font-weight-bold">Director(s)</span> -{" "}
						{this.state.director}
					</p>
					<p className="text-left">
						<span className="font-weight-bold">Genre</span> - {this.state.genre}
					</p>
				</div>
				<div>
					<h6 className="text-left font-weight-bold">Summary -</h6>
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

import React, { Component } from "react"
import { Link } from "react-router-dom"
import { fetchMovieDetails } from "../../actions/movieActions"
import { connect } from "react-redux"
import imdb from "../../assets/imdb-icon.jpg"
import rottenTomatoes from "../../assets/rotten-tomatoes.png"
import metacritic from "../../assets/metacritic-icon.png"

export class SingleMovie extends Component {
	async componentDidMount() {
				const {
			params: { title },
		} = this.props.match
		this.props.fetchMovieDetails(title)
	}

	render() {
		const ratings = this.props.movieDetails.rating.map((r) => {
			return r.Value
		})

		return (
			<div className="container">
				<div>
					<h2 className="text-left">{this.props.movieDetails.title} </h2>
					<h6 className="text-left font-italic">
						Release Date - {this.props.movieDetails.released}
					</h6>
				</div>
				<div className="img and ratings" style={{ display: "flex" }}>
					<div className="movie poster">
						<img
							src={this.props.movieDetails.poster}
							alt="Movie Poster Large"
						></img>
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
						<span className="font-weight-bold">Cast</span> -{" "}
						{this.props.movieDetails.cast}
					</p>
					<p className="text-left">
						<span className="font-weight-bold">Director(s)</span> -{" "}
						{this.props.movieDetails.director}
					</p>
					<p className="text-left">
						<span className="font-weight-bold">Genre</span> -{" "}
						{this.props.movieDetails.genre}
					</p>
				</div>
				<div>
					<h6 className="text-left font-weight-bold">Summary -</h6>
				</div>
				<div className="text-left">
					<p>{this.props.movieDetails.plot}</p>
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

const mapStateToProps = (state) => ({
	movieDetails: state.movie,
})

export default connect(mapStateToProps, { fetchMovieDetails })(SingleMovie)

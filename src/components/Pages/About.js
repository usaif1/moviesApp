import React from "react"

const REACT_VERSION = React.version

const About = () => {
	return (
		<div className="container">
			<div className="text-left">
				<h1>About This App</h1>
			</div>
			<div className="mt-5 text-left">
				<h3>Movie Finder App</h3>
				<h4>v1.0.0</h4>
				<h5>
					This app was developed to help you find information about your
					favourite movies
				</h5>
			</div>
			<div className="mt-5 text-left">
				<ul>
					<li>
						<p>The app was built using React JS {REACT_VERSION} and uses Redux for state management.</p>
					</li>
					<li>
						<p>
							The purpose of this app is to fetch movies using a search term
							using the <span className="font-weight-bolder">YTS YIFY API</span>{" "}
							to fetch the movies containing the search term.
						</p>
					</li>
					<li>
						<p>
							The fetched movies are then displayed as cards containing the
							movie posters and details. Bootstrap 4 was used to design and
							render the cards. A link is provided at the footer of each card
							which contains a link which routes to user to the component/page
							containing information about the movie selected.
						</p>
					</li>
					<li>
						<p>
							The movie details are fetched from{" "}
							<span className="font-weight-bolder">OMDB API</span> and the
							design of the page was made possible by implementing Boostrap 4
						</p>
					</li>
				</ul>
			</div>
			<div>
				<footer className="fixed-bottom font-weight-bolder mb-5">Made By Saif Ullah</footer>
			</div>
		</div>
	)
}

export default About

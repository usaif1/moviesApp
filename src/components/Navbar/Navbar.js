import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<div className="container bg-dark">
			<div className="d-flex bd-highlight mb-3">
				<div className="mr-auto p-2 bd-highlight">
					<Link to="/" className="text-light">
						Movie Finder
					</Link>
				</div>
				<div className="p-2 bd-highlight">
					<Link to="/search" className="text-light">
						Search
					</Link>
				</div>
				<div className="p-2 bd-highlight">
					<Link to="about" className="text-light">
						About
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar

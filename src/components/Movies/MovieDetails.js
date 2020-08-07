import React from "react"

const Moviedetails = (props) => {
	return (
		<div className="card w-25 shadow mb-5 ml-5 bg-white rounded">
			<img src={props.bg} className="card-img-top" alt={props.title} />
			<div className="card-body">
				<h5 className="card-title">
					<strong>{props.title}</strong>
				</h5>
				<h6 className="card-subtitle mb-2 text-muted">Release Date</h6>
				<p
					className="card-text text-wrap overflow-auto"
					style={{ maxHeight: "5rem" }}
				>
					{props.summary}{" "}
				</p>
			</div>
			<a href="#" className="card-footer  mt-0 bg-white">
				Know More
			</a>
		</div>
	)
}

export default Moviedetails
{
	/* m-0 bg-white */
}

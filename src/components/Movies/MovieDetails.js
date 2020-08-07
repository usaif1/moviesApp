import React from "react"

const Moviedetails = (props) => {
	return (
		<div
			className="card shadow mb-5 ml-5 bg-white rounded"
			style={{ width: "28%" }}
		>
			<img
				src={props.bg}
				className="card-img-top"
				alt={props.title}
				style={{ height: "50%" }}
			/>
			<div className="card-body">
				<h5 className="card-title">
					<strong>{props.title}</strong>
				</h5>
				<h6 className="card-subtitle mb-2 text-muted">
					Release Year - {props.year}
				</h6>
				<div className="card-text text-wrap overflow-auto" style={{maxHeight:"17rem"}}>{props.summary}</div>
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

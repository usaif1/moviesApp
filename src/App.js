//dependencies
import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//imports
import Navbar from "./components/Navbar/Navbar"
import Search from "./components/Pages/Search"
import About from "./components/Pages/About"
import Home from "./components/Pages/Home"
import SingleMovie from "./components/Movies/SingleMovie"

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/search" component={Search} />
						<Route exact path="/about" component={About} />
						<Route exact path="/movie/:title" component={SingleMovie} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App

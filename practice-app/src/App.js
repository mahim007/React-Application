import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import User from "./components/User";
import Post from "./components/Post";


let initialState = {
	users: [],
	isLoaded: false
};

class App extends Component {

	constructor(props) {
		super(props);
		this.state = initialState;

	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(data => data.json())
			.then(users => this.setState({
				users: [...this.state.users, ...users],
				isLoaded: true
			}))
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Welcome Message</h1>
					<Header />
					<Switch>
						<Route path="/home" render={() => <Home data={this.state} />} />
						<Route path={"/about"} component={About} />
						<Route path={"/contact"} component={Contact} />
						<Route path={"/user/:id"} exact component={User} />
						<Route path={"/user/:userId/post/:postId"} component={Post} />
					</Switch>

				</div>
			</BrowserRouter>
		);
	}
}

export default App;

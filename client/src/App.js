import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Jumbotron from "./components/Jumbotron";
import Scrape from "./pages/Scrape";
import Articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch";
import {SideNav,SideNavItem} from "react-materialize";
import { Link } from "react-router-dom";

import "./App.css";
import API from './utils/API';

declare var $ : any;
class App extends Component {
  
  	state = {
		haveArticles: false
    };
  
	componentDidMount() {
		API.getArticles()
		.then((res) => {
			console.log(res);
			console.log(res.data.length);
			!(res.data.length === 0) ? 
			this.setState({
				haveArticles: true
			},() => {
				console.log(this.state);
				$('.sidebar').sideNav()
			})
			:
			$('.sidebar').sideNav()
		})
		.catch((err) => console.log(err));
	}

	changeState = () => {
		this.setState({
			haveArticles: true
		},() => console.log(this.state))
	}

	changeStateBack = () => {
		this.setState({
			haveArticles: false
		},() => console.log(this.state))
	}

	render() {
		return (
			<div className="App">
					<div>
						<Jumbotron>
							<SideNav trigger={<i className="material-icons left" style={{color:"white",margin:25}}>menu</i>} options={{ closeOnClick: true }}>
								<SideNavItem userView
									user={{
										background: './Images/jordan-whitt-73255-unsplash.jpg',
										image: './Images/V9H2222Jon.jpg',
										name: 'Jon Jackson',
										email: 'ocskier@gmail.com'
									}}
								/>
								<SideNavItem icon='cloud'><Link to="/">Saved</Link></SideNavItem>
								{/* <SideNavItem divider />
								<SideNavItem subheader>Subheader</SideNavItem> */}
								<SideNavItem waves><Link to="/scrape">New Scrape</Link></SideNavItem>
							</SideNav>
							<h1 className="display-4">Mongo Scraper</h1>
						</Jumbotron>
						
						<div className="main-view">
							<Switch> 
									{
										!(this.state.haveArticles) ?
										<Route exact path="/scrape" component={() => <Scrape artBool={this.changeState.bind(this)} />} />
										:
										<Route exact path="/" component={() => <Articles />} />
									}
										<Route component={NoMatch} />
							</Switch>
						</div>
          			</div>
			</div>
		)
	}
}

export default App;

// style={{backgroundImage: `url(${image})
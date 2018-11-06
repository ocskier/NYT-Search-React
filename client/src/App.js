import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Jumbotron from "./components/Jumbotron";
import Scrape from "./pages/Scrape"
import Articles from './pages/Articles';
import NoMatch from "./pages/NoMatch";
import {Sidenav} from "react-materialize"

import "./App.css";
// import API from './utils/API';

class App extends Component {
  
  state = {
			haveArticles: false
    };
  
	componentDidMount() {
		// $('.sidenav').sidenav();
	}


	render() {
		return (
			<div className="App">
					<div>
            <Jumbotron><h1 className="display-4">Mongo Scraper</h1></Jumbotron>

            <div className="main-view" style={{backgroundImage: `url(${image})`}}>
              <Switch> {
                !this.haveArticles ? 
								<Route exact path="/" component={() => <Scrape />} />
								:
								<Route exact path="/articles" component={() => <Articles />} />
								}
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}
			</div>
		)
	}
}

export default App;

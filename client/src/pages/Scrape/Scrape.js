import React,{Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";

class Scrape extends Component {
  
  scrapeArticles = (e) => {
    e.preventDefault();
    API.getScrape()
    .then((res) => {
      console.log(res);
      this.props.artBool();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className="row justify-content-center">
          <button onClick={this.scrapeArticles} type="button" className="btn btn-info">Scrape</button>
      </div>
    )
  }
}

export default Scrape
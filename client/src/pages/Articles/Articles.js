import React, { Component } from "react";

import {Card} from "../../components/Card";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import {Modal,Collapsible,CollapsibleItem,Input,Row as MatRow} from 'react-materialize';
import Moment from 'react-moment';
import './Articles.css';

declare var $ : any;

class Articles extends Component {
  state = {
    articles: [],
    articleId: "",
    articleTitle: "",
    noteTitle: "",
    noteBody: ""
  };

  
  componentDidMount() {
    $('#modal1').modal({
      onCloseStart: () => (console.log("got here"))
    },() => this.getArticles());
  }

  cancel = () => {
    this.setState({
      title: "",
      body: ""
    },
    $('#modal1').modal('close'))
  }

  save = (id) => {
    API.saveNote({
      title: noteTitle,
      body: noteBody,
      date: Moment().format("MMMM Do YYYY HH:mm:ss")
    })
    .then(res =>
      API.updateArticle(id,{
        $push: {
          notes: res.data._id
        }
      })
      .then(res => this.loadArticles())
      .catch(err => console.log(err))
    )
  .catch(err => console.log(err));
  }

  loadArticles = () =>
    API.getArticles()
    .then(res =>
      this.setState({articles: res.data})
    )
  .catch(err => console.log(err));

  removeArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getNoteDiv = (id) => {
    this.setState({articleId: id},
      API.getArticle(id)
        .then(res => 
          API.getNote(res.data.notes[res.data.notes.length-1]._id)
            .then(res => 
              this.setState({
                noteTitle: res.data.title,
                noteBody: res.data.body
              })
            )
          .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    )
  }

  // addArticle = (e) => {
  //   e.preventDefault();
  //   API.makeArticle({
  //   }).then((res) => {
  //       console.log(res);
  //       this.setState({
  //         newlistname: ""
  //       })
  //   })
  //   .catch((err) => console.log(err));
  // }

  render() {
    return (
        <MatRow>
          <Col>
            {
              this.state.articles.map(article => (
                <Col size="s10" className="w3-card-4" style={{margin:"12px 0"}}>
                  <MatRow style={{paddingTop:"5px"}}>
                    <Col>
                      <Link to={article.link}>
                        <header className="w3-container w3-blue">
                          <h1>{article.title}</h1>
                        </header>
                      </Link>
                      <div className="w3-container">
                        <p>{article.summary}</p>
                      </div>
                    </Col>
                    <Col size="s3">
                      <Link to={article.link}>
                        <img src={article.image} className="rounded float-right img-thumbnail" style={{margin:"5px",minHeight:"50%"}} alt="Responsive image"></img>
                      </Link>
                    </Col>
                  </MatRow>
                  <footer id={article._id} className="w3-container w3-blue">
                    <h5>{article.date}<button onClick={() => this.getNoteDiv(article._id)} className="modal-trigger" style={{float:"right"}}>Note</button></h5>
                      {
                        this.notes.map(note => (
                            <h5 style={{color:"black",background:"floralwhite"}}>{note.date}<br />{note.title} : {note.body}</h5>
                        ))
                      }
                  </footer>
                </Col>
              ))
            }
          </Col>
          <Modal id="modal1" trigger="modal-trigger" header={this.state.articleTitle} fixedFooter style="max-height: 50%"><br />
            <div id="noteCard" className="modal-content" data-planid="" style={{margin:"0 auto"}}>
              <div className="modal-content" style={{padding:"0 8px"}}>
                {/* An input to enter a new title */}
                <input onChange={this.handleInputChange} name={this.state.noteTitle} placeholder="Subject"></input>
                {/* A textarea to add a new note body */}
                <textarea onChange={this.handleInputChange} name={this.state.noteBody} placeholder="Add a Note"></textarea>
              </div>
              <div class="modal-footer" style={{display:"block",paddingTop:"10px"}}>
                  <a href="#!" onClick={this.cancel} className="modal-close waves-effect waves-green left"><button>Exit</button></a>
                  {/* A button to submit a new note, with the id of the article saved to it */}
                  <a href="#!" onClick={this.save} className="modal-close waves-effect waves-green"><button>Save</button></a>
              </div>
            </div>
        </Modal>
        </MatRow>
    )
  }
}

export default Articles;

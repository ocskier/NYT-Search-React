import axios from "axios";

export default {
  // Gets all Notes
  getNotes: (id) => {return axios.get("/api/notes")}
  ,
  
  // Gets the Note with the given id
  getNote: (id) => {return axios.get("/api/notes/" + id)},
  
  // Deletes the Note with the given id
  deleteNote: (id) => {return axios.delete("/api/notes/" + id)},
  
  // Gets the Article with the given id
  getArticle: (id) => {return axios.get("/api/articles/" + id)},
  
  // Deletes the Article with the given id
  deleteList: (id) => {return axios.delete("/api/articles/" + id)},

  // Saves a Note to the database
  saveNote: (noteData) => {return axios.post("/api/notes", noteData)},
  
  updateNote: (id,noteData) => {return axios.put("/api/notes/" + id,noteData)},
  
  updateArticle: (id,articleData) => {return axios.put("/api/articles/"+id,articleData)},
  
  getArticles: () => {return axios.get("/api/articles")},
  
  makeArticle: (articleData) => {return axios.post("/api/articles",articleData)},
  getScrape: () => {return axios.get("/api/scrape")}
};

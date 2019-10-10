import axios from "axios";

export default {
  // Gets all Notes
  getNotes: (id: string) => {return axios.get("/api/notes")}
  ,
  
  // Gets the Note with the given id
  getNote: (id: string) => {return axios.get("/api/notes/" + id)},
  
  // Deletes the Note with the given id
  deleteNote: (id: string) => {return axios.delete("/api/notes/" + id)},
  deleteArticle: (id: string) => {return axios.delete("/api/articles/" + id)},
  
  // Gets the Article with the given id
  getArticle: (id: string) => {return axios.get("/api/articles/" + id)},
  
  // Deletes the Article with the given id
  deleteList: (id: string) => {return axios.delete("/api/articles/" + id)},

  // Saves a Note to the database
  saveNote: (noteData: Object) => {return axios.post("/api/notes", noteData)},
  
  updateNote: (id: string, noteData: Object) => {return axios.put("/api/notes/" + id,noteData)},
  
  updateArticle: (id: string, articleData: Object) => {return axios.put("/api/articles/"+id,articleData)},
  
  getArticles: () => {return axios.get("/api/articles")},
  
  makeArticle: (articleData: Object) => {return axios.post("/api/articles",articleData)},
  getScrape: () => {return axios.get("/api/scrape")}
};

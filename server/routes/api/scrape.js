const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");
const axios = require ("axios");
const cheerio = require ("cheerio");

declare var $: any; 

// Matches with "/api/lists"
// A GET route for scraping the echoJS website
router.get("/", (req, res) => {
  // First, we grab the body of the html with axios
      axios.get("https://www.npr.org/sections/music-news/").then((response) => {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      const $ = cheerio.load(response.data);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("article", ".list-overflow").each(function(i, element) {
          // Save an empty result object
          var result = {};
  
          // Add the text and href of every link, and save them as properties of the result object
          result.title = $(this)
              .children(".item-info")
              .children("h2")
              .children("a")
              .text();
          result.link = $(this)
              .children(".item-info")
              .children("h2")
              .children("a")
              .attr("href");
          result.date = $(this)
              .children(".item-info")
              .children("p")
              .children("a")
              .contents()
              .eq(0)
              .text()
              .replace("•", "")
              .trim();
          result.summary = $(this)
              .children(".item-info")
              .children("p")
              .children("a")
              .contents()
              .eq(1)
              .text();
          result.image = $(this)
              .children(".item-image")
              .first()
              .contents()
              .children('a')
              .children('img')
              .attr('src');
  
          console.log(result);
          // Create a new Article using the `result` object built require scraping
          db.Article.create(result)
          .then(function(dbArticle) {
              // View the added result in the console
              console.log(dbArticle);
          })
          .catch(function(err) {
              // If an error occurred, send it to the client
              return res.json(err);
          });
      });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.json("/");
      // setTimeout(res.redirect("/"),2000);
      });
  });

module.exports = router;
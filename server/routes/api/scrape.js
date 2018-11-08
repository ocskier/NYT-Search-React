const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

// Matches with "/api/lists"
// A GET route for scraping the echoJS website
router.route("/")
  .get(scrapeController.scrape)

module.exports = router;
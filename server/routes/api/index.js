const router = require("express").Router();
const articleRoutes = require("./articles");
const noteRoutes = require("./notes");
const scrapeRoutes = require("./scrape");

// Book routes
router.use("/notes", noteRoutes);
router.use("/articles", articleRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;

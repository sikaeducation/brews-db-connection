const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/", function(request, response, next) {
    queries.getBeers().then(function(beers) {
        response.json(beers);
    });
});

module.exports = router;

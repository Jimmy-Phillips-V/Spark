const axios = require("axios");
const router = require("express").Router();

router.get("/global", (req, res) => {
  axios
    .get("https://api.reliefweb.int/v1/reports?appname=apidoc&filter[field]=disaster.name&filter[value]=Myanmar: Earthquake&fields[include][]=disaster.name&limit=5", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
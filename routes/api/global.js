const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hit")
  axios
    .get("https://api.reliefweb.int/v1/reports?appname=apidoc&filter[field]=disaster.name&filter[value]=Myanmar: Earthquake&fields[include][]=disaster.name&limit=5")
    .then(response => res.json(response.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
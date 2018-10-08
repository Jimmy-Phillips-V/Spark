const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hit")
  axios
    .get("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-01-01T04:00:00.000z%27%20and%20state%20eq%20%27CA%27")
    .then(response => res.json(response.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
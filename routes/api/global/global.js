const axios = require("axios");
const router = require("express").Router();

router.get("/global", (req, res) => {
  axios
    .get("https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&limit=10", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
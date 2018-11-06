const axios = require("axios");
const router = require("express").Router();
var geocoding = new require('reverse-geocoding-google');

var key ="AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

router.post("/", (req, res) => {
  console.log("hit")
  var config = {
    'latitude': req.body.lat,
    'longitude': req.body.lng,
    'key': key
  };
  geocoding.location(config, function (err, data){
    if(err){
        console.log(err);
    }
    else{
        var state = data.results[0].address_components[4].short_name
        axios
    .get("https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&limit=10")
    .then(response => res.json(response.data))
    .catch(err => res.status(422).json(err));
    }
  });
  
});

module.exports = router;

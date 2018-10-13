import axios from "axios";

export default {
  // Gets data
  getGlobal: function() {
    return axios.get("/api/global");
  },
  // Gets National data
  getNational: function()  {
    return axios.get("/api/national/");
  },
  // Gets Local data
  getLocal: function(lat, lng) {
    const state = {lat : lat, lng: lng}
    return axios.post("/api/local/", state);
  } 
};
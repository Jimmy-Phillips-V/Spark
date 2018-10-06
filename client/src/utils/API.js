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
  getLocal: function() {
    return axios.get("/api/local/");
  }
  
};
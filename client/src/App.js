import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Local from "./pages/Local";
import Global from "./pages/Global";
import National from "./pages/National";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Global} />
        <Route exact path="/global" component={Global} />
        <Route exact path="/national" component={National} />
        <Route exact path="/local" component={Local} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    <Nav />
    </div>
  </Router>
);

export default App;

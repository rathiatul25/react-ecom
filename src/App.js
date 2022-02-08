import React from "react";
import { Router, Route, Switch, Link} from 'react-router-dom';
import history from './history';
import Home from "./components/Home";

const App = () => {
  return (
      <div className='container'>
        <Router history={history}>
        <Link to="/" className="item">Home</Link>        
        <Switch>						
          <Route path="/" exact component={Home} />
        </Switch>
        </Router>
      </div>
  )
}



export default App;

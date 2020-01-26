import React from 'react';
import NavSidebar from './components/NavSidebar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import HowIMadeIt from './views/HowIMadeIt';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="full-screen d-flex">
          <h1 className="initial-logo initial-fade-in">Sam Vargas</h1>
        </div>
        <div id="main-content" className="full-screen slide-in-rl grid-main">
          <NavSidebar />
          <Switch>
            <Route exact path='/portfolio'>
              <Portfolio className="page-wrap" />
            </Route>
            <Route exact path='/howimadeit'>
              <HowIMadeIt className="page-wrap" />
            </Route>
            <Route exact path='/contact'>
              <Contact className="page-wrap" />
            </Route>
            <Route path='/'>
              <Home className="page-wrap" />
            </Route>
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

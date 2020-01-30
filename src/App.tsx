import React from 'react';

import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import NoMatch from './pages/404'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

        </ul>
      </nav>
      <div style={{ background: "rgba(127,127,127,0.5)" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

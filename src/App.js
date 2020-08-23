import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home';
import SearchPage from './SearchPage';
import './App.css';

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

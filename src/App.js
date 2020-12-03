import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './views/Home'
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </Router>
  );
}

export default App;

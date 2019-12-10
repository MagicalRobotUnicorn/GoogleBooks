import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Search />
      </Router>
    </div>
  );
}

export default App;

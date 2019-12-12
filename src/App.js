import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import BookDisplay from './components/BookDisplay';


export default class App extends Component {
  state = {
    books: null
  }
  // Application Layer State as DB Requests

  searchBooks = () => {
    console.log("Here");
  }

  // Delete Book Route

  // Get All Books Route
  render(){
  
  return (
    <div className="App" >
      <Router>
        <Header />
        <Search searchBooks={this.searchBooks} books={this.state.books} />
        <BookDisplay books={this.state.books} />
      </Router>
    </div>
  );
  }
}
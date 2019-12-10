import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import BookDisplay from './components/BookDisplay';


class App extends Component {
  state = {
    books: null
  }
  // Application Layer State as DB Requests

  // Search Function
  searchBooks = (query) => {
    //   axios.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&key='+API_KEY.key)
    //   .then(json => json.data.results.map(result => (
    //     {
    //       name: `${result.name.first} ${result.name.last}`,
    //       id: result.registered
    //     })))
    //   .then(newData => this.setState({users: newData, store: newData}))
    //   .catch(error => alert(error))
    // }

    // componentDidMount(){
    //   axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
    //   .then(json => json.data.results.map(result => (
    //     {
    //       name: `${result.name.first} ${result.name.last}`,
    //       id: result.registered
    //     })))
    //   .then(newData => this.setState({users: newData, store: newData}))
    //   .catch(error => alert(error))
    // }


  }

  // Add Book Route

  // Delete Book Route

  // Get All Books Route
  render() {
    return (
      <div className="App" >
        <Router>
          <Header />
          <Search searchBooks={this.searchBooks} books = {this.state.books} />
          <BookDisplay books = {this.state.books} />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Book from './Book';
const axios = require('axios');


// Map function for Books -> Book
export default class BookDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    axios.get('/api/')
    .then(response => {
      if (response.data.length > 0){
        this.setState({
          books: response.data
        });
      }
    })
  }

  render() {
    if (this.props.books === null){
      return(
        <div>
          <p>Nothing To Display</p>
        </div>
      )
    }
    else {
      return this.props.books.map((book) => (
        <Book key={book.id} book= {book} addToCollection={this.props.addToCollection} />
      ));
    }
  }
}

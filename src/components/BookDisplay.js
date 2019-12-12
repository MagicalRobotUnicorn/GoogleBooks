import React, { Component } from 'react';
import Book from './Book';
const axios = require('axios');

// Sample object from testPull
// let bookData = response.data.items.slice(0, 15);

// let rawData = (bookData[0]);

// const sampleItem = {
//   id: rawData.id,
//   title : rawData.volumeInfo.title,
//   authors : rawData.volumeInfo.authors,
//   description: rawData.volumeInfo.description,
//   image: rawData.volumeInfo.imageLinks.thumbnail,
//   link : rawData.volumeInfo.infoLink
// }

// console.log(sampleItem);

// Sample React Router Format
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

// Map function for Books -> Book
export default class BookDisplay extends Component {
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

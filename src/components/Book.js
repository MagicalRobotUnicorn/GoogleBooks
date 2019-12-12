import React, { Component } from 'react'

export default class Book extends Component{
  render() {
    return (
      <div className="individualBook row">
        <div className="col-2">
          <img src={this.props.book.image} alt="Book Cover" />
        </div>
        <div class="col-10">
          <h4 className="bookTitle">{this.props.book.title}</h4>
          <h5 className="bookAuthors">{this.props.book.authors}</h5>
          <p className="book description">{this.props.book.description}</p>
          <a href={this.props.book.link} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Visit on Google Books</a><a href={this.props.addToCollection} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Add to Library</a>
        </div>
      </div>
    )
  }
}

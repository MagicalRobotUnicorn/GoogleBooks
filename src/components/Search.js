import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form className="form-inline">
              <input className="form-control form-control-lg" type="text" placeholder="Enter Search Parameters" />
              <button type="submit" className="btn btn-primary mb-2" onClick={this.params.searchBooks}>Search Google Books</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

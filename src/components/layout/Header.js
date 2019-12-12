import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="headerObject">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="./images/bookslogo.png" alt="Logo for Google Books Search Site" className="siteLogo" />
              <br />
              <p className="subheading">
                A Google Books Search Application
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <Link to="/">Home</Link>  | <Link to="/all">About</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
  }

  onChangeSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value
    });
    }
  }

  onSubmit(e){
    e.preventDefault();

    const searchTerm = this.state.searchTerm;

    axios.get('/api/query' + searchTerm)
    .then((response) => {
      const responseArray = response.data;
      <Link 
    }
    )
  }


  render() {
    // Insert state and on change requirements
    // Pass state variable up to parent element
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

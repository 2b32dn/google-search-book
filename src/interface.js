import React, {Component} from 'react';
import SearchedResults from './searchedResults.js'

class Interface extends Component{
  state = { 
    searchInput: '',
    searchResults: []
  };
  handleSearch = (event) => {
    this.setState({searchInput: event.target.value})
  }
  fetchBooksData = (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(this.state.searchInput)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&maxResults=40&key=(KEY)`)
      .then( res => res.json())
      .then( resJSON => this.setState({searchResults: resJSON.items}))
  }
  render(){
    return(
      <div>
        <form className="InputBox" onSubmit={this.fetchBooksData}>
          <input type="text" value={this.state.searchInput} onChange={this.handleSearch}/>
          <input type="submit" value="Submit"/>
        </form>
        <SearchedResults searchResults={this.state.searchResults}/>
      </div>
    )
  }
}

export default Interface;
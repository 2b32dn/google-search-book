import React, {Component} from 'react'

class SearchedResults extends Component{
  render(){
    console.log(this.props.searchResults)
    return(
      <div>
        {this.props.searchResults.map((item)=> <div>{item.volumeInfo.title}</div> )}
      </div>
    )
  }
}

export default SearchedResults
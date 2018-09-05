import React, {Component} from 'react'


class SearchedResults extends Component{
  render(){
    console.log(this.props.searchResults)
    return(
      <div>
        {this.props.searchResults.map((item)=> 
        <div className="MainFragment">
          <a href={item.volumeInfo.infoLink}>
            <img className="CardImg" src={item.volumeInfo.imageLinks.thumbnail}/>
          </a>
        <div className="CardBody">
          <div>
            <h3>
              Title: {item.volumeInfo.title}
            </h3>
          </div> 
          <div>
            <h6>
              Author(s): {item.volumeInfo.authors}
            </h6>
          </div> 
          <div>
            <h6>
              Categories: {item.volumeInfo.categories}
            </h6>
          </div> 
          <div>
            <h6>
              Ratings: {item.volumeInfo.averageRating}
            </h6>
          </div> 
          <div>
            <h6>
              Language: {item.volumeInfo.language}
            </h6>
          </div> 
          <div>
            <h6>
              Page Count: {item.volumeInfo.pageCount}
            </h6>
          </div>
          <div>
            <h6>
              Publisher: {item.volumeInfo.publisher}
            </h6>
          </div> 
          <div>
            <h6>
              Published Date: {item.volumeInfo.publishedDate}
            </h6>
          </div>
          <div className="CardDescription">
            <h6>
              {item.volumeInfo.description}
            </h6>
          </div>
        </div>
        </div>
        )}
      </div>
    )
  }
}

export default SearchedResults
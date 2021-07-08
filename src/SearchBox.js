import React, { Component } from 'react';
import './SearchBox.css'

class SearchBox extends Component {

  render() {
    
    return (

      <div>
        <input type="text" placeholder="Search Robots" onChange={this.props.onChange}/>
     </div>
    );
    
  }
  
}

export default SearchBox;
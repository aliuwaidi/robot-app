import React, {Component} from 'react';
import '../CardComponents/Card.css';

class Card extends Component {

  render() {
      const {name,email, id}= this.props
     return (
      <div className="card">
        <img src={` https://robohash.org/${id}?200x200 `} alt="img"/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
     )
    
  }
 
}

export default Card;

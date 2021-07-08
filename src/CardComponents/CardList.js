import React, {Component} from 'react';
import Card from '../CardComponents/Card';
import '../CardComponents/CardList.css';

class CardList extends Component {

  render() {
    
    const cardArray = this.props.robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>)

    return (
      <div className="cardlist">
        {cardArray}
      </div>
    
    )
    
  }
 
}

export default CardList;
import React , {Component} from 'react';
import CardList from './CardComponents/CardList';
import './App.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
 
  state = {
    robots: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({robots: users}))
  }


  onChangeField=(event)=> {
    this.setState({
      searchField: event.target.value
    })
    console.log(event.target.value)
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox onChange={this.onChangeField} />
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
        
      </div>
    );
    
  }
  
}

export default App;

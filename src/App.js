import React from 'react';
import Search from './components/Search'
import User from './components/User'
import Followers from './components/Followers'
import './App.css';

class App extends React.Component{
  state={
    card: [],
    followers: [],
  }

  componentDidMount(){
    fetch("https://api.github.com/users/jasonbringle")
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => this.setState({card: res}))
    .catch(err => console.log("error", err))

    fetch("https://api.github.com/users/jasonbringle/followers")
    .then(res => res.json())
    .then(res => this.setState({followers: res}))
    .catch(err => console.log('error', err))
  }

    
  
  render(){
    return (
      <div className="App">
        <Search />
        <header className="App-header">
          <User me={this.state.card}/>
          <Followers />
        </header>
      </div>
    );
  }
}

export default App;

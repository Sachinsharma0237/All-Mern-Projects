import React, { Component } from 'react';
import CardList from './Components/Cardlist/CardList';
import { SearchBar } from './Components/Searchbar/SearchBar';
import './App.css';

class App extends Component {
  state = {  
    monsters: [],
    searchField:""
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users=> this.setState({monsters: users}))
  }


  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster=>{
          return  monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return ( 
        <div className="app">
          <h1>Monster Rolodex</h1>
          <SearchBar
            placeholder="search monsters"
            handleChange={(e)=>{this.setState({searchField: e.target.value})}}
          />
          {/* <input type="search" placeholder="search monsters" onChange={ (e)=>{this.setState({searchField: e.target.value})} } /> */}
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
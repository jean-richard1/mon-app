import React, { Component } from 'react'
import Table from './TableSingleComponent'

class App extends Component {
  state = {
    characters: [ {
      name: 'Charlie',
      prenom: 'Brown',
    },
    {
      name: 'Mac',
      prenom: 'Deau',
    },
    {
      name: 'Delphine',
      prenom: 'Asturion',
    },
    {
      name: 'Dennis',
      prenom: 'Rodman',
    },]
  
        // the rest of the data
};
removeCharacter = index => {
  const { characters } = this.state;

  this.setState({
      characters: characters.filter((character, i) => { 
          return i !== index;
      })
  });
}

  render() {const { characters } = this.state
     
    
    
    
    return (
      <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
    )
  }
}

export default App

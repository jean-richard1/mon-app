import React, { Component } from 'react'

const TableHeader = () => {   return (
    <thead>
      <tr>
        <th>Name</th>
        <th>prenom</th>
        <th>Remove</th>
      </tr>
    </thead>
  ); }

  const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.prenom}</td>
          <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      );
    });
  
    return <tbody>{rows}</tbody>
  }




// props pour transmettre les données
  class Table extends Component {
 



    
    render() {
      // Declaration du Props
      const { characterData, removeCharacter } = this.props;
  
      return (
        <table>
          <TableHeader />
          {/* <!-- <Table /> --> */}
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      )
    }
  }




export default Table
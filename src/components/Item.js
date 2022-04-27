import React from 'react'

function Item(props) {
  return (
    <>
       
    <tr>
      <th scope="row">1</th>
      <td>{props.name}</td>
      <td>{props.collegename}</td>
      <td>{props.branch}</td>
      <td>{props.year}</td>
      <td>{props.level}</td>

    </tr>
    
    </>
  )
}

export default Item;
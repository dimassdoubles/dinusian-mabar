import React, { Fragment, useEffect } from 'react'

const Row = ({dinusian}) => {

 const rowClick = (test) => {
  alert(test) //test dulu
 }

    return (
      
      <tr onClick={rowClick(dinusian.url)}>
        <td>#</td>
        <td>{dinusian.name}</td>
        <td>{dinusian.role}</td>
        <td>{dinusian.progdi}</td>
      </tr>
      
    )
}

export default Row
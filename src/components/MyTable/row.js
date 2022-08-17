import React, { Fragment, useEffect } from 'react'

const Row = ({dinusian}) => {

    return (
      
      <tr>
        <td>#</td>
        <td>{dinusian.name}</td>
        <td>{dinusian.role}</td>
        <td>{dinusian.progdi}</td>
      </tr>
      
    )
}

export default Row
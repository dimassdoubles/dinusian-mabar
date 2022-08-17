import React, { Fragment, useEffect } from 'react'

const Row = ({dinusian}) => {

    function Move(aboutUrl) {
        window.location.href = aboutUrl;
        return null;
    }

    return (
        <React.Fragment>   
            <tr onClick={() => {Move(dinusian.url)}}>
                <td>{dinusian.name}</td>
                <td>{dinusian.role}</td>
            </tr>
        </React.Fragment>
    )
}

export default Row
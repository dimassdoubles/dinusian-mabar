import React, { Fragment, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Collection from './collection'

const MyTable = ({children}) => {
    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Role</th>
                    <th>Program Studi</th>
                    </tr>
                </thead>
                <Collection/>
            </Table>
        </React.Fragment>
    )
}

export default MyTable
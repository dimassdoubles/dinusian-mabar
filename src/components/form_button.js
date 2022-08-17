import React from "react"
import {Button} from 'react-bootstrap'
import Box from '@mui/material/Box';    

const FormButton = () => {
    return (
        <React.Fragment>
            <Box mt={4} mb={2}>
                <Button onClick={() => {window.location.href = "https://forms.gle/bViQYXUHxykkDBPZ6"}}>
                    Share Your Interest
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default FormButton
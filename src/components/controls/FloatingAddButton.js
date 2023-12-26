import React from 'react';
import { Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MuiButton = () => {
    return (
        <Stack direction="row" style={{ display: "flow-root" }}>
            <Fab color="primary" aria-label="add" style={{ float: "right",  marginTop: '10px' }}>
                <AddIcon /> 
            </Fab>
        </Stack>
    )
}
export default MuiButton;



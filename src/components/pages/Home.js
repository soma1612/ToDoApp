import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';
import { Box, Grid } from '@mui/material';


const Home = () => {
    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <MuiCard page="home"/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            
        </>
    )
}

export default Home;


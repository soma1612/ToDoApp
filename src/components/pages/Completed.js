import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';

const Comlpleted = () => {
    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            <MuiCard page="completed" />
        </>
    )
}

export default Comlpleted;
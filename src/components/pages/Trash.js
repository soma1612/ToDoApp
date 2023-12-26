import React from 'react';
import MuiCard from '../controls/Card';
import MuiSearchBar from '../controls/SearchBox';

const Trash = () => {
    return (
        <>
            <MuiSearchBar />
            <hr style={{ margin: '25px 0px' }} />
            <MuiCard page="trash" />
        </>
    )
}

export default Trash;
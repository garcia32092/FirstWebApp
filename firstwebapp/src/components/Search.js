import React from 'react';
import { TextField } from '@mui/material';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
    return (
        <TextField
            label="Search Songs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
                width: { xs: '140px', sm: '375px', lg: '500px' },
                fontSize: {xs: '0.8rem', sm: '1rem'}
            }}
        />
    );
};

export default SearchComponent;

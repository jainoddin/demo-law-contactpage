// src/components/SearchBar.js

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <Box mb={2} display="flex" alignItems="center">
            <TextField
                label="Search contacts"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSearch} sx={{ ml: 2 }}>
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;

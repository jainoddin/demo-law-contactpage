// src/components/FilterSort.js

import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, FormControl, InputLabel, Select } from '@mui/material';

const FilterSort = ({ onFilterSort }) => {
    const [category, setCategory] = useState('');
    const [organization, setOrganization] = useState('');
    const [sort, setSort] = useState('');

    const handleFilterSort = () => {
        onFilterSort({ category, organization }, sort);
    };

    return (
        <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
            <TextField
                label="Category"
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ mr: 2 }}
            />
            <TextField
                label="Organization"
                variant="outlined"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                sx={{ mr: 2 }}
            />
            <FormControl variant="outlined" sx={{ minWidth: 120, mr: 2 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    label="Sort By"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="last_interaction">Last Interaction</MenuItem>
                    <MenuItem value="category">Category</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleFilterSort}>
                Apply
            </Button>
        </Box>
    );
};

export default FilterSort;

// src/App.js

import React, { useState } from 'react';
import SearchBar from './components/contact/SearchBar';
import FilterSort from './components/contact/FilterSort';
import ContactList from './components/contact/Contactlist';
import { Container, Typography, Button } from '@mui/material';
import { contacts, cases } from './MockData';

const App = () => {
    const [contactData, setContactData] = useState(contacts);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('');

    const fetchContacts = () => {
        // Simulating fetch contacts from backend (would be replaced with actual API call)
        let filteredContacts = contacts.filter(contact => {
            return (
                contact.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.last_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });

        // Apply filters
        if (filters.category) {
            filteredContacts = filteredContacts.filter(contact => contact.category === filters.category);
        }
        if (filters.organization) {
            filteredContacts = filteredContacts.filter(contact => contact.organization.toLowerCase().includes(filters.organization.toLowerCase()));
        }

        // Apply sorting
        if (sort === 'name') {
            filteredContacts.sort((a, b) => (a.first_name + a.last_name).localeCompare(b.first_name + b.last_name));
        } else if (sort === 'last_interaction') {
            filteredContacts.sort((a, b) => new Date(b.last_interaction) - new Date(a.last_interaction));
        }

        setContactData(filteredContacts);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleFilterSort = (filterCriteria, sortCriteria) => {
        setFilters(filterCriteria);
        setSort(sortCriteria);
    };

    const handleLinkToCase = (contactId, caseId) => {
        alert(`Linked contact ID ${contactId} to case ID ${caseId}`);
        // Simulated link to case action
    };

    const handleFetchLegalData = (contactId) => {
        alert(`Fetching legal data for contact ID ${contactId}`);
        // Simulated fetch legal data action
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Contact Management System
            </Typography>
            <SearchBar onSearch={handleSearch} />
            <FilterSort onFilterSort={handleFilterSort} />
            <ContactList
                contacts={contactData}
                cases={cases}
                onLinkToCase={handleLinkToCase}
                onFetchLegalData={handleFetchLegalData}
            />
        </Container>
    );
};

export default App;


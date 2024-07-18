// src/components/ContactList.js

import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const ContactList = ({ contacts }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            {contacts.length > 0 ? (
                <List>
                    {contacts.map((contact) => (
                        <ListItem key={contact.id} divider style={{backgroundColor:"red"}}>
                            <ListItemText
                                primary={`${contact.first_name} ${contact.last_name}`}
                                secondary={
                                    <>
                                        <Typography component="span" variant="body2" color="textPrimary">
                                            Category: {contact.category}
                                        </Typography>
                                        <br />
                                        Organization: {contact.organization}
                                        <br />
                                        Last Interaction: {contact.last_interaction}
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography>No contacts found</Typography>
            )}
        </Paper>
    );
};

export default ContactList;

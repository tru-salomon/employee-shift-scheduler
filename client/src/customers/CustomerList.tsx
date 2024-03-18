import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, CloneButton } from 'react-admin';


export const CustomerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="vat" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="city" />
            <TextField source="website" />
            <EditButton />
            <DeleteButton />
            <CloneButton />
        </Datagrid>
    </List>
);
// in src/MyMenu.js
import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

export const MyMenu = (props) => (
    <Menu {...props}>
        <DashboardMenuItem />
        <MenuItemLink to="/registeration" primaryText="Posts" leftIcon={<BookIcon />}/>
    </Menu>
);
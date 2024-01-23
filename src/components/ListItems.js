import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageUser from "./ManageUser";
import ManageTimeshare from "./ManageTimeshare";
import Dashboard from "../pages/Admin";
import { Link } from 'react-router-dom';

const adminRoutes = [
    {
        path: '/dashboard',
        placeholder: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/manage-user',
        placeholder: 'User',
        component: ManageUser
    },
    {
        path: '/manage-timeshare',
        placeholder: 'Timeshare',
        component: ManageTimeshare
    }
]
export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/admin/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/manage-timeshare">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Timeshares" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/manage-user">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        {/* ... other list items ... */}
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/* ... existing code ... */}
        <ListItemButton component={Link} to="/reports/current-month">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton component={Link} to="/reports/last-quarter">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton component={Link} to="/reports/year-end-sale">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);
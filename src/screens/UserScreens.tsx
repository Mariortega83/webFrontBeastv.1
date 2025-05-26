import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importamos React Router
import { Button, Typography } from '@mui/material';


const UserScreens = () => {
    return (
        <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center' }}>
            User Screens
        </Typography>
    );
};
export default UserScreens;
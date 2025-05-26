import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importamos React Router

import Button from "@mui/material/Button";

import SideMenu from "./SideMenu";
import CustomBoardScreen from "./CustomBoardScreen";

import UserScreens from "./UserScreens";
import ClassScreens from "./ClassScreens";
import { Box } from "@mui/material";
const Home = () => {
    return (
        <Router>
            <Box sx={{ display: "flex", height: "100vh" }}>
                <Box sx={{flex: 1}}><SideMenu /></Box>
                {/* SideMenu fijo en el lado izquierdo */}
                

                {/* Área de contenido (tabla de usuarios) que ocupa el resto del espacio */}
                <Box sx={{ flex: 5}}>
                    {/* Definimos las rutas de tu aplicación */}
                    <Routes>
                        <Route path="/users" element={<UserScreens />} />
                        <Route path="/classes" element={<ClassScreens />} />
                        {/* Agrega más rutas según lo necesites */}
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default Home;
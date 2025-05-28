import React from "react";

import { Button, ButtonGroup, Stack } from "@mui/material";

import UserProfile from "../components/UserProfile";
import SideMenuHd from "../components/SideMenuHd";
import SideMenuBt from "../components/SideMenuBt";

const SideMenu = () => {
    return (

        <Stack

            direction={"column"}
            justifyContent="center"
            gap={30}
            sx={{
                position: "fixed",
                width: "300px",
                height: "100%",
                backgroundColor: "#34495E",
                padding: 2,
            }}
        >
            <SideMenuHd />
            <Stack direction={"column"} gap={2} justifyContent={"flex-start"} alignItems="flex-start" >
                <SideMenuBt content="Users" act="/users" />
                <SideMenuBt content="Clases" act="/classes" />
                <SideMenuBt content="Plan" act="/custom-board" />
                <SideMenuBt content="Dar de alta" act="/sign-users" />
            </Stack >


            <UserProfile />
        </Stack>
    );
};

export default SideMenu;
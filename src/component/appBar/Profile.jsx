import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    // ------------------------this is for profile menu-------------------
    // ----------------------------------------------------------------------

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // -------------------------------------------------------------------------------------

    // ------------------------this is for signout functionality-------------------------------

    // ***************************************************************************************

    const navigate = useNavigate();
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem("token");

        // Redirect to the sign-in page
        navigate("/");
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    return (
        <div style={{marginTop:5}}>
            <AccountCircle onClick={handleProfileMenuOpen} />
            {renderMenu}
        </div>
    );
};

export default Profile;

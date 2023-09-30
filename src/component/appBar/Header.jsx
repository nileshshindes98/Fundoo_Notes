import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../appBar/Header.css'
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from 'react-router-dom';





const Header = ({setItem}) => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#e8eaec', // Change the background color to grey
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: 'auto',
    },
   
    '&:hover': {
      backgroundColor: '#e8eaec', // Keep it grey on hover
    },
    '& .MuiInputBase-input': {
      color: 'black', // Text color inside the input
    },
    '&:focus-within': {
      backgroundColor: 'white', // Change to white when focused
    },
  }));
  

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'grey'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        //here you can increase the width of the search bar
        width: '70ch',  
      },
    },
  }));


  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

  function menuToggle() {
    setItem((prev) => !prev);
  }


  return (
    <div>
      <Box sx={{ flexGrow: 1 ,color:"white"}}>
        <AppBar className='AppbBar'>
          <Toolbar className='Toolbar'> 
          {/* whole appbar css can apply with this parent bar i.e. Toolbar */}
            {/* -----------------------------menu------------------------------------------*/}
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2, color: "grey" }}
            onClick={menuToggle} // Open/close the drawer
          >
            <MenuIcon />
          </IconButton>
          {/* --------------------------google keep name---------------------------- */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              class="gb_Hc gb_Hd"
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, color: "black" }}
            >
              Keep
            </Typography>
          </div>            
          
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* ------------------------------------------box------------------------------ */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* -----------------------------------refresh-------------------------------------------- */}
            <IconButton edge="start" color="black">
              <RefreshIcon />
            </IconButton>

            <IconButton size="large" color="black" >
            {/* onClick={setnote3} */}
              <ViewStreamIcon />
            </IconButton>

            {/* ------------------------------setting-------------------------------------- */}
            <IconButton size="large" color="black">
              <SettingsOutlinedIcon sx={{ color: "grey" }} />
            </IconButton>

            {/* ------------------------------appIcon------------------------------------- */}
            <IconButton color="black">
              <AppsIcon />
            </IconButton>

            {/* ------------------------------profile-icon---------------------------------------- */}
            <MenuItem onClick={handleProfileMenuOpen}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="black"
              >
                <AccountCircle />
              </IconButton>
            </MenuItem>
          </Box>

          </Toolbar>
        </AppBar>
        
        {renderMenu}
      </Box>
    </div>
  )
}

export default Header
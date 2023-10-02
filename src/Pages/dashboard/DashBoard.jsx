import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Notes from '../../component/drawer/Notes';
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import Refresh from '../../component/appBar/Refresh';
import AppBarToggle from '../../component/appBar/AppBarToggle';
import Setting from '../../component/appBar/Setting';
import Profile from '../../component/appBar/Profile';
import AppIcons from '../../component/appBar/AppIcons';
import SearchBar from '../../component/appBar/SearchBar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Notes");
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [toggle,setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" elevation={1} sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => { setOpen(!open) }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
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

            <SearchBar />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton>
                <Refresh />
              </IconButton>
              <IconButton >
                <AppBarToggle  handleToggle={handleToggle} toggle={toggle}/>
              </IconButton>
              <IconButton >
                <Setting />
              </IconButton>
              <IconButton >
                <AppIcons />
              </IconButton>
              <IconButton>
                <Profile />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Notes")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    mr: !open ? 2 : 4,
                    justifyContent: 'center',
                  }}
                >
                  <LightbulbOutlinedIcon />

                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Reminders")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    mr: !open ? 2 : 4,
                    justifyContent: 'center',
                  }}
                >
                  <NotificationsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Reminders" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("EditLables")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    mr: !open ? 2 : 4,
                    justifyContent: 'center',
                  }}
                >
                  <CreateOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Labels" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Archive")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    mr: !open ? 2 : 4,
                    justifyContent: 'center',
                  }}
                >
                  <ArchiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Bin")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    mr: !open ? 2 : 4,
                    justifyContent: 'center',
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Bin" />
              </ListItemButton>
            </ListItem>

          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Notes menudata={menudata} toggleView={toggle} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

        </Box>
      </Box>
    </>


  );
}

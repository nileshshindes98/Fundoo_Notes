import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Notes from "../../component/mainContent/Notes";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import AppBarToggle from "../../component/appBar/AppBarToggle";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Profile from "../../component/appBar/Profile";
import AppsIcon from "@mui/icons-material/Apps";
import SearchBar from "../../component/appBar/SearchBar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "../dashboard/DashBoard.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      border: "none",
      // Remove the border
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      border: "none", // Remove the border
    },
  }),
}));

function DashBoard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Notes");
  // const isMobile = useMediaQuery('(max-width:1000px)');
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //this handleToggle for AppBar Toggle that means for grid/list view
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [listToggle, setListToggle] = useState(false);
  const listViewHandle = () => {
    setListToggle(!listToggle);
  };

  const [firstToggle, setfirstToggle] = useState(false);
  const firstNoteToggle = () => {
    setfirstToggle(!firstToggle);
  };

  const handleItemClick = (item) => {
    setMenudata(item);
  };

  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  // Add searchQuery state
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* this is header         */}
        <AppBar
          position="fixed"
          elevation={1}
          sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
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

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <Box sx={{ flexGrow: 1 }} />

            <div class="icon-container">
              <RefreshIcon />
              <AppBarToggle
                handleToggle={handleToggle}
                toggle={toggle}
                listViewHandle={listViewHandle}
                listToggle={listToggle}
              />
              <SettingsOutlinedIcon />
              <AppsIcon />
              <Profile />
            </div>
          </Toolbar>
        </AppBar>
        {/* this left bar */}
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              className={`list-item ${menudata === "Notes" ? "selected" : ""}`}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleItemClick("Notes")}
            >
              <ListItemButton
                className="list-item-button"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    mr: !open ? 2 : 4,
                    justifyContent: "center",
                  }}
                >
                  <LightbulbOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItemButton>
            </ListItem>

            <ListItem
              className={`list-item ${menudata === "Reminders" ? "selected" : ""
                }`}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleItemClick("Reminders")}
            >
              <ListItemButton
                className="list-item-button"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    mr: !open ? 2 : 4,
                    justifyContent: "center",
                  }}
                >
                  <NotificationsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Reminders" />
              </ListItemButton>
            </ListItem>

            <ListItem
              className={`list-item ${menudata === "EditLables" ? "selected" : ""
                }`}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleItemClick("EditLables")}
            >
              <ListItemButton
                className="list-item-button"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    mr: !open ? 2 : 4,
                    justifyContent: "center",
                  }}
                >
                  <CreateOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Labels" />
              </ListItemButton>
            </ListItem>

            <ListItem
              className={`list-item ${menudata === "Archive" ? "selected" : ""
                }`}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleItemClick("Archive")}
            >
              <ListItemButton
                className="list-item-button"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    mr: !open ? 2 : 4,
                    justifyContent: "center",
                  }}
                >
                  <ArchiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItemButton>
            </ListItem>

            <ListItem
              className={`list-item ${menudata === "Bin" ? "selected" : ""}`}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleItemClick("Bin")}
            >
              <ListItemButton
                className="list-item-button"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 5.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    mr: !open ? 2 : 4,
                    justifyContent: "center",
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
          <Notes
            menudata={menudata}
            toggleView={toggle}
            displayView={listToggle}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            firstNoteToggle={firstToggle}
          />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>
    </>
  );
}
export default DashBoard;

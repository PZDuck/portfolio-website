import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import style from "./Header.module.scss";

import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import FeedbackIcon from "@material-ui/icons/Feedback";

import {
  HOME,
  PORTFOLIO,
  FEEDBACK,
  ABOUTME,
  RESUME,
} from "../../../constants/routes";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    color: "#000000",
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    display: "flex",
    alignItems: "center",
    color: "#000000",
    textDecoration: "none",
  },
  toolbar: {
    minHeight: "24px",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Box display="flex" alignItems="center" className={style.wrap}>
            <NavLink to="/" className={style.logo}>
              Dmitriy Polumiskov
            </NavLink>
            <Box component={Hidden} smUp>
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={"temporary"}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.toolbar} />
        <List>
          {[
            { name: "Home", icon: <HomeIcon />, link: HOME },
            { name: "Projects", icon: <AssignmentIcon />, link: PORTFOLIO },
            { name: "Resume", icon: <DescriptionIcon />, link: RESUME },
            { name: "About Me", icon: <PersonIcon />, link: ABOUTME },
            { name: "Feedback", icon: <FeedbackIcon />, link: FEEDBACK },
          ].map((item) => (
            <>
              {item.name === "Resume" ? (
                <ListItem button key={item.name}>
                  <a href={item.link} className={classes.link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </a>
                </ListItem>
              ) : (
                <ListItem button key={item.name}>
                  <NavLink to={item.link} className={classes.link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </NavLink>
                </ListItem>
              )}{" "}
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;

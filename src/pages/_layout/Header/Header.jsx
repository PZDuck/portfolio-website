import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const Header = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Container>
        <Toolbar disableGutters={true} component={Box} flexWrap="wrap">
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
      </Container>
    </AppBar>
  );
};
export default Header;

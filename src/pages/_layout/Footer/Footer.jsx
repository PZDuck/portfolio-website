import React from "react";
import style from "./Footer.module.scss";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Footer = () => {
  return (
    <Box component="footer" className={style.root}>
      <Container>
        © {new Date().getFullYear()} Dmitriy Polumiskov
      </Container>
    </Box>
  );
};
export default Footer;

import React from "react";
import style from "./Error404.module.scss";
import img from "../../assets/img/404.svg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet";

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Not Found!</title>
        <meta
          name="description"
          content="Unfortunately, the page you are trying to access does not exist."
        />
      </Helmet>
      <Container>
        <Box mt={5}>
          <Typography align="center" component="div">
            <img src={img} alt="Page not found" />
            <h1 className={style.title}>404</h1>
            <div className={style.subTitle}>Page not found</div>
            <p className={style.text}>
              Unfortunately, the page you are trying to access does not exist.
            </p>
            <a href="/" className={style.goHome}>
              Back to Home Page
            </a>
          </Typography>
        </Box>
      </Container>
    </>
  );
};
export default Error404;

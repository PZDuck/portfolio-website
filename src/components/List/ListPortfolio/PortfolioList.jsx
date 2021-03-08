import React from "react";
import Grid from "@material-ui/core/Grid";
import style from "./PortfolioListItem.module.scss";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const PortfolioList = ({ portfolioList }) => {
  const portfolioLists = portfolioList.map((article, index) => (
    <Grid item md={3} key={index}>
      <PortfolioListItem index={index} articleItem={article} />
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={3}>
        {portfolioLists}
      </Grid>
    </>
  );
};

const PortfolioListItem = ({ articleItem }) => {
  return (
    <div className={style.item}>
      <Link
        to={{
          pathname: `/portfolio/${articleItem.page_url}`,
          state: articleItem,
        }}
        className={style.link}
      >
        <div className={style.img}>
          <img src={articleItem.img} alt={articleItem.title} />
        </div>
        <Box className={style.footer} p={2}>
          <div className={style.name}>{articleItem.title}</div>
        </Box>
      </Link>
    </div>
  );
};
export default PortfolioList;

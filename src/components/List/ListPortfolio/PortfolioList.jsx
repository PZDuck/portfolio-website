import React from "react";
import Grid from "@material-ui/core/Grid";
import style from "./PortfolioListItem.module.scss";
import Box from "@material-ui/core/Box";
import { getImg } from "../../../utils/functionHelper";

const PortfolioList = ({ portfolioList  }) => {
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
  console.log(getImg(articleItem.img))
  return (
    <div className={style.item}>
      <a href={articleItem.url} className={style.link}>
        <div className={style.img}>
          <img src={articleItem.img} alt={articleItem.title} />
        </div>
        <Box className={style.footer} p={2}>
          <div className={style.name}>{articleItem.title}</div>
          <div className={style.category}>Категория</div>
        </Box>
      </a>
    </div>
  );
};
export default PortfolioList;

import React from "react";
import Grid from "@material-ui/core/Grid";
import WidgetPortfolioItem from "./WidgetPortfolioItem"


const WidgetPortfolio = ({ portfolioList }) => {
   
    const portfolioLists = portfolioList.map((portfolio, index) => (
        <Grid item md={3} key={index}>
            <WidgetPortfolioItem index={index} portfolioItem={portfolio} />
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

export default WidgetPortfolio;

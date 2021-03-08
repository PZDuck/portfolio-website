import React from "react";
import WidgetPortfolio from "./WidgetPortfolio";
import portfolioList from "../../../constants/portfolio";

const WidgetPortfolioContainer = () => {
  return <WidgetPortfolio portfolioList={portfolioList} />;
};

export default WidgetPortfolioContainer;

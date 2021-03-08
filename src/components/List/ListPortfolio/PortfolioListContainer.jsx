import React, { Component } from "react";
import PortfolioList from "./PortfolioList";
import portfolioList from "../../../constants/portfolio";

class PortfolioListContainer extends Component {
  render() {
    return <PortfolioList portfolioList={portfolioList} />;
  }
}

export default PortfolioListContainer;

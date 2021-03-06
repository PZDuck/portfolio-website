import React, { Component } from "react";
import PortfolioList from "./PortfolioList";

class PortfolioListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { portfolioList: [{
        title: "WebGwent",
        img: "https://i.ibb.co/jZk0CzD/gw.png",
        url: "https://vigilant-mirzakhani-9a09f1.netlify.app/"
      }, 
      {
        title: "RAWG Playground",
        img: "https://i.ibb.co/VNZDn5T/rawg1.png",
        url: "https://fathomless-retreat-05089.herokuapp.com/"
      },
      {
        title: "Warbler",
        img: "https://i.ibb.co/5LwPrMk/wr.png",
        url: "thawing-spire-34431.herokuapp.com/"
      },
      {
        title: "Gradient Learning Platform",
        img: "https://i.ibb.co/rfvQ9fV/grad.png",
        url: "http://67.205.173.77:8000/"
      }]
    }
  }

  render() {

    return (
      <PortfolioList
        portfolioList={this.state.portfolioList}
      />
    );
  }
}

export default PortfolioListContainer
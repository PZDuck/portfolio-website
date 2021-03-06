import React from "react";
import WidgetPortfolio from "./WidgetPortfolio";

const WidgetPortfolioContainer = () => {
  const portfolioList = [{
    title: "WebGwent",
    img: "https://i.ibb.co/jZk0CzD/gw.png",
    url: "https://vigilant-mirzakhani-9a09f1.netlify.app/",
    tech: [
      "https://i.ibb.co/54mRK6Y/react.png",
      "https://i.ibb.co/X2jqBvL/node.png",
      "https://i.ibb.co/vDQKbL5/psql.png",
      "https://i.ibb.co/TmYQVrr/socket.png"
    ]
  }, 
  {
    title: "RAWG Playground",
    img: "https://i.ibb.co/VNZDn5T/rawg1.png",
    url: "https://fathomless-retreat-05089.herokuapp.com/",
    tech: [
      "https://i.ibb.co/qryqSzR/flask.png",
      "https://i.ibb.co/qs480KP/python.png",
      "https://i.ibb.co/KwQv15s/mongodb.png",
    ]
  },
  {
    title: "Warbler",
    img: "https://i.ibb.co/5LwPrMk/wr.png",
    url: "thawing-spire-34431.herokuapp.com/",
    tech: [
      "https://i.ibb.co/qryqSzR/flask.png",
      "https://i.ibb.co/qs480KP/python.png",
      "https://i.ibb.co/vDQKbL5/psql.png"
    ]
  },
  {
    title: "Gradient Learning Platform",
    img: "https://i.ibb.co/rfvQ9fV/grad.png",
    url: "http://67.205.173.77:8000/",
    tech: [
      "https://i.ibb.co/t2y7kCQ/django.png",
      "https://i.ibb.co/qs480KP/python.png",
      "https://i.ibb.co/54mRK6Y/react.png",
      "https://i.ibb.co/vDQKbL5/psql.png",
    ]
  }]

  return <WidgetPortfolio portfolioList={portfolioList} />;
}

export default WidgetPortfolioContainer

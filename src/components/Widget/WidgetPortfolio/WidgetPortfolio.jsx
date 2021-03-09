import React from "react";
import WidgetPortfolioItem from "./WidgetPortfolioItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./WidgetPortfolio.module.scss";

const WidgetPortfolio = ({ portfolioList }) => {
  const portfolioLists = portfolioList.map((portfolio, index) => (
    <WidgetPortfolioItem index={index} portfolioItem={portfolio} />
  ));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={5000}
        responsive={responsive}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true}
        containerClass={style.carousel}
      >
        {portfolioLists}
      </Carousel>
    </>
  );
};

export default WidgetPortfolio;

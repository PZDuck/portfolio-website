import React from "react";
import PortfolioSinglePage from "./PortfolioSinglePage";
import Breadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";
import Page from "../_layout/Page/Page";
import { PORTFOLIO } from "../../constants/routes";
import { useLocation } from "react-router-dom";

const PortfolioSingleContainer = () => {
  let portfolioSingle = useLocation().state;

  const breadcrumbsConstructor = [
    {
      name: "Projects",
      url: `${PORTFOLIO}`,
    },
    {
      name: `${portfolioSingle.title}`,
      url: `${portfolioSingle.url}`,
    },
  ];

  return (
    <Page
      pageMeta={{
        title: `${portfolioSingle.title}`,
        description: "title",
      }}
    >
      <PortfolioSinglePage
        portfolioSingle={portfolioSingle}
        breadcrumbs={<Breadcrumbs data={breadcrumbsConstructor} />}
      />
    </Page>
  );
};

export default PortfolioSingleContainer;

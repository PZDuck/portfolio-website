import React from "react";
import PortfolioSinglePage from "./PortfolioSinglePage";
import Breadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";
import Page from "../_layout/Page/Page";
import { PORTFOLIO } from "../../constants/routes";

class PortfolioSingleContainer extends React.Component {

  render() {
    if (!this.props.portfolioSingle) return false;
    const breadcrumbsConstructor = [
      {
        name: "Портфолио",
        url: `${PORTFOLIO}`
      },
      {
        name: `${this.props.portfolioSingle.title}`,
        url: `${this.props.match.url}`
      }
    ];

    return (
      <Page
        pageMeta={{
          title: `${this.props.portfolioSingle.title}`,
          description: "Бла бла бла"
        }}
      >
        <PortfolioSinglePage
          portfolioSingle={this.props.portfolioSingle}
          breadcrumbs={<Breadcrumbs data={breadcrumbsConstructor} />}
        />
      </Page>
    );
  }
}

export default PortfolioSingleContainer

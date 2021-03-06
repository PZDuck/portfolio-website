import React from "react";
import Container from "@material-ui/core/Container";
import PortfolioListContainer from "../../components/List/ListPortfolio/PortfolioListContainer";
import Heading from "../../components/common/Heading/Heading";
import Box from "@material-ui/core/Box";
import Page from "../_layout/Page/Page";

const PortfolioPage = () => {
  return (
    <Page
      pageMeta={{
        title: "My Projects",
        description: "projects"
      }}
    >
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title={"My Projects"} subtitle="Portfolio" Tag={"h1"} />
          <div className="article-wrap">
            <PortfolioListContainer limit={8} pagination={true} />
          </div>
        </Container>
      </Box>
    </Page>
  );
};
export default PortfolioPage;

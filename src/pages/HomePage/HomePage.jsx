import React from "react";
import Heading from "../../components/common/Heading/Heading";
import Hello from "../../components/Hello/Hello";
import WidgetFeedback from "../../components/Widget/WidgetFeedback/WidgetFeedback";
import WidgetPortfolioContainer from "../../components/Widget/WidgetPortfolio/WidgetPortfolioContainer";
import WidgetResumeContainer from "../../components/Widget/WidgetResume/WidgetResumeContainer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Page from "../_layout/Page/Page";

const HomePage = () => {


  return (
    <Page
      pageMeta={{
        title: "Dmitriy Polumiskov - Personal Website",
        description: "title"
      }}
    >
      <Hello />
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title={"My Projects"} subtitle="Portfolio" Tag={"h1"} />
          <WidgetPortfolioContainer />
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              size="large"
              component={NavLink}
              color="primary"
              to="/portfolio"
            >
              My Projects
            </Button>
          </Box>
        </Container>
      </Box>

      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title={"What I Do"} Tag={"h2"} />
          <WidgetResumeContainer />
        </Container>
      </Box>

      <Box component="section" pt={8} pb={8} bgcolor="bgDark" color="white">
        <WidgetFeedback />
      </Box>
    </Page>
  );
};
export default HomePage;

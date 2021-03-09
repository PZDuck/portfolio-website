import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Heading from "../../common/Heading/Heading";
import Grid from "@material-ui/core/Grid";
import WidgetResumeDocumentCard from "./WidgetResumeDocumentCard";

import resume from "../../../constants/resume";

const WidgetResumeDocument = () => {
  return (
    <Box position="relative">
      <Container>
        <Heading title="My Resume" Tag={"h2"} />
        <Grid container spacing={3}>
          {resume.map((resume) => {
            return <WidgetResumeDocumentCard resume={resume} />;
          })}
        </Grid>
      </Container>
    </Box>
  );
};
export default WidgetResumeDocument;

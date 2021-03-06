import React from "react";
import style from "./WidgetFeedback.module.scss";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Heading from "../../common/Heading/Heading";

const WidgetFeedback = () => {
  return (
    <Box position="relative">
      <div className={style.bg}>Feedback</div>
      <Container>
        <Heading
          title="Contact Me"
          Tag={"h2"}
        />
      </Container>
    </Box>
  );
};
export default WidgetFeedback;

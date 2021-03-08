import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../_layout/Page/Page";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Heading from "../../components/common/Heading/Heading";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import HttpRoundedIcon from "@material-ui/icons/HttpRounded";
import WidgetResumeContainer from "../../components/Widget/WidgetResume/WidgetResumeContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  avatar: {
    margin: "1em auto",
    height: 200,
    width: 200,
  },
}));

const AboutMePage = () => {
  const classes = useStyles();
  return (
    <Page
      pageMeta={{
        title: "About Me",
        description: "about",
      }}
    >
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Avatar
            alt="ava"
            src="https://i.ibb.co/vjf4TbR/161499843828770798.jpg"
            className={classes.avatar}
          />
          <Heading
            title={"About Me"}
            subtitle="Let's get to know each other"
            Tag={"h1"}
          />
          <Typography align="center">
            Hello there! I am Dmitriy Polumiskov. I am a Software Engineer and a
            Cybersecurity Specialist with a BBA Degree in Computer Information
            Systems. I am a highly driven individual and I seek out challenges
            within each position and create innovative solutions. In my own time
            I enjoy developing and deploying small web applications for various
            use purposes, generally for personal convenience.
          </Typography>
          <div className={classes.root}>
            <Chip
              icon={<CakeRoundedIcon fontSize="small" />}
              label="23 y.o."
              color="primary"
            />
            <Chip
              icon={<LocationCityRoundedIcon fontSize="small" />}
              label="Brooklyn, NY"
              color="primary"
            />
            <Chip
              icon={<SchoolRoundedIcon fontSize="small" />}
              label="CUNY Baruch College"
              color="primary"
            />
            <Chip
              icon={<HttpRoundedIcon fontSize="small" />}
              label="Web Development"
              color="primary"
            />
          </div>
        </Container>
      </Box>
      <Box component="section" pt={8} pb={8}>
        <Container>
          <Heading title={"My Skills"} Tag={"h2"} />
          <WidgetResumeContainer />
        </Container>
      </Box>
    </Page>
  );
};
export default AboutMePage;

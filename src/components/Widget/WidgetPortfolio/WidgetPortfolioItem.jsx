import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "all 0.3s",
    "&:hover": {
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      transform: "translateY(-1em)",
    },
    "&:hover $avatar": {
      margin: "0 0.3em",
      overflow: "visible",
    },
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(3)}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatars: {
    padding: 0,
  },
  avatar: {
    display: "inline-block",
    transition: "all 0.5s",
    "&:not(:first-of-type)": {
      marginLeft: muiBaseTheme.spacing(-0.5),
    },
  },
});

const WidgetPortfolioItem = ({ portfolioItem, classes }) => {
  return (
    <Link
      to={{
        pathname: `/portfolio/${portfolioItem.page_url}`,
        state: portfolioItem,
      }}
      className={classes.link}
    >
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={portfolioItem.img} />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {portfolioItem.title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {portfolioItem.thumbnail}
          </Typography>
          <Divider className={classes.divider} light />

          <CardContent className={classes.avatars}>
            {portfolioItem.tech_img.map((tech) => (
              <Avatar className={classes.avatar} key={tech} src={tech} />
            ))}
          </CardContent>
        </CardContent>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(WidgetPortfolioItem);

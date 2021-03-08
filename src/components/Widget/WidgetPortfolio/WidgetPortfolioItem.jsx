import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
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
    "&:hover $avatar": {
      margin: "0 0.3em",
      border: "none",
      transition: "all 0.5s",
    },
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    transition: "all 0.5s",
    "&:not(:first-of-type)": {
      marginLeft: muiBaseTheme.spacing(-1.5),
    },
  },
});

const WidgetPortfolioItem = ({ portfolioItem, classes }) => {
  return (
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
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          We are going to learn different kinds of species in nature that live
          together to form amazing environment.
        </Typography>
        <Divider className={classes.divider} light />

        <CardContent className={classes.avatars}>
          {portfolioItem.tech_img.map((tech) => (
            <Avatar className={classes.avatar} key={tech} src={tech} />
          ))}
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(WidgetPortfolioItem);

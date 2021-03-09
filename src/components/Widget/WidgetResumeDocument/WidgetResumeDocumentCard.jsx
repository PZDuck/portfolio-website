import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import GetAppIcon from "@material-ui/icons/GetApp";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const styles = (muiBaseTheme) => ({
  action: {
    alignSelf: "center",
  },
});

const WidgetResumeDocumentCard = ({ resume, classes }) => {
  const style = classes;

  const handleOnClick = () => {
    window.open(resume.url);
  };

  return (
    <Grid item lg={4} xs={12}>
      <Card>
        <CardContent>
          <CardHeader
            classes={{ action: style.action }}
            avatar={<img src={resume.icon} alt="icon" />}
            action={
              <IconButton onClick={handleOnClick} aria-label="download">
                <GetAppIcon />
              </IconButton>
            }
            title={resume.name}
            subheader={resume.size}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(WidgetResumeDocumentCard);

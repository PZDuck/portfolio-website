import React from "react";
import style from "./PortfolioSingle.module.scss";
import LinkIcon from "@material-ui/icons/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const PortfolioSinglePage = ({ portfolioSingle, breadcrumbs }) => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        {breadcrumbs}
        <h1 className={style.h1}>{portfolioSingle.title}</h1>
        <div className={style.wrap}>
          <div className={style.left}>
            <img src={portfolioSingle.img} alt="" />
          </div>
          <div className={style.right}>
            <div className={style.projectItem}>
              <div className={style.title}>Project Demo</div>
              <ul className={style.mainInfo}>
                <li className={style.mainInfoItem}>
                  <LinkIcon />
                  <a
                    href={portfolioSingle.url}
                    target="_self"
                    className={style.url}
                  >
                    {portfolioSingle.url}
                  </a>
                </li>
              </ul>
              <p>{portfolioSingle.text}</p>
            </div>
            <div className={style.projectItem}>
              <div className={style.title}>Project Description</div>
              <List dense={true} aria-label="main mailbox folders">
                {portfolioSingle.description.map((desc) => {
                  return (
                    <ListItem>
                      <ListItemIcon>
                        <DoneAllIcon />
                      </ListItemIcon>
                      {desc}
                    </ListItem>
                  );
                })}
              </List>
            </div>
            <div className={style.projectItem}>
              <div className={style.title}>Tech Stack</div>
              <Box component="ul" display="Flex" className={style.tags}>
                {portfolioSingle.tech.map((tech) => {
                  return (
                    <li className={style.tagsItem}>
                      <span className={style.tagsName}>{tech}</span>
                    </li>
                  );
                })}
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};
export default PortfolioSinglePage;

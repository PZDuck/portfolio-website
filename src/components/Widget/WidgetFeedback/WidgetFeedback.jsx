import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Heading from "../../common/Heading/Heading";

import Grid from "@material-ui/core/Grid";
import style from "./WidgetFeedback.module.scss";
import { IconContext } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const WidgetFeedback = () => {
  return (
    <Box position="relative">
      <Container>
        <Heading title="Contact Me" Tag={"h2"} />

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className={style.contactDetailsItem}>
              <IconContext.Provider value={{ size: "3em", color: "#212333" }}>
                <div>
                  <FaPhoneAlt />
                </div>
              </IconContext.Provider>

              <a href="tel:3478428407" className={style.contactDetailsItemLink}>
                +1 347 842 8407
              </a>
              <div className={style.contactDetailsItemText}>by Phone</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={style.contactDetailsItem}>
              <IconContext.Provider value={{ size: "3em", color: "#212333" }}>
                <div>
                  <IoMailOutline />
                </div>
              </IconContext.Provider>
              <a
                href="mailto:dmitriy.polumiskov@gmail.com"
                className={style.contactDetailsItemLink}
              >
                dmitriy.polumiskov@gmail.com
              </a>
              <div className={style.contactDetailsItemText}>by Email</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={style.contactDetailsItem}>
              <IconContext.Provider value={{ size: "3em", color: "#212333" }}>
                <div>
                  <IoMdContacts />
                </div>
              </IconContext.Provider>
              <Box display="flex" justifyContent="center">
                <Box mr={1}>
                  <a
                    href="https://vk.com/peendos"
                    target="noopener noreferrer"
                    className={style.contactDetailsItemLink}
                  >
                    VK
                  </a>
                </Box>
                <Box ml={1}>
                  <a
                    href="https://t.me/peendos"
                    target="noopener noreferrer"
                    className={style.contactDetailsItemLink}
                  >
                    Telegram
                  </a>
                </Box>
                <Box ml={1}>
                  <a
                    href="https://www.linkedin.com/in/dmitriy-polumiskov/"
                    target="noopener noreferrer"
                    className={style.contactDetailsItemLink}
                  >
                    LinkedIn
                  </a>
                </Box>
              </Box>
              <div className={style.contactDetailsItemText}>
                in Social Media
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default WidgetFeedback;

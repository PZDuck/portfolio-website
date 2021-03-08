import React from "react";
import style from "./Feedback.module.scss";
import Heading from "../../components/common/Heading/Heading";
import { Form, FormField } from "../../components/common/Form/Form";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { IconContext } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const FeedbackPage = () => {
  return (
    <>
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title="Contact Me" subtitle="Any thoughts?" Tag={"h1"} />
          <Box mt={5} mb={7}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <div className={style.contactDetailsItem}>
                  <IconContext.Provider value={{ size: "3em" }}>
                    <div>
                      <FaPhoneAlt />
                    </div>
                  </IconContext.Provider>

                  <a
                    href="tel:3478428407"
                    className={style.contactDetailsItemLink}
                  >
                    +1 347 842 8407
                  </a>
                  <div className={style.contactDetailsItemText}>by Phone</div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.contactDetailsItem}>
                  <IconContext.Provider value={{ size: "3em" }}>
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
                  <IconContext.Provider value={{ size: "3em" }}>
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
                  </Box>
                  <div className={style.contactDetailsItemText}>
                    in Social Media
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box component="section" pt={8} pb={8}>
        <Container>
          <Heading title="Message Me Directly!" subtitle="or" Tag={"h2"} />
          <Box maxWidth={1000} m="auto">
            <Form onSubmit={() => console.log("test")}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <FormField placeholder="Name" />
                </Grid>
                <Grid item md={6}>
                  <FormField placeholder="Email" />
                </Grid>
              </Grid>
              <Box mt={4}>
                <FormField placeholder="Topic" />
              </Box>
              <Box mt={4}>
                <FormField
                  placeholder="What's on your mind?"
                  multiline={true}
                  rows={4}
                />
              </Box>
              <Box mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Send
                </Button>
              </Box>
            </Form>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default FeedbackPage;

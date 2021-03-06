import React from "react";
import style from "./Feedback.module.scss";
import Heading from "../../components/common/Heading/Heading";
import { Form, FormField } from "../../components/common/Form/Form";
import icons from "../../assets/img/icons.svg";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SnackbarNotification from "../../components/common/Snackbar/SnackbarNotification";

const FeedbackPage = ({ formLoading }) => {
  return (
    <>
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading
            title="Contact Me"
            subtitle="Any thoughts?"
            Tag={"h1"}
          />
          <Box mt={5} mb={7}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <div className={style.contactDetailsItem}>
                  <svg
                    className={`icon-like-filled ${style.contactDetailsItemImg}`}
                  >
                    <use xlinkHref={`${icons}#icon-phone`} />
                  </svg>
                  <a
                    href="tel:3478428407"
                    className={style.contactDetailsItemLink}
                  >
                    +1 347 842 8407
                  </a>
                  <div className={style.contactDetailsItemText}>
                    by Phone
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.contactDetailsItem}>
                  <svg
                    className={`icon-like-filled ${style.contactDetailsItemImg}`}
                  >
                    <use xlinkHref={`${icons}#icon-envelope`} />
                  </svg>
                  <a
                    href="mailto:kondakov8@gmail.com"
                    className={style.contactDetailsItemLink}
                  >
                    dmitriy.polumiskov@gmail.com
                  </a>
                  <div className={style.contactDetailsItemText}>
                    by Email
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.contactDetailsItem}>
                  <svg
                    className={`icon-like-filled ${style.contactDetailsItemImg}`}
                  >
                    <use xlinkHref={`${icons}#icon-like-filled`} />
                  </svg>
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
          <Heading
            title="Message Me Directly!"
            subtitle="or"
            Tag={"h2"}
          />
          <Box maxWidth={1000} m="auto">
            <Form onSubmit={() => (console.log('test'))}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <FormField placeholder="Name"/>
                </Grid>
                <Grid item md={6}>
                  <FormField placeholder="Email"/>
                </Grid>
              </Grid>
              <Box mt={4}>
                  <FormField placeholder="Topic"/>
              </Box>
              <Box mt={4}>
                  <FormField placeholder="What's on your mind?" multiline={true} rows={4}/>
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
            {formLoading && (
              <SnackbarNotification
                variant="success"
                vertical="bottom"
                horizontal="center"
                status={true}
                message="Thank you for messaging me! I'll reach back to you as soon as possible!"
              />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default FeedbackPage;

import React, { Component } from "react";
import FeedbackPage from "./FeedbackPage";
import Page from "../_layout/Page/Page";

class FeedbackContainer extends Component {
  state = {
    formLoading: false
  };

  onSubmit = formData => {
    this.setState({ formLoading: true });
    this.props.addFeedbackRequest(formData);
  };

  render() {
    return (
      <Page
        pageMeta={{
          title: "Contact Me",
          description: "contact"
        }}
      >
        <FeedbackPage
          {...this.props}
          onSubmit={this.onSubmit}
          formLoading={this.state.formLoading}
        />
      </Page>
    );
  }
}

export default FeedbackContainer

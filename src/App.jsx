import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./assets/styles/styles.scss";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import Error404 from "./pages/Error404Page/Error404";
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";
import PortfolioSingleContainer from "./pages/PortfolioSinglePage/PortfolioSingleContainer";
import PageHome from "./pages/HomePage/HomePage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={PageHome} />
          <Route exact path={ROUTES.PORTFOLIO} component={PortfolioPage} />
          <Route
            path={ROUTES.PORTFOLIO_SINGLE}
            component={PortfolioSingleContainer}
          />
          <Route path={ROUTES.FEEDBACK} component={FeedbackContainer} />
          <Route path={ROUTES.ABOUTME} component={AboutMePage} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;

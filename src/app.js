import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import * as media from "./mediaBounds";

import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";

import "./css/app.scss";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <SideNavBar {...this.props} />
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props} />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}

const ContentWrapper = styled.main`
  @media (min-width: ${media.mobileBound}) {
    padding-left: 260px;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;

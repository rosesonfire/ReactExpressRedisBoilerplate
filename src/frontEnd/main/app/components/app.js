import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { login, logout } from "./../actions/auth";

@connect(store => {

  return {
    pages: (store.pages && store.pages.pages) ? store.pages.pages : [],
    isAuthenticated: store.auth.isAuthenticated
  };

}, dispatch => {

  const onLogin = () => {
    dispatch(login);
  };

  const onLogout = () => {
    dispatch(logout);
  };

  // use RxJS to do this kinda stuff
  window.streamAuthStatus(onLogin, onLogout);

  return {};

})
export default class App extends Component {

  render() {

    if (this.props.isAuthenticated) {

      return (
        <HashRouter>
          <div>
            <div id="nav">
              <Nav bsStyle="pills" activeKey={1} >
                {
                  this.props.pages.map((page, i) => {
                    return (
                      <LinkContainer to={page.href} key={i} >
                        <NavItem eventKey={i}>{page.title}</NavItem>
                      </LinkContainer>
                    );
                  })
                }
              </Nav>
            </div>
            {
              this.props.pages.map((page, i) => {
                return (
                  <div className="page" key={i}>
                    <Route path={page.href} component={page} />
                  </div>
                );
              })
            }
          </div>
        </HashRouter>);

    } else if (this.props.isAuthenticated === false) {

      return <div>Please login</div>;
    } else {

      return (
        <div>Loading ...</div>
      );
    }

  }
}
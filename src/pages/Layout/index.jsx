import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import {
  setCompanyName,
  setCompanyColor
} from "../../redux/actions/main.actions";
import StartPage from "../StartPage";
import Colors from "../Colors";
import Design from "../Design";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import history from "../../history";

import "./style.scss";

const mapStateToProps = state => ({
  companyName: state.main.companyName,
  companyColor: state.main.companyColor
});

const mapDispatchToProps = dispatch => ({
  setCompanyName: data => dispatch(setCompanyName(data)),
  setCompanyColor: data => dispatch(setCompanyColor(data))
});

function Layout(props) {
  const { setCompanyName, companyName, setCompanyColor, companyColor } = props;

  return (
    <div className="Layout">
      <Header />
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <StartPage {...props} setCompanyName={setCompanyName} />
            )}
          />
          <Route
            exact
            path="/colors"
            render={props => (
              <Colors
                {...props}
                setCompanyColor={setCompanyColor}
                companyColor={companyColor}
              />
            )}
          />
          <Route
            exact
            path="/design"
            render={props => (
              <Design
                {...props}
                companyName={companyName}
                companyColor={companyColor}
              />
            )}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

const layoutWithRouter = withRouter(Layout);
export default connect(mapStateToProps, mapDispatchToProps)(layoutWithRouter);

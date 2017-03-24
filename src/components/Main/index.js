import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { history } from '../../router';
import Header from '../../components/Header';
import BrowserState from '../../containers/BrowserState';

import paths from '../../paths';
import Homepage from '../../components/Homepage';
import ContactPage from '../../components/ContactPage';
import NotFoundPage from '../../components/NotFoundPage';
import FeaturesPage from '../../components/FeaturesPage';
import SublimePage from '../../components/SublimePage';

import classes from './theme.css';

const theme = getMuiTheme({
  fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
  palette: {
    primary1Color: '#8CCBF2',
    accent1Color: '#979797',
  },
});

export default function App({ location }) {
  if (location) {
    history.push(location);
  }

  return (
    <Router history={history}>
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <BrowserState />
          <div className={classes.site}>
            <Header />
            <div className={classes.content}>
              <Switch>
                <Route
                  exact
                  component={Homepage}
                  path={paths.HOME}
                />
                <Route
                  exact
                  component={FeaturesPage}
                  path={paths.FEATURES}
                />
                <Route
                  exact
                  component={SublimePage}
                  path={paths.SUBLIME}
                />
                <Route
                  exact
                  component={ContactPage}
                  path={paths.CONTACT}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

App.propTypes = {
  location: React.PropTypes.string,
};

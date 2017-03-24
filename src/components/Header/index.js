import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route } from 'react-router-dom';

import paths from '../../paths';
import cx from '../../utils/class-names';
import Logo from '../../components/SVGLogo';

import mapStateToProps from './selectors';
import classes from './styles.css';

function Header(props) {
  const {
    browser: {
      atTop,
    },
  } = props;

  return (
    <Route
      render={match => (
        <header
          className={cx(
            classes.header,
            [classes.offTop, match.location.pathname !== paths.HOME || !atTop],
          )}
        >
          <div>
            <Link className={classes.logo} to={paths.HOME}>
              <Logo size="full-width" />
            </Link>
          </div>
          <nav className={classes.menu}>
            <div><NavLink activeClassName={classes.active} to={paths.HOME}>Home</NavLink></div>
            <div><NavLink activeClassName={classes.active} to={paths.FEATURES}>Features</NavLink></div>
            <div><NavLink activeClassName={classes.active} to={paths.SUBLIME}>Sublime</NavLink></div>
            <div><NavLink activeClassName={classes.active} to={paths.DEALERS}>Features</NavLink></div>
            <div><NavLink activeClassName={classes.active} to={paths.GRADES}>Grades</NavLink></div>
            <div><NavLink activeClassName={classes.active} to={paths.GALLERY}>Gallery</NavLink></div>
            <div><NavLink activeClassName={classes.active} to={paths.CONTACT}>Contact</NavLink></div>
          </nav>
        </header>
      )}
    />
  );
}

Header.propTypes = {
  browser: React.PropTypes.object,
};

export default connect(mapStateToProps)(Header);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as browserActions from '../../actions/browser';

import mapStateToProps from './selectors';

class BrowserState extends React.Component {
  static defaultProps = {
    topThreshold: 10,
  }

  static propTypes = {
    topThreshold: PropTypes.number.isRequired,
    atTop: PropTypes.bool,
  }

  componentDidMount() {
    let tick = false;
    window.addEventListener('scroll', () => {
      const position = window.scrollY;
      if (!tick) {
        window.requestAnimationFrame(() => {
          this.updatePositionState(position);
          tick = false;
        });
      }
      tick = true;
    });
  }

  updatePositionState = position => {
    if (this.props.atTop && position >= this.props.topThreshold) {
      this.props.dispatch(browserActions.offTop());
    } else if (!this.props.atTop && position < this.props.topThreshold) {
      this.props.dispatch(browserActions.atTop());
    }
  }

  render() {
    return <div />;
  }
}

export default connect(mapStateToProps)(BrowserState);

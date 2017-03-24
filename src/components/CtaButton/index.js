/* eslint-disable react/prop-types */

import React from 'react';
import { compose, withProps, branch, renderComponent, defaultProps, mapProps } from 'recompose';
import { Link } from 'react-router-dom';
import { omit } from 'lodash/fp';

import RaisedButton from 'material-ui/RaisedButton';

const omitProps = compose(mapProps, omit);

const CtaButton = compose(
  defaultProps({
    height: 40,
    size: 1,
  }),
  withProps(({ style, buttonStyle, labelStyle, overlayStyle, height, size, callout }) => ({
    backgroundColor: callout ? '#6CBCEE' : undefined,
    labelColor: callout ? '#FFF' : undefined,
    style: Object.assign({}, {}, style),
    buttonStyle: Object.assign({}, {
      height: height * size,
      lineHeight: `${height * size}px`,
    }, buttonStyle),
    labelStyle: Object.assign({}, {
      fontWeight: callout ? 400 : 600,
      fontSize: 14 * size,
      height: height * size,
      paddingLeft: 16 * size,
      paddingRight: 16 * size,
    }, labelStyle),
    overlayStyle: Object.assign({}, {
      height: height * size,
    }, overlayStyle),
  })),
  omitProps('callout')
)(RaisedButton);

const LinkPassthrough = ({ to, ...props }) => (
  <Link to={to}>
    <CtaButton {...props} />
  </Link>
);

const Composed = compose(
  branch(
    ({ to }) => !!to,
    renderComponent(LinkPassthrough),
    renderComponent(CtaButton)
  )
)();

export default Composed;

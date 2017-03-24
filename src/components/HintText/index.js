/**
*
* HintText
*
*/

import React from 'react';

const HintText = ({ style, ...props }) =>
  <p
    {...props}
    style={Object.assign({}, {
      marginTop: '1rem',
      fontSize: 12,
      color: '#AAA',
    }, style)}
  />;

export default HintText;

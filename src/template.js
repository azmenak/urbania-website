const React = require('react');

/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-danger */

const Template = props =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1" />
      <title>{props.title}</title>
      <script
        id="config"
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__ = ${JSON.stringify(props.state)}`,
        }}
      />
    </head>
    <body>
      <div id="entry" dangerouslySetInnerHTML={{ __html: props.body }} />
      <script src={props.bundle} />
    </body>
  </html>;

Template.propTypes = {
  title: React.PropTypes.string,
  bundle: React.PropTypes.string,
  state: React.PropTypes.object,
  body: React.PropTypes.string,
};

module.exports = Template;

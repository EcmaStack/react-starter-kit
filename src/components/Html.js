import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

function Html({ title, description, style, script, state, children }) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {state && <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${serialize(state, { isJSON: true })}`,
          }}
        />}
        {script && <script src={script} />}
        {analytics.google.trackingId && (
          <script
            dangerouslySetInnerHTML={{ __html:
            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
          />
        )}
        {analytics.google.trackingId && (
          <script src="https://www.google-analytics.com/analytics.js" async defer />
        )}
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
  script: PropTypes.string,
  state: PropTypes.object,
  children: PropTypes.string,
};

export default Html;

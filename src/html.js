/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { PreloaderLogo } from './legos/PreloaderLogo';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script src="https://widget.clutch.co/static/js/widget.js" />
      </head>
      <body className="not-loaded" {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="preloader"
          id="___loader"
          className="preloader"
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            top: 0,
            left: 0,
            color: '#fff',
            zIndex: 1050,
            transition: 'opacity .3s ease-in-out',
            overflow: 'hidden',
            backgroundColor: '#fff',
          }}
        >
          <PreloaderLogo />
        </div>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

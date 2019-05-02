import React from 'react'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'
// import store from './src/redux/store'
import ReactBreakpoints from 'react-breakpoints'
import BreakPoints from './src/utils/breakpoints'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    // <Provider store={store}>
      <ReactBreakpoints
        breakpoints={BreakPoints}
        guessedBreakpoint={BreakPoints.mobile}
      >
        {element}
      </ReactBreakpoints>
    // </Provider>
  )
  return ConnectedRootElement
};

export const onClientEntry = () => {
  return new Promise((resolve, reject) => {
    window.__polyfillio__ = () => {
      resolve();
    };

    const features = [];

    if (!('Intl' in window)) {
      const locale = window.location.pathname.split('/')[1];
      features.push(`Intl.~locale.${locale}`);
    }

    // if (!('fetch' in window)) {
    //   features.push('fetch');
    // }

    // ... detect other missing features

    if (features.length) {
      const s = document.createElement('script');
      s.src = `https://cdn.polyfill.io/v2/polyfill.min.js?features=${features.join(
        ',',
      )}&rum=1&flags=always&callback=__polyfillio__`;
      s.async = true;
      s.onerror = reject;
      document.head.appendChild(s);
    } else {
      resolve();
    }
  });
};

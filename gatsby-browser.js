import React, { Component } from 'react'
import ReactBreakpoints from 'react-breakpoints'
import BreakPoints from './src/utils/breakpoints'

export const wrapRootElement = ({ element }) => {
  class ConnectedRootElement extends Component {
    componentDidCatch(error) {
      console.error(error)
    }

    render() {
      return (
        <ReactBreakpoints
          breakpoints={BreakPoints}
          guessedBreakpoint={BreakPoints.mobile}
        >
          {element}
        </ReactBreakpoints>
      )
    }
  }
  return <ConnectedRootElement />
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


export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

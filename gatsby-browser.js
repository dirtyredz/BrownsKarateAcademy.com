import React from 'react'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'
// import store from './src/redux/store'
import ReactBreakpoints from 'react-breakpoints'
import BreakPoints from './src/utils/breakpoints'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    // <Provider store={store}>
      <ReactBreakpoints breakpoints={BreakPoints}>
        {element}
      </ReactBreakpoints>
    // </Provider>
  )
  return ConnectedRootElement
};

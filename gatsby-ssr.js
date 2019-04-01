import React from 'react'
// import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import ReactBreakpoints from 'react-breakpoints'
import BreakPoints from './src/utils/breakpoints'

// import store from './src/redux/store'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {

    const ConnectedBody = () => (
      // <Provider store={store}>
        <ReactBreakpoints breakpoints={BreakPoints}>
          {bodyComponent}
        </ReactBreakpoints>
      // </Provider>
    )
    replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}

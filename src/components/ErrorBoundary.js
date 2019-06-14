import React from 'react'

export default class ErrorBoundary extends React.Component {
  static defaultProps = {
    FallbackComponent: <div>Error</div>,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error(error)
    window.Sentry.configureScope((scope) => {
      Object.keys(info).forEach(key => {
        scope.setExtra(key, info[key]);
      });
    });
    console.log(error)
    window.Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.FallbackComponent;
    }
    return this.props.children;
  }
}

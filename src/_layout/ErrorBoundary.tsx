import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private resetError() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="error-boundary">
            <h2>Something went wrong.</h2>
            <Link onClick={this.resetError} to={'/'}>
              Return to home
            </Link>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

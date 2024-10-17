import React from 'react';

// 这里可以集成第三方错误跟踪服务，如 Sentry
const logError = (error: Error, errorInfo: React.ErrorInfo | null = null) => {
  // 在这里发送错误到你的错误跟踪服务
  console.error('Logged error:', error, errorInfo);
};

export const handleError = (error: Error, errorInfo: React.ErrorInfo | null = null) => {
  logError(error, errorInfo);
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    handleError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
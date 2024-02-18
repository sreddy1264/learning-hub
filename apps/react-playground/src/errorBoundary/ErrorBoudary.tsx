import React, {  ErrorInfo } from 'react';
import { Props, State } from './errorBoundary.types';

export class ErrorBoundary extends React.Component<Props, State> {
  state: { hasError: boolean; };
  props: any;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
      return { hasError: true }
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
      console.log(error, info);
  };

  render() {
      if (this.state.hasError) {
          return this.props.fallback;
      }
      return this.props.children;
  }
};
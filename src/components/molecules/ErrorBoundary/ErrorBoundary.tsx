import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";

import { RenderError } from "@/components/atoms";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      errorMessage: JSON.stringify({ message: error.message, ...errorInfo }),
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <RenderError>{this.state.errorMessage}</RenderError>;
    }
    return this.props.children;
  }
}

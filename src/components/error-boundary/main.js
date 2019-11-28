import React, { Component } from "react";
import Note from "../../components/note";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return <Note type={Note.TYPE.DANGER} title="Error" description={error} />;
    }

    return this.props.children;
  }
}

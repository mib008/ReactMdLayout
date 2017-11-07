import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * https://reactjs.org/docs/error-boundaries.html
 * @class ErrorBoundary
 */
class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.any,
    };
    /**
     * 
     * @param {any} props
     */
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    /**
     * 
     * @param {any} error
     * @param {any} info
     */
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.warn(error);
    }

    /**
     * @return {dom}
     */
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

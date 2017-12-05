import React, { Component } from 'React';
import HocContainer from './HocContainer/HocContainer1';

@HocContainer
/**
 * @class
 */
class MyComponent extends Component {
    /**
     * componentDidMount
     */
    componentDidMount() {
        console.debug('MyComponent did mount');
    }

    /**
     * componentWillMount
     */
    componentWillMount() {
        console.debug('MyComponent will mount');
    }

    /**
     * componentWillUnmount
     */
    componentWillUnmount() {
        console.debug('MyComponent will unmount');
    }

    /**
     * render
     * @return {dom}
     */
    render() {
        return <h1>MyComponent in Hoc container</h1>;
    }
}

export default MyComponent;

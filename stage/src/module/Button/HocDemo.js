import React, { Component } from 'React';
import HocContainer from './HocContainer/HocContainer1';

/**
 * @class
 */
@HocContainer
class MyComponent extends Component {
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

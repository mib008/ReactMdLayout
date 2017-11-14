import React, { Component } from 'React';

const HocContainer = (Wrapper) => {
    return class WrapperComponent extends Component {
        /**
         * componentDidMount
         */
        componentDidMount() {
            console.debug('HocContainer did mount');
        }

        /**
         * componentWillMount
         */
        componentWillMount() {
            console.debug('HocContainer will mount');
        }

        /**
         * componentWillUnmount
         */
        componentWillUnmount() {
            console.debug('HocContainer will unmount');
        }

        /**
         * render
         * @return {dom}
         */
        render() {
            return <Wrapper {...this.props} />;
        }
    };
};

@HocContainer
/**
 * @class
 */
class MyComponent extends Component {
    /**
     * render
     * @return {dom}
     */
    render() {
        return <h1>MyComponent in Hoc container</h1>;
    }
}

export default MyComponent;

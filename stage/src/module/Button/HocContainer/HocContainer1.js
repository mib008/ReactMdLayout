import React, { Component } from 'React';

const HocContainer = (Wrapper) => {
    return class WrapperComponent extends Component {
        /**
         * componentDidMount
         */
        componentDidMount() {
            console.debug('HocContainer1 did mount');
        }

        /**
         * componentWillMount
         */
        componentWillMount() {
            console.debug('HocContainer1 will mount');
        }

        /**
         * componentWillUnmount
         */
        componentWillUnmount() {
            console.debug('HocContainer1 will unmount');
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

export default HocContainer;

import React from 'React';

const HocContainer = (Wrapper) => {
    return class WrapperComponent extends Wrapper {
        /**
         * componentDidMount
         */
        componentDidMount() {
            console.debug('HocContainer2 did mount');
        }

        /**
         * componentWillUnmount
         */
        componentWillUnmount() {
            console.debug('HocContainer2 will unmount');
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

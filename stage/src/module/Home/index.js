import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BeforeStart from './components/BeforeStart';
import Using from './components/Using';
import InteractiveDemo from './components/InteractiveDemo';

import './style/index.less';

/**
 * @class
 */
class Home extends Component {
    static propTypes = {
        location: PropTypes.any,
    };

    /**
     * componentDidMount
     * @param {any} prevProps
     * @param {any} prevState
     */
    componentDidMount(prevProps, prevState) {
        if (window.prettyPrint) window.prettyPrint();
    }

    /**
     * @return {dom}
     */
    render() {
        return <article className='Home DemoPage layout-column flex layout-padding'>
            <section className='layout-row layout-align-center-center'>
                <h1>Material Design Layout for React</h1>
            </section>
            <BeforeStart />
            <Using />
            <InteractiveDemo />
        </article>;
    }
}

export default Home;

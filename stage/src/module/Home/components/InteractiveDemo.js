import React, { Component } from 'react';

import './InteractiveDemo.less';

/**
 * @class
 */
class InteractiveDemo extends Component {
    /**
     * @function
     * @return {dom}
     */
    render() {
        return <section className='InteractiveDemo layout-row layout-align-center-stretch'>
            <div className='container flex-80'>
                <div className='content'></div>
                <div className='form'></div>
            </div>
        </section>;
    }
}

export default InteractiveDemo;

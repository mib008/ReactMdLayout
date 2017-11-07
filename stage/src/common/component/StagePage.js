import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/StagePage.less';

/**
 * 
 */
class StagePage extends Component {
    static propTypes = {
        children: PropTypes.any,
    };
    /**
     * @return {dom}
     */
    render() {
        return <article className='StagePage layout-column'>
            {this.props.children}
        </article>;
    }
}

export default StagePage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 *  
 */
class LayoutColumn extends Component {
    static propTypes = {
        'children': PropTypes.any,
        'className': PropTypes.string,
        'layout-align': PropTypes.string,
    };

    /**
     * @return {obj}
     */
    render() {
        return (
            <div className='layout-column'>
                {this.props.children}
            </div>
        );
    }
}

export default LayoutColumn;

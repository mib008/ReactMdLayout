import React from 'react';
import PropTypes from 'prop-types';
import BaseLayout from '../BaseLayout';

/**
 * @class
 */
class LayoutRow extends BaseLayout {
    static propTypes = {
        'children': PropTypes.any,
        'className': PropTypes.string,
        'layout-align': PropTypes.string,
    };

    /**
     * @return {obj}
     */
    render() {
        let className = 'layout-row'.concat(' ', this.buildClass(this));

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default LayoutRow;

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
     * @constructor
     */
    constructor() {
        super('layout-row');
    }

    /**
     * @return {obj}
     */
    render() {
        let className = this.buildClass(this);

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default LayoutRow;

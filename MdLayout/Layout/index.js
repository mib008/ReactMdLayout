import React from 'react';
import PropTypes from 'prop-types';
import BaseLayout from '../BaseLayout';

const renderChildren = Symbol('renderChildren');

/**
 * @class
 */
class Layout extends BaseLayout {
    static propTypes = {
        layout: PropTypes.string,
    };

    /**
     * @constructor
     * @param {obj} props
     */
    constructor(props) {
        super(props);

        this.$$typeof = Symbol.for('react.element');
    }

    /**
     * Render cloned children
     * @param {any} props
     * @return {dom} children
     */
    [renderChildren](props) {
        return React.Children.map(props.children, (child) => {
            let className = this.buildChildClass(child);

            return React.cloneElement(child, Object.assign({}, child.props, {
                className: className,
            }));
        });
    }

    /**
     * @return {obj}
     */
    render() {
        this.layoutType = `layout-${this.props.layout}`;

        let className = this.buildClass(this);

        return (
            <div className={className}>
                {this[renderChildren](this.props)}
            </div>
        );
    }
}

export default Layout;

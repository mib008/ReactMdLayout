import React from 'react';
import BaseLayout from '../BaseLayout';

const renderChildren = Symbol('renderChildren');
const renderDom = Symbol('renderDom');

/**
 * 
 */
class LayoutContainer extends BaseLayout {
    /**
     * Cloned children
     * @param {any} props
     * @return {dom} children
     */
    [renderChildren](props) {
        return React.Children.map(props.children, (child) => {
            if (child.$$typeof === Symbol.for('react.element')) {
                return this[renderDom](child, 0);
            } else {
                return child;
            }
        });
    }

    /**
     * 
     * @param {any} dom
     * @param {int} key
     * @return {dom} children
     */
    [renderDom](dom, key) {
        let className = dom.className ? dom.className.concat(' ', this.buildClass(dom)) : this.buildClass(dom);

        let children = undefined;
        if (dom.props && Array.isArray(dom.props.children)) {
            children = dom.props.children.map((child, index) => this[renderDom](child, index));
        }

        if (children) {
            return React.cloneElement(dom, Object.assign({}, dom.props, {
                className: className,
                children: children,
                key: key,
            }));
        } else {
            return React.cloneElement(dom, Object.assign({}, dom.props, {
                className: className,
                key: key,
            }));
        }
    }

    /**
     * @return {dom}
     */
    render() {
        return this[renderChildren](this.props);
    }
}

export default LayoutContainer;

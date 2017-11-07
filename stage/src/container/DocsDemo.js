import React, { Component } from 'react';

/**
 * 
 */
class DocsDemo extends Component {
    /**
     * 
     * @param {any} nextProps
     * @param {any} nextState
     * @return {boolean} 
     */
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    /**
     * @return {dom}
     */
    render() {
        return (
            <docs-demo className="colorNested" style={{ height: '100%' }}>
            </docs-demo>
        );
    }
}

export default DocsDemo;

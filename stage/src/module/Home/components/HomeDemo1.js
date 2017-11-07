import React, { Component } from 'react';

/**
 * 
 */
class HomeDemo1 extends Component {
    /**
     * @return {dom}
     */
    render() {
        return (
            <div className="demo-content">
                <div className="layout-row">
                    <div className="flex">First item in row</div>
                    <div className="flex">Second item in row</div>
                </div>
                <div className="layout-column">
                    <div className="flex">First item in column</div>
                    <div className="flex">Second item in column</div>
                </div>
            </div>
        );
    }
}

export default HomeDemo1;

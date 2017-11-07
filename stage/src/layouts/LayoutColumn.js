﻿import React, { Component, PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

class LayoutRow extends Component {

    shouldComponentUpdate() {
        return false
    };

    render() {
        const { routes, store } = this.props;

        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <Router history={browserHistory} children={routes} />
                </div>
            </Provider>
        );
    };
}

export default LayoutRow

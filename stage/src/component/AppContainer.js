import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
// import { withStyles } from 'material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import RouterDefines from '../module';
import defaultTheme from '../common/defaultTheme';

import './style/AppContainer.less';

/**
 * @class
 */
class AppContainer extends Component {
    static propTypes = {
        routes: PropTypes.object,
        store: PropTypes.object,
    }

    /**
     * @constructor
     */
    constructor() {
        super();

        if (module.hot) {
            module.hot.accept([
                '../module/About',
                '../module/Button',
                'babel-loader!../module/0_Layout/Demo0',
                'babel-loader!../module/3_LayoutContainer/Demo0',
                'babel-loader!../module/3_LayoutContainer/Demo1',
            ], () => {
                this.render();
            });
        }
    }

    /**
     * @return {obj}
     */
    render() {
        const { store } = this.props;

        const modules = new RouterDefines(store);

        const classes = {
            root: 'navbar',
        };

        return (
            <ErrorBoundary>
                <MuiThemeProvider theme={defaultTheme}>
                    <BrowserRouter>
                        <div className="AppContainer">
                            <Navbar classes={classes} itemSource={modules}></Navbar>

                            {modules.filter((module) => module.name).map((module) => {
                                return module.exact ?
                                    <Route key={module.name} exact path={module.path} component={module.component} />
                                    : <Route key={module.name} path={module.path} component={module.component} />;
                            })}
                        </div>
                    </BrowserRouter>
                </MuiThemeProvider>
            </ErrorBoundary>
        );
    }
}

export default AppContainer;

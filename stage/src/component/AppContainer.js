import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
// import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';

import { BrowserRouter, Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import RouterDefines from '../module';
import defaultTheme from 'Common/defaultTheme';
import Github from 'Common/svg/Github';

import './AppContainer.less';

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
     * @param {obj} props
     */
    constructor(props) {
        super(props);

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
                        <div className='AppContainer layout-row layout-align-start stretch'>
                            <Navbar classes={classes} itemSource={modules}></Navbar>

                            <div className='layout-column flex'>
                                <AppBar position="static" color="default">
                                    <Toolbar style={{ backgroundColor: 'transparent' }}>
                                        <div className='flex' />
                                        <IconButton className='icon' color="contrast" aria-label="Github" target="_blank" href='https://github.com/mib008/ReactMdLayout'>
                                            <Github height={36} width={36} />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>

                                {modules.filter((module) => module.name).map((module) => {
                                    return module.exact ?
                                        <Route key={module.name} exact strict path={module.path} component={module.component} />
                                        : <Route key={module.name} exact strict path={module.path} component={module.component} />;
                                })}
                            </div>
                        </div>
                    </BrowserRouter>
                </MuiThemeProvider>
            </ErrorBoundary>
        );
    }
}

export default AppContainer;

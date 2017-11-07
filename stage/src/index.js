import React from 'react';
import ReactDOM from 'react-dom';
import RedBoxReact from 'redbox-react';

import createStore from './store/createStore';
import AppContainer from './component/AppContainer';

import './common/style/baseStyle.less';

const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);
const MOUNT_NODE = document.getElementById('root');


let render = () => {
    ReactDOM.render(
        <AppContainer store={store} />,
        MOUNT_NODE
    );
};

if (__DEV__) {
    if (window.devToolsExtension) {
        window.devToolsExtension.open();
    }

    if (module.hot) {
        const renderApp = render;
        const renderError = (error) => {
            ReactDOM.render(<RedBoxReact error={error} />, MOUNT_NODE);
        };

        render = () => {
            try {
                renderApp();
            } catch (error) {
                console.error(error);
                renderError(error);
            }
        };

        module.hot.accept('./module/index', () => {
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
            render();
        });
    }
}

render();



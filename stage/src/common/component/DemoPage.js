import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { componentMap } from '../../module';

import './style/DemoPage.less';

// import StagePage from 'Common/component/StagePage';
// import DemoContainer from 'Common/component/DemoContainer';

/**
 * @class
 */
class DemoPage extends Component {
    static propTypes = {
        location: PropTypes.any,
        children: PropTypes.any,
    };

    /**
     * @constructor
     * @param {any} props
     */
    constructor(props) {
        super(props);

        if (props && props.location) {
            this.navState = props.location.state;

            if (!this.navState) {
                this.navState = window.history.state;
            }
        }
    }

    /**
     * @param {any} demo
     * @return {dom}
     */
    getComponentInstance(demo) {
        let DemoComponent = componentMap.get(demo.component);
        if (!DemoComponent) {
            return <h1>{`DemoPage.getComponentInstance: no component found for key: ${demo.component}`}</h1>;
        }
        return <DemoComponent {...demo} />;
    }

    /**
     * @return {dom}
     */
    render() {
        return <article className='DemoPage layout-column flex layout-padding'>
            <div><h1>{this.navState.name}</h1></div>
            <div><h3>{this.navState.description}</h3></div>
            {
                this.navState.demos ?
                    this.navState.demos.map((demo) =>
                        <div key={demo.name}>{this.getComponentInstance(demo)}</div>) :
                    this.props.children
            }
        </article>;
    }
}

export default DemoPage;

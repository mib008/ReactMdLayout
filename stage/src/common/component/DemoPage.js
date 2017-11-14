import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { componentMap } from '../../module';

// import StagePage from 'Common/component/StagePage';
// import DemoContainer from 'Common/component/DemoContainer';

/**
 * @class
 */
class DemoPage extends Component {
    static propTypes = {
        location: PropTypes.any,
    };

    /**
     * @param {object} props
     */
    constructor(props) {
        super(props);
    }

    /**
     * componentWillMount
     */
    componentWillMount() {
        console.debug('DemoPage will mount');

        if (this.props && this.props.location) {
            this.navState = this.props.location.state;

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
        if (!Component) {
            return <h1>{`DemoPage.getComponentInstance: no component found for key: ${demo.component}`}</h1>;
        }
        return <DemoComponent {...demo} />;
    }

    // /**
    //  * @return {dom}
    //  */
    // render() {
    //     return <StagePage>
    //         <div><h1>{this.navState.name}</h1></div>
    //         <div><h3>{this.navState.description}</h3></div>
    //         {
    //             this.navState.demos ?
    //                 this.navState.demos.map((demo) =>
    //                     <DemoContainer
    //                         key={demo.name}
    //                         title={demo.name}
    //                         description={demo.description}
    //                         code={demo.code}>
    //                         {this.getComponentInstance(demo.component)}
    //                     </DemoContainer>) :
    //                 <h1></h1>
    //         }
    //     </StagePage>;
    // }

    /**
     * @return {dom}
     */
    render() {
        return <article className='DemoPage layout-column flex'>
            <div><h1>{this.navState.name}</h1></div>
            <div><h3>{this.navState.description}</h3></div>
            {
                this.navState.demos ?
                    this.navState.demos.map((demo) =>
                        <div key={demo.name}>{this.getComponentInstance(demo)}</div>) :
                    <h1></h1>
            }
        </article>;
    }
}

export default DemoPage;

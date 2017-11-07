import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { componentMap } from '../../module';

import StagePage from 'Common/component/StagePage';
import DemoContainer from 'Common/component/DemoContainer';

/**
 * 
 */
class DemoPage extends Component {
    static propTypes = {
        location: PropTypes.any,
    };

    /**
     * 
     */
    componentWillMount() {
        if (this.props && this.props.location) {
            this.navState = this.props.location.state;
        }
    }

    /**
     * 
     * @param {any} componentKey
     * @return {dom}
     */
    getComponentInstance(componentKey) {
        let Component = componentMap.get(componentKey);
        if (!Component) {
            return <h1>{`DemoPage.getComponentInstance: no component found for key: ${componentKey}`}</h1>;
        }
        let demoComponent = new Component();
        return demoComponent.render();
    }

    /**
     * @return {dom}
     */
    render() {
        return <StagePage>
            <div><h1>{this.navState.name}</h1></div>
            <div><h3>{this.navState.description}</h3></div>
            {
                this.navState.demos.map((demo) =>
                    <DemoContainer
                        key={demo.name}
                        title={demo.name}
                        description={demo.description}
                        code={demo.code}>
                        {this.getComponentInstance(demo.component)}
                    </DemoContainer>)
            }
        </StagePage>;
    }
}

export default DemoPage;
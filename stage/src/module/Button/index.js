import React, { Component } from 'react';

import Button from './Button';
import DemoPage from 'Common/component/DemoPage';

import MyComponent from './HocDemo';


/**
 * Button
 */
class Page extends Component {
    /**
     * @return {dom}
     */
    render() {
        const classes = { button: 'button_demo' };

        return <DemoPage>
            <Button classes={classes}></Button>
            <MyComponent/>
        </DemoPage>;
    }
}

export default Page;

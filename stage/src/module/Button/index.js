import React, { Component } from 'react';

import Button from './Button';
import StagePage from 'Common/component/StagePage';


/**
 * Button
 */
class Page extends Component {
    /**
     * @return {dom}
     */
    render() {
        const classes = { button: 'button_demo' };

        return <StagePage>
            <Button classes={classes}></Button>
        </StagePage>;
    }
}

export default Page;

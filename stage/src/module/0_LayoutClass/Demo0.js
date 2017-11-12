import React, { Component } from 'react';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo0.less';

/**
 * @class
 */
class Demo0 extends Component {
    /**
     * @return {dom}
     */
    render() {
        return <div className='LayoutClassDemo0 layout-row layout-align-start-stretch'>
            <div className='block1 flex'>block1</div>
            <div className='block2'>block2</div>
            <div className='block3'>block3</div>
        </div>;
    }
}

export default Demo0;

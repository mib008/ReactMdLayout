import React, { Component } from 'react';
import { LayoutContainer } from 'MdLayout';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo1.less';

/**
 * Demo1
 * @class
 */
class Demo1 extends Component {
    /**
     * @return {dom}
     */
    render() {
        return <LayoutContainer>
            <div className='LayoutContainerDemo1' layout='row' layout-align='start stretch'>
                <div layout="row" flex=''>
                    <div className='block2' flex=''>First item in row</div>
                    <div className='block3' flex=''>Second item in row</div>
                </div>
                <div layout="column" flex=''>
                    <div className='block2' flex=''>First item in column</div>
                    <div className='block3' flex=''>Second item in column</div>
                </div>
            </div>
        </LayoutContainer>;
    }
}

export default Demo1;

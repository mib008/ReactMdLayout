import React from 'react';
import { LayoutColumn } from 'MdLayout';
import demoContainer from 'Common/component/DemoContainer';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo0.less';

const Demo0 = () => {
    return <LayoutColumn className='LayoutColumnDemo0' layout-align='start center'>
        <div className='block1'>block1</div>
        <div className='block2'>block2</div>
        <div className='block3'>block3</div>
    </LayoutColumn>;
};

export default demoContainer(Demo0);

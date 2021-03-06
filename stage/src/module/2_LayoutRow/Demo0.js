import React from 'react';
import { LayoutRow } from 'MdLayout';
import demoContainer from 'Common/component/DemoContainer';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo0.less';

const Demo0 = () => {
    return <LayoutRow className='LayoutRowDemo0' layout-align='start stretch'>
        <div className='block1'>block1</div>
        <div className='block2'>block2</div>
        <div className='block3'>block3</div>
    </LayoutRow>;
};

export default demoContainer(Demo0);

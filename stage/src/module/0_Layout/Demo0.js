import React from 'react';
import { Layout } from 'MdLayout';
import demoContainer from 'Common/component/DemoContainer';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo0.less';

const Demo0 = () => {
    return <Layout className='LayoutDemo0' layout='row' layout-align='start stretch'>
        <div flex='' className='block1'>block1</div>
        <div className='block2'>block2</div>
        <div className='block3'>block3</div>
    </Layout>;
};

export default demoContainer(Demo0);

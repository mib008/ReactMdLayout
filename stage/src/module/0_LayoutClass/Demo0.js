import React from 'react';
import demoContainer from 'Common/component/DemoContainer';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo0.less';

const Demo0 = () => {
    return <div className='LayoutClassDemo0 layout-row layout-align-start-stretch'>
        <div className='block1 flex'>block1</div>
        <div className='block2'>block2</div>
        <div className='block3'>block3</div>
    </div>;
};

export default demoContainer(Demo0);

import React from 'react';
import demoContainer from 'Common/component/DemoContainer';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/Demo1.less';

const Demo1 = () => {
    return <div className='LayoutClassDemo1 layout-row layout-start stretch'>
        <div className='layout-row flex'>
            <div className='block2 flex'>First item in row</div>
            <div className='block3 flex'>Second item in row</div>
        </div>
        <div className='layout-column flex'>
            <div className='block2 flex'>First item in column</div>
            <div className='block3 flex'>Second item in column</div>
        </div>
    </div>;
};

export default demoContainer(Demo1);

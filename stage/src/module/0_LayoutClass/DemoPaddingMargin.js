import React from 'react';
import demoContainer from 'Common/component/DemoContainer';

import 'style-loader!css-loader!postcss-loader!less-loader!./style/DemoPaddingMargin.less';

const DemoPaddingMargin = () => {
    return <div className='LayoutClassDemoPaddingMargin layout-row layout-start stretch'>
        <div className='block1 flex-45'>
            <div className='block2 layout-padding'>Item with layout-padding</div>
        </div>
        <div className='flex-10' />
        <div className='block1 flex-45'>
            <div className='block3 layout-margin'>Item with layout-margin</div>
        </div>
    </div>;
};

export default demoContainer(DemoPaddingMargin);

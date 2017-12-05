import Home from './Home';
import About from './About';

import DemoPage from 'Common/component/DemoPage';

let pageList = [
    {
        name: 'Css Classes',
        type: 'subheader',
    }, {
        name: 'Layout Class',
        description: '直接通过编写class名的方式，应用封装在对应class名中的布局规则。',
        path: '/layout_class',
        demos: [{
            name: 'layout-margin and layout-padding',
            description: '使用layout-margin或layout-padding className为元素设置统一的margin或者padding，默认为8px，可以另写样式覆盖。',
            component: '0_LayoutClass.DemoPaddingMargin',
            code: [
                { name: 'DemoPaddingMargin.js', type: 'js', content: require('raw-loader!./0_LayoutClass/DemoPaddingMargin.js') },
                { name: 'DemoPaddingMargin.less', type: 'less', content: require('raw-loader!./0_LayoutClass/style/DemoPaddingMargin.less') },
            ],
        }, {
            name: 'Row layout demo',
            description: '使用Layout Class实现LayoutRow中的Demo。',
            component: '0_LayoutClass.Demo0',
            code: [
                { name: 'Demo0.js', type: 'js', content: require('raw-loader!./0_LayoutClass/Demo0.js') },
                { name: 'Demo0.less', type: 'less', content: require('raw-loader!./0_LayoutClass/style/Demo0.less') },
            ],
        }, {
            name: 'Mix layout demo',
            description: '使用Layout Class实现纵向以及横向的混合布局。',
            component: '0_LayoutClass.Demo1',
            code: [
                { name: 'Demo1.js', type: 'js', content: require('raw-loader!./0_LayoutClass/Demo1.js') },
                { name: 'Demo1.less', type: 'less', content: require('raw-loader!./0_LayoutClass/style/Demo1.less') },
            ],
        }],
    }, {
        name: 'Components',
        type: 'subheader',
    }, {
        name: 'Layout',
        description: 'Layout控件，通过布局属性转译为class布局样式，转译只影响一级子元素。',
        path: '/layout',
        demos: [{
            name: 'Demo0',
            description: '0_Layout Demo0 description',
            component: '0_Layout.Demo0',
            code: [
                { name: 'Demo0.js', type: 'js', content: require('raw-loader!./0_Layout/Demo0.js') },
                { name: 'Demo0.less', type: 'less', content: require('raw-loader!./0_Layout/style/Demo0.less') },
            ],
        }],
    }, {
        name: 'LayoutColumn',
        description: 'LayoutColumn控件，通过布局属性转译为class布局样式，转译只影响一级子元素。',
        path: '/layoutcolumn',
        demos: [{
            name: 'Demo0',
            description: 'LayoutColumn Demo0 description',
            component: '1_LayoutColumn.Demo0',
            code: [
                { name: 'Demo0.js', type: 'js', content: require('raw-loader!./1_LayoutColumn/Demo0.js') },
                { name: 'Demo0.less', type: 'less', content: require('raw-loader!./1_LayoutColumn/style/Demo0.less') },
            ],
        }],
    }, {
        name: 'LayoutRow',
        description: 'LayoutRow控件，通过布局属性转译为class布局样式，转译只影响一级子元素。',
        path: '/layoutrow',
        demos: [{
            name: 'Demo0',
            description: 'LayoutRow Demo0 description',
            component: '2_LayoutRow.Demo0',
            code: [
                { name: 'Demo0.js', type: 'js', content: require('raw-loader!./2_LayoutRow/Demo0.js') },
                { name: 'Demo0.less', type: 'less', content: require('raw-loader!./2_LayoutRow/style/Demo0.less') },
            ],
        }],
    }, {
        name: 'Container',
        type: 'subheader',
    }, {
        name: 'Layout Container',
        description: 'Layout Container控件，容器下面的所有子元素会通过指定的属性设置应用对应的布局规则。通过布局属性转译为class布局样式，转译所有子元素。',
        path: '/layout_container',
        demos: [{
            name: 'Row layout demo',
            description: '使用Container实现LayoutRow中的Demo。',
            component: '3_LayoutContainer.Demo0',
            code: [
                { name: 'Demo0.js', type: 'js', content: require('raw-loader!./3_LayoutContainer/Demo0.js') },
                { name: 'Demo0.less', type: 'less', content: require('raw-loader!./3_LayoutContainer/style/Demo0.less') },
            ],
        }, {
            name: 'Mix layout demo',
            description: '使用Container实现纵向以及横向的混合布局。',
            component: '3_LayoutContainer.Demo1',
            code: [
                { name: 'Demo1.js', type: 'js', content: require('raw-loader!./3_LayoutContainer/Demo1.js') },
                { name: 'Demo1.less', type: 'less', content: require('raw-loader!./3_LayoutContainer/style/Demo1.less') },
            ],
        }],
    },
];

let componentMap = new Map([
    ['0_Layout.Demo0', require('babel-loader!./0_Layout/Demo0.js').default],
    ['0_LayoutClass.Demo0', require('babel-loader!./0_LayoutClass/Demo0.js').default],
    ['0_LayoutClass.Demo1', require('babel-loader!./0_LayoutClass/Demo1.js').default],
    ['0_LayoutClass.DemoPaddingMargin', require('babel-loader!./0_LayoutClass/DemoPaddingMargin.js').default],
    ['3_LayoutContainer.Demo0', require('babel-loader!./3_LayoutContainer/Demo0.js').default],
    ['3_LayoutContainer.Demo1', require('babel-loader!./3_LayoutContainer/Demo1.js').default],
    ['1_LayoutColumn.Demo0', require('babel-loader!./1_LayoutColumn/Demo0.js').default],
    ['2_LayoutRow.Demo0', require('babel-loader!./2_LayoutRow/Demo0.js').default],
]);

const createRoutes = (store) => {
    return [
        // divider row
        { key: 0, type: 'divider' },
        { path: '/', name: 'Home', component: Home, exact: true, strict: true },
        { path: '/about', name: 'About', component: About },
        { key: 1, type: 'divider' },
        { path: '/button', name: 'Button', component: require('babel-loader!./Button').default, description: '仅用于测试的页面' },
        // { path: '/layout_column', name: 'Layout Column', component: LayoutColumn },
        // { path: '/layout_row', name: 'Layout Row', component: LayoutRow },
        // { path: '/Layout', name: 'Layout', component: Layout },
        // { path: '/LayoutContainer', name: 'Layout Container', component: LayoutContainer },
        ...(pageList.map((page) => {
            if (!page.type) page.component = DemoPage;
            return page;
        })),
    ];
};

export default createRoutes;

export { componentMap };

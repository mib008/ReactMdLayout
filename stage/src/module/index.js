// We only need to import the modules necessary for initial render
// import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import About from './About';

import Button from './Button';

import DemoPage from 'Common/component/DemoPage';

// import Layout from './0_Layout';
// import LayoutColumn from './1_LayoutColumn';
// import LayoutRow from './2_LayoutRow';
// import LayoutContainer from './3_LayoutContainer';

// import counterRoute from './Counter';
// import zenRoute from './Zen';
// import elapseRoute from './Elapse';
// import routeRoute from './Route';
// import pageNotFound from './PageNotFound';
// import redirect from './PageNotFound/redirect';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

// export const createRoutes = (store) => ({
//    path: '/',
//    component: CoreLayout,
//    indexRoute: Home,
//    childRoutes: [
//        counterRoute(store),
//        zenRoute(store),
//        elapseRoute(store),
//        routeRoute(store),
//        pageNotFound(),
//        redirect,
//    ],
// });

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

// export default createRoutes;

let pageList = [
    {
        name: 'Css Classes',
        type: 'subheader',
    }, {
        name: 'Layout Class',
        description: '直接通过编写class名的方式，应用封装在对应class名中的布局规则。',
        path: '/layout_class',
        demos: [{
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
    ['3_LayoutContainer.Demo0', require('babel-loader!./3_LayoutContainer/Demo0.js').default],
    ['3_LayoutContainer.Demo1', require('babel-loader!./3_LayoutContainer/Demo1.js').default],
]);

const createRoutes = (store) => {
    return [
        // divider row
        { key: 0, type: 'divider' },
        { path: '/', name: 'Home', component: Home, exact: true, strict: true },
        { path: '/about', name: 'About', component: About },
        { key: 1, type: 'divider' },
        { path: '/button', name: 'Button', component: Button },
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

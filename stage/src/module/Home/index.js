import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import HomeView from './components/HomeView';

// // Sync route definition
// export default {
//  component: HomeView,
// };


import './style/index.less';

/**
 * @class
 */
class Home extends Component {
    static propTypes = {
        location: PropTypes.any,
    };

    /**
     * componentDidMount
     * @param {any} prevProps
     * @param {any} prevState
     */
    componentDidMount(prevProps, prevState) {
        if (window.prettyPrint) window.prettyPrint();
    }

    /**
     * @return {dom}
     */
    render() {
        return <div className='Home layout-column layout-align-start-stretch'>
            <section className='layout-row layout-align-center-center'>
                <h1>Material Design Layout for React</h1>
            </section>
            <section>
                <h3>开始之前</h3>
                <span>确保angular-material的layout css被引入：</span>
                <pre className={`prettyprint linenums lang-html`}>
                    {`<link href="angular-material/layouts/angular-material.layout-attributes.css" rel="stylesheet" />\
                        \n<link href="angular-material/layouts/angular-material.layouts.css" rel="stylesheet" />\
                        \n<link href="angular-material/layouts/angular-material.layouts.ie_fixes.css" rel="stylesheet" />`}
                </pre>
                <span>或：</span>
                <pre className={`prettyprint linenums lang-html`}>
                    {`<!-- angular-material.css包含所有样式，不需要重复引用\
                    \n    <link href="angular-material/layouts/angular-material.layout-attributes.css" rel="stylesheet" />\
                    \n    <link href="angular-material/layouts/angular-material.layouts.css" rel="stylesheet" />\
                    \n    <link href="angular-material/layouts/angular-material.layouts.ie_fixes.css" rel="stylesheet" />\
                    \n-->\
                    \n<link href="angular-material/angular-material.css" rel="stylesheet" />`}
                </pre>
                <span>接着，需要简单了解angular-material的布局规则：<a href='https://material.angularjs.org/latest/layout/introduction' target='blank'>Angular Material Layout</a>。</span>
            </section>
            <section>
                <h3>使用</h3>
                <span>本布局框架可以通过三个级别的方式使用。</span>
                <table>
                    <thead>
                        <tr>
                            <th>方式</th>
                            <th>Demo 页面</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Layout Class</td>
                            <td><a href='/layout_class'>Layout Class</a></td>
                            <td>直接通过编写class名的方式，应用封装在对应class名中的布局规则。</td>
                        </tr><tr>
                            <td>Layout Component</td>
                            <td>
                                <a href='/layout'>Layout</a>
                                <a href='/layout_column'>Layout Column</a>
                                <a href='/layout_row'>Layout Row</a>
                            </td>
                            <td>使用自带布局规则的component，布局规则会被应用在component本身或者下一级的子元素中。两级以及以上的子元素不受影响。</td>
                        </tr><tr>
                            <td>Layout Container</td>
                            <td><a href='/layout_container'>Layout Container</a></td>
                            <td>Container容器下面的所有子元素会通过指定的属性设置应用对应的布局规则。</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>;
    }
}

export default Home;

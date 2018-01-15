import React from 'react';

const BeforeStart = (props) => {
    return <section>
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
    </section>;
};

export default BeforeStart;

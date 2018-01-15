import React from 'react';

const Using = (props) => {
    return <section>
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
    </section>;
};

export default Using;

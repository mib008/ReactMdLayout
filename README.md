# Material Design layout framework for React

由[angular-material](https://material.angularjs.org/latest/)移植而来，用于[React](https://reactjs.org/)的布局框架。

因为之前有使用过angular-material的UI库开发，认为其中所提供的flex伸缩盒布局框架非常优秀，于是决定将其移植到React下。

## 为什么要使用布局框架？
css3的flex相关属性这里不再赘述，需要查阅请前往[MDN -> CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
。

对于页面繁多的web程序或站点，基本样式与布局样式的分离对于后期维护的成本控制十分重要，统一的布局实现也能有效提高代码质量。

## 开始

React v16为必须。[Why？](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html) v16版对于自定义的DOM属性又不同于以往的处理方式，这个对于此布局框架的实现很重要。

通过npm安装：
```bash
npm install ReactMdLayout       # （目前未发布至npm）
```

在html引入umd规范的脚本：
```bash
    <script src="ReactMdLayout/ReactMdLayout.js"></script>
```

由于布局class的实现基于angular-material，这个包应该在npm install执行的时候被当作依赖安装了，但css并没有在ReactMdLayout直接引用，所以需要另外引入。

angular-material.layouts.ie_fixes.css这个是为了IE浏览器的兼容，按需引入即可。
```bash
    <link href="angular-material/layouts/angular-material.layout-attributes.css" rel="stylesheet" />
    <link href="angular-material/layouts/angular-material.layouts.css" rel="stylesheet" />
    <link href="angular-material/layouts/angular-material.layouts.ie_fixes.css" rel="stylesheet" />
```

或者需要整个angular-material的一些比如字体，normalize的规则，可以引入包含所有内容的css（之前三个不用重复引用了，一般用到其他UI库开发的话并不需要这个集合包）
```bash
    <!-- angular-material.css包含所有样式，不需要重复引用
        <link href="angular-material/layouts/angular-material.layout-attributes.css" rel="stylesheet" />
        <link href="angular-material/layouts/angular-material.layouts.css" rel="stylesheet" />
        <link href="angular-material/layouts/angular-material.layouts.ie_fixes.css" rel="stylesheet" />
    -->

    <link href="angular-material/angular-material.css" rel="stylesheet" />
```

## Document Site

http://reactmdlayout.chinacloudsites.cn/

## 关于Git仓库内容的说明

npm start / npm run server:
启动Document Site站点，对ReactMDlayout组件的修改，添加相应的Demo页面会显示在这个站点中。

npm run build:
构建打包Document Site站点

npm run publish:
构建打包ReactMDlayout组件库

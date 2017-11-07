"use strict";

// Modules
// ReSharper disable UndeclaredGlobalVariableUsing
const webpack = require("webpack"),
    util = require("util"),
    path = require("path");

const autoprefixer = require("autoprefixer");
// var LessPluginCleanCss = require('less-plugin-clean-css');
// ReSharper restore UndeclaredGlobalVariableUsing   

const paths = require('./paths');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function makeWebpackConfig() {
    /**
       * Config
       * Reference: http://webpack.github.io/docs/configuration.html
       * This is the object where all configuration gets set
       */
    let config = {};

    let BASE_STYLE_LOADER = [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            },
        },
        'postcss-loader',
    ];

    /**
       * Loaders
       * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
       * List: http://webpack.github.io/docs/list-of-loaders.html
       * This handles most of the magic responsible for converting modules
       */

    // Initialize module
    config.module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                    },
                ],
            }, {
                oneOf: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                }, {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        ...BASE_STYLE_LOADER,
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                exclude: /node_modules/,
                            },
                        },
                    ],
                }, {
                    test: /\.css$/,
                    use: BASE_STYLE_LOADER,
                }, {
                    test: /\.json$/,
                    use: { loader: 'json-loader' },
                }, {
                    test: [/\.woff(\?.*)?$/, /\.woff2(\?.*)?$/, /\.otf(\?.*)?$/, /\.ttf(\?.*)?$/, /\.eot(\?.*)?$/, /\.svg(\?.*)?$/],
                    use: { loader: 'file-loader', options: { prefix: 'fonts/&name=[hash:base64:20].[ext]' } },
                }, {
                    test: /\.(png|jpg|gif)$/, use: { loader: 'file-loader', options: { limit: 8192 } }
                }],
            }],
    };

    config.resolve = {
        alias: {
            // 全局色彩使用统一变量
            'BaseLess': path.resolve('src/style/baseLess/'),
            // 避免使用 '../../' 访问上级目录
            'WebBasePath': path.resolve('src/publish/'),

            // 避免使用 '../../' 访问上级目录
            'Container': path.resolve('src/Container/'),
        },
    };

    config.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter',

        'redux': 'Redux',
        'redux-saga': 'ReduxSaga',
        'redux-thunk': 'ReduxThunk',
    };

    /**
       * Plugins
       * Reference: http://webpack.github.io/docs/configuration.html#plugins
       * List: http://webpack.github.io/docs/list-of-plugins.html
       */
    config.plugins = [

        // only development
        // do not emit compiled assets that include errors
        // @see: https://webpack.js.org/plugins/no-emit-on-errors-plugin/
        new webpack.NoEmitOnErrorsPlugin(),
    ];

    return config;
};

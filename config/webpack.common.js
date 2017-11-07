"use strict";

// Modules
// ReSharper disable UndeclaredGlobalVariableUsing
const webpack = require("webpack"),
    util = require("util"),
    path = require("path");

const autoprefixer = require("autoprefixer");
// var LessPluginCleanCss = require('less-plugin-clean-css');
// ReSharper restore UndeclaredGlobalVariableUsing

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function makeWebpackConfig() {
    /**
       * Config
       * Reference: http://webpack.github.io/docs/configuration.html
       * This is the object where all configuration gets set
       */
    const config = {};

    const BASE_CSS_LOADER = [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                path: path.resolve('postcss.config.js')
            }
        },
    ];

    /**
       * Loaders
       * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
       * List: http://webpack.github.io/docs/list-of-loaders.html
       * This handles most of the magic responsible for converting modules
       */

    // Initialize module
    config.module = {
        rules: [{
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            exclude: [/node_modules/, /lib/],
            use: [{
                loader: 'eslint-loader',
            }],
        }, {
            oneOf: [{
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /stage\\src\\module\\\d_/],
                use: {
                    loader: 'babel-loader',
                },
            }, {
                test: /\.less$/,
                exclude: [/node_modules/, /stage\\src\\module\\\d_/],
                use: [
                    ...BASE_CSS_LOADER,
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }, {
                test: /\.css$/,
                use: BASE_CSS_LOADER,
            }, {
                test: /\.json$/,
                use: { loader: 'json-loader' },
            }, {
                test: [/\.woff(\?.*)?$/, /\.woff2(\?.*)?$/, /\.otf(\?.*)?$/, /\.ttf(\?.*)?$/, /\.eot(\?.*)?$/],
                use: { loader: 'file-loader', options: { prefix: 'fonts/&name=[hash:base64:20].[ext]' } },
            }, {
                test: /\.svg$/,
                use: { loader: 'svg-react-loader' },
            }, {
                test: /\.(png|jpg|gif)$/, use: { loader: 'file-loader', options: { limit: 8192 } }
            }],
        }],
    };

    config.resolve = {
        alias: {
            // 全局色彩使用统一变量
            'Common': path.resolve('stage/src/common/'),
            'Stage': path.resolve('stage'),
            'MdLayout': path.resolve('MdLayout'),
            'BaseLess': path.resolve('stage/src/common/style/baseLess/'),
            'angular-material.css': path.resolve('stage/lib/angular-material/angular-material.css'),

            'angular-material': path.resolve('stage/lib/angular-material'),

            // 'material-ui': 'material-ui-alpha/build',
            'material-ui': 'material-ui-build-next/build',
            // 'material-ui/styles': 'material-ui-alpha/styles',
        }
    };

    config.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
    };

    /**
       * Plugins
       * Reference: http://webpack.github.io/docs/configuration.html#plugins
       * List: http://webpack.github.io/docs/list-of-plugins.html
       */
    config.plugins = [
        new webpack.ProvidePlugin({}),
    ];


    //config.performance = {
    //    // in development, we don't split code. So, close it.
    //    // notifies you of assets and entrypoints that exceed a specific file limit
    //    // @see: https://webpack.js.org/configuration/performance/#performance
    //    hints: false,
    //};

    return config;
};

/**
 * @author: @Sumscope
 */

var webpack = require('webpack'),
    util = require("util"),
    path = require('path');

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {

    console.log("outputPath : " + outputPath);

    var outputPath = path.join(__dirname, '../dist');

    console.log("outputPath : " + outputPath);

    return webpackMerge(commonConfig(), {

        //module: {
        //    rules: [{
        //        test: /\.less$/,
        //        use: ExtractTextPlugin.extract({
        //            fallback: 'style-loader?sourceMap', use: [...BASE_CSS_LOADER, 'less-loader']
        //        })
        //    }, {
        //        test: /\.css$/,
        //        use: ExtractTextPlugin.extract({ fallback: 'style-loader?sourceMap', use: BASE_CSS_LOADER })
        //    }]
        //},

        /**
       * Entry
       * Reference: http://webpack.github.io/docs/configuration.html#entry
       * Should be an empty object if it's generating a test build
       * Karma will set this when it's a test build
       */
        entry: {
            app: [
                'babel-polyfill',
                './stage/src/index.js',
            ]
        },

        /**
        * Output
        * Reference: http://webpack.github.io/docs/configuration.html#output
        * Should be an empty object if it's generating a test build
        * Karma will handle setting it up for you when it's a test build
        */
        output: {
            path: outputPath,

            // Output path from the view of the page
            // Uses webpack-dev-server in development
            publicPath: './',

            // Filename for entry points
            // Only adds hash in build mode
            filename: '[name].[hash].bundle.js',

            // Filename for non-entry points
            // Only adds hash in build mode
            chunkFilename: '[name].[hash].chunk.js'
        },

        /**
        * Devtool
        * Reference: http://webpack.github.io/docs/configuration.html#devtool
        * Type of sourcemap to use per build type
        */
        devtool: 'source-map',

        /**
    * Plugins
    * Reference: http://webpack.github.io/docs/configuration.html#plugins
    * List: http://webpack.github.io/docs/list-of-plugins.html
    */
        plugins: [
            new WebpackCleanupPlugin(),

            new webpack.DefinePlugin({
                '__DEV__': false
            }),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
            // Only emit files when there are no errors
            new webpack.NoEmitOnErrorsPlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
            // Dedupe modules in the output
            // new webpack.optimize.DedupePlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        pure_funcs: ['console.debug'],
                    },
                }
            }),

            // Reference: https://github.com/ampedandwired/html-webpack-plugin
            // Render index.html
            new HtmlWebpackPlugin({
                template: "./config/release/index.html",
                inject: "body",
                chunksSortMode: 'dependency'
            }),

            new ExtractTextPlugin({
                filename: '[name].[contenthash].css',
                disable: false,
                ignoreOrder: true,
            }),

            // Copy assets from the public folder
            // Reference: https://github.com/kevlened/copy-webpack-plugin
            new CopyWebpackPlugin(
                [
                    'react', 'react-dom', 'react-router', 'create-react-class', 'angular-material'
                ].map(item => {
                    return {
                        from: path.join(__dirname, '../node_modules/', item),
                        to: path.join(outputPath, item)
                    };
                }).concat(
                    [
                        'prettify.css', 'google-code-prettify',
                    ].map(item => {
                        return {
                            from: path.join(__dirname, '../stage/lib/', item),
                            force: true,
                            to: path.join(outputPath, item)
                        };
                    })
                    ).concat(
                    [
                        'favourite.png'
                    ].map(item => {
                        return {
                            from: path.join(__dirname, '../config/release/', item),
                            force: true,
                            to: path.join(outputPath, item)
                        };
                    }))
            ),
        ]

    });
};




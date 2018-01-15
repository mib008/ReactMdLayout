/**
 * @author: @Sumscope
 */

var webpack = require('webpack'),
    util = require("util"),
    path = require('path');

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (options) {

    var port = process.env.port || 8081;

    var outputPath = path.join(__dirname, '../dist');

    console.log(`outputPath = ${outputPath}`);

    return webpackMerge(commonConfig(), {
        entry: {
            app: [
                'babel-polyfill',
                'react-hot-loader/patch',
                `webpack-dev-server/client?http://localhost:${port}`,
                'webpack/hot/only-dev-server',
                './stage/src/index.js'
            ]
        },

        output: {
            // Next line is not used in dev but WebpackDevServer crashes without it:
            path: outputPath,

            // Add /* filename */ comments to generated require()s in the output.
            // pathinfo: true,
            publicPath: `http://localhost:${port}/`,

            // This does not produce a real file. It's just the virtual path that is
            // served by WebpackDevServer in development. This is the JS bundle
            // containing code from all our entry points, and the Webpack runtime.
            filename: '[name].[hash].bundle.js',

            // There are also additional JS chunk files if you use code splitting.
            chunkFilename: '[name].[hash].chunk.js',
        },


        // `devtool` controls if and how source maps are generated
        // @see: https://webpack.js.org/configuration/devtool/#devtool
        devtool: 'source-map',

        // @see: https://webpack.js.org/configuration/dev-server/#devserver
        devServer: {
            contentBase: ["./stage/src/public", "./stage/lib", "./node_modules"],
            stats: "minimal",
            inline: true,
            hot: true,
            port: port,
            historyApiFallback: true,
        },

        /**
          * Plugins
          * Reference: http://webpack.github.io/docs/configuration.html#plugins
          * List: http://webpack.github.io/docs/list-of-plugins.html
          */
        plugins: [
            new webpack.DefinePlugin({
                '__DEV__': true
            }),

            // only development
            // Hot Module Replacement(HMR), in most cases no options are necessary.
            // @see: https://webpack.js.org/plugins/hot-module-replacement-plugin/
            new webpack.HotModuleReplacementPlugin(),

            // only development
            // Add module names to factory functions so they appear in browser profiler.
            // Used with HotModuleReplacementPlugin
            // @see: https://webpack.js.org/plugins/named-modules-plugin/
            new webpack.NamedModulesPlugin(),

            // both development and production
            // injected the webpack bundles to `index.html` file.
            // @see: https://webpack.js.org/plugins/html-webpack-plugin/
            // More config @see: https://github.com/jantimon/html-webpack-plugin#configuration
            new HtmlWebpackPlugin({
                template: './stage/src/public/index.html',
                inject: 'body'
            }),

            // only development
            // do not emit compiled assets that include errors
            // @see: https://webpack.js.org/plugins/no-emit-on-errors-plugin/
            new webpack.NoEmitOnErrorsPlugin(),
        ],
    });
};


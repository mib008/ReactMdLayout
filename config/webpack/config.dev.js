/**
 * @author: @Sumscope
 */

const webpack = require('webpack'),
    util = require("util"),
    path = require('path');

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./config.common.js'); // the settings that are common to prod and dev

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
                './src/index.js',
            ],
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
            // Point sourcemap entries to original disk location (format as URL on Windows)
            // devtoolModuleFilenameTemplate: info =>
            //     path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
        },


        // `devtool` controls if and how source maps are generated
        // @see: https://webpack.js.org/configuration/devtool/#devtool
        devtool: 'source-map',

        // @see: https://webpack.js.org/configuration/dev-server/#devserver
        devServer: {
            contentBase: ["./src/public", "./lib", "./node_modules"],
            inline: true,
            hot: true,
            port: port,
            compress: true,
            overlay: true,
            watchOptions: {
                ignored: /node_modules/,
            },
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

            new webpack.ProvidePlugin({}),

            // both development and production
            // injected the webpack bundles to `index.html` file.
            // @see: https://webpack.js.org/plugins/html-webpack-plugin/
            // More config @see: https://github.com/jantimon/html-webpack-plugin#configuration
            new HtmlWebpackPlugin({
                template: './src/public/index.html',
                inject: 'body'
            }),

            // only development
            // Hot Module Replacement(HMR), in most cases no options are necessary.
            // @see: https://webpack.js.org/plugins/hot-module-replacement-plugin/
            new webpack.HotModuleReplacementPlugin(),

            // only development
            // Add module names to factory functions so they appear in browser profiler.
            // Used with HotModuleReplacementPlugin
            // @see: https://webpack.js.org/plugins/named-modules-plugin/
            new webpack.NamedModulesPlugin()

        ],
    });
};


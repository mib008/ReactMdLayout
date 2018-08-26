'use strict';

// Look in ./config folder for webpack.dev.js

// https://webpack.js.org/guides/migrating/

console.log("process.env.NODE_ENV = " + process.env.NODE_ENV);
console.log("process.env.npm_lifecycle_event = " + process.env.npm_lifecycle_event);

switch (process.env.npm_lifecycle_event) {
    case 'prod':
    case 'build_site':
        module.exports = require('./config/webpack.build_site')();
        break;
    case 'build_component':
        module.exports = require('./config/webpack.build_component')();
        break;
    case 'dev':
    case 'development':
    case 'server':
    default:
        module.exports = require('./config/webpack.dev')();
};

'use strict';
(function (require, process) {
    let util = require("util"),
        path = require("path"),
        express = require("express"),
        logger = require('express-log-url'),
        domain = require('express-domain-middleware');

    let port = process.env.port || 8080;
    let rootPath = process.env.root || 'dist';

    console.log(`Setting port: ${port} in server.`);

    let app = express();

    // 使用该中间件，在下方的处理中捕获异步程序中的异常。
    app.use(domain);

    // logger
    app.use(logger);

    // 挂载RestFul中间件
    // app.use(/^\/service/, require("./modules/middleware/serviceRouter.js"));

    app.use(express.static(rootPath));

    // 一般来说非强制性的错误处理一般被定义在最后
    // 错误处理的中间件和普通的中间件定义是一样的， 只是它必须有4个形参， 这是它的形式： (err, req, res, next):
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });

    app.use('*', function (request, response) {
        response.sendFile(path.resolve(rootPath, 'index.html'))
    })

    app.listen(port, function () {
        console.log(util.format("Listening on %s", port));
    });
})(require, process);

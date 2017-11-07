const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
    // src dir
    appSrc: resolveApp('src'),
    appIndexJs: resolveApp('src/index.js'),
    // public static dir
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    // build dir
    appBuild: resolveApp('build'),
    appNodeModules: resolveApp('node_modules'),
}

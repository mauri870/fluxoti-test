var path = require('path')

module.exports = {
    resolveLoader: {
        root: path.join(__dirname, '../node_modules'),
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        loaders: {
            scss: 'style!css!sass'
        }
    }
}
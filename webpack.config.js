var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

const entry = {};
const dir = './pages';

var files = fs.readdirSync(dir);
files.forEach(function (filename) {
  var fullname = path.join(dir, filename);
  entry[fullname] = './' + fullname;
});

module.exports = {
    entry,
    devtool: 'inline-source-map',
    output: {
        filename: '[name]',
        chunkFilename: '[name]',
        publicPath: 'build/',
        path: path.resolve(__dirname, 'build/'),
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                            ["env", {
                                "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                                }
                            }]
                        ]
                        }
                    }
                ]
            }
        ],
        rules: [
            {
                test: /pages\/.+\.js$/,
                use: [
                    {loader: path.resolve(__dirname, './lib/ClientLoader.js')}
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build/'),
        port: 9000
    },
}
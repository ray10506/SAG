const path = require('path');
//const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'synologyapplicationgateway.bundle.js',
        path: path.resolve('dist')
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'common-assets': path.resolve(__dirname, '../images'),
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                rootMode: 'upward'
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ESLintPlugin({ extensions: ['js', 'vue'] })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: /@require|@define/i,
                    }
                },
                extractComments: true
            })
        ]
    },
    watchOptions: {
        poll: true,
    },
}

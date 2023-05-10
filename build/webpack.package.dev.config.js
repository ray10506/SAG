const path = require('path');
const webpack = require('webpack');
//const merge = require('webpack-merge');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.package.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseWebpackConfig, {
    devtool: 'inline-cheap-module-source-map',
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        esModule: false,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            config: './postcss.config.js'
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
						implementation: require('sass'),
                        sourceMap: true,
                    }
                }
            ]
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            type: 'asset/inline',
        }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.vue' ],
        alias: {
            'vue': '@vue/runtime-dom'
        }
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new MiniCssExtractPlugin({
            filename: './style/synologyapplicationgateway.bundle.css',
        })
    ]
})

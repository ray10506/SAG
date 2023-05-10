const webpack = require('webpack')
//const merge = require('webpack-merge')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.package.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        generator: {
			'asset/resource': {
				outputPath: './assets/',
			}
		},
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './dist/assets/',
                    },
                },
                'css-loader',
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
            type: 'asset/resource',
        }]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new MiniCssExtractPlugin({
            filename: './style/synologyapplicationgateway.bundle.css',
        })
    ]
})

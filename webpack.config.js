const {resolve} = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
    entry: './js/index.js',
    mode: 'development',
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new CssMinimizerPlugin({
    //             minimizerOptions: [
    //                 {}, // Options for the first function (CssMinimizerPlugin.cssnanoMinify)
    //                 {}, // Options for the second function (CssMinimizerPlugin.cleanCssMinify)
    //                 {}, // Options for the third function
    //             ],
    //             minify: [
    //                 CssMinimizerPlugin.cssnanoMinify,
    //                 CssMinimizerPlugin.cleanCssMinify,
    //             ],
    //         }),
    //     ],
    //
    // },
    plugins: [
        new HtmlPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        port: 3000
    }
}
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        main: ["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", "./src/index.js"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js"
    },
    mode: "development",
    target: "web",
    devtool: "#source-map",
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        //options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2)$/,
                use: ["file-loader"]
            }
        ],
        noParse: [
            /aws/
        ]
    },
    node: {
        fs:"empty",
        net: "empty",
        module: "empty",
        child_process: "empty",
    },
    plugins: [
        /** meaningless log issue - https://github.com/jantimon/html-webpack-plugin/issues/895#issuecomment-379006202 */
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            excludeChunks: [ "server" ]
        }),
        new CopyWebpackPlugin([
            { from: "./src/lightning-design-system" }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
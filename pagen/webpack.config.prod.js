"use strict";

const webpack = require("webpack");

module.exports = {
    entry: "./src/bootstrap.js",
    output: {
        path: "./dist",
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel?presets[]=react&presets[]=es2015&presets[]=stage-2",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        }),
    ],
};

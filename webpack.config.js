const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: path.join(__dirname, "/src/index.ts"),

    resolve: {
        extensions: [".js", ".ts"],

        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },

    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        library: "$Engine",
        libraryTarget: "umd",
        filename: "engine.min.js",
        path: path.join(__dirname, "/build"),
    },

    mode: "development",
};

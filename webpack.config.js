const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return ({
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index.bundle.js"
        },
        mode: argv.mode,
        devtool: isDevelopment
            ? '#eval-source-map'
            : 'source-map',
        devServer: {
            stats: {
                children: false,
                maxModules: 0
            },
            port: 3001,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                },
                {
                    test: /\.(scss|css)$/,
                    use: ["style-loader", "css-loader", "sass-loader?modules=true"]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss']
        },
        plugins: [
            new HtmlWebpackPlugin({ template: "./index.html" }),
        ]
    })
};
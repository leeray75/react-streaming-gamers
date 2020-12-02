let path = require("path");
let webpack = require("webpack");
let package = require("./package.json");
let version = package.version;
let versions = version.split(".");
let majorVersion = versions[0];
let minorVersion = versions[1];
let patchVersion = (versions[2].split("-"))[0];
let folderVersion = `${majorVersion}.${minorVersion}.${patchVersion}`;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let config = {
    mode: 'production',
    entry: {
        //"common": "./src/common.js",
        //"polyfill": path.resolve(__dirname, "src","polyfill.js"),
        "react-streaming-gamers": path.resolve(__dirname, "src","app","index.js")
    },
    output: {
        path: path.resolve(__dirname, 'dist', majorVersion, folderVersion, 'js'),
        //publicPath: "/js/",
        filename: "[name].bundle.js"
    },
    /*
    optimization: {
        splitChunks: {
            name: 'vendors',
            chunks: 'all'
        }
    },
    */
    
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(package.version)
        }),
        //new BundleAnalyzerPlugin()

    ],

    resolve: {
        extensions: [".js", ".jsx", ".scss"],
        alias: {
            "@leeray75/react-streaming-gamers": path.resolve(__dirname, "src", "app"),
            "sass": path.resolve(__dirname, "src", "sass")
        }
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|gif|woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'raw-loader' }
                ]
            }

        ]
    },
    devtool: "source-map",
    target: ['web', 'es5']
};
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//config.plugins.push(new BundleAnalyzerPlugin());
module.exports = config;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '/public/path/to/',
                    },
                  },
                  'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
          title: 'Домашняя работа №14',
          template : './src/index.html'
        })
      ],
};

module.exports = config;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                      '@babel/preset-react',
                      '@babel/preset-env'
                      ],
                      plugins: [
                        [
                          "@babel/plugin-proposal-class-properties",
                          {
                            "loose": true
                          }
                        ]
                      ]
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
          filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
          title: 'Домашняя работа №16',
          template : './src/index.html'
        })
      ],
};

module.exports = config;
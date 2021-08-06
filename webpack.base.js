// Native Node modules.
const path = require('path')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const paths = {
  base: '.',
  scss: path.resolve('.', '_scss')
}

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../_site/css/main.css'
    })
  ],
  entry: {
    main: [
      path.resolve(paths.scss, 'main.scss')
    ]
  },
  output: {
    filename: '../js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                  [
                    'postcss-sort-media-queries',
                    {
                      sort: 'mobile-first'
                    }
                  ]
                ]
              }
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {}
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}

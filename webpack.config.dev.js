var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // The base directory for resolving the entry option
  context: __dirname,
  devtool: 'eval',
  mode: 'development',
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      'index.hot'
    ],
    vendor: [
      'react',
      'react-dom',
      'immutable',
      'react-router-dom',
      'json3',
      'url',
      'prop-types'
    ]
  },

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/assets/',
    filename: 'curls-app.dev.js',
    pathinfo: true
  },

  // Where to resolve our loaders
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
    moduleExtensions: ['-loader'],
  },

  resolve: {
    // Directories that contain our modules
    symlinks: false,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    mainFields: ['jsnext:main', 'main', 'browser'],
    descriptionFiles: ['package.json'],
    moduleExtensions: ['-loader'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      immutable: path.resolve('./node_modules/immutable'),
      'core-js': path.resolve('./node_modules/core-js'),
      'prop-types': path.resolve('./node_modules/prop-types'),
      lodash: path.resolve('./node_modules/lodash-es'),
      emotion: path.resolve('./node_modules/emotion')
    },
    // Extensions used to resolve modules
    extensions: ['.js', '.react.js', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /lodash$/,
        sideEffects: false
      },
      {
        test: /\.css$/,
        use: [
          'style',
          'css'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style',
          'css',
          'group-css-media-queries',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: ['file']
      },
      {
        test: /\.js$/,
        use: ['babel'],
        exclude: [/node_modules/]
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/),
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor'],
                                             filename: 'vendor.dev.js'}),
  ],

  // Include mocks for when node.js specific modules may be required
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

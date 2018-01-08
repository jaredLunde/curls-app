var webpack = require('webpack');
var DevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');


console.log("NODE_ENV:", process.env.NODE_ENV)


new DevServer(webpack(config), {
  publicPath: config.output.publicPath,
  compress: true,
  historyApiFallback: true,
  disableHostCheck: true,
  quiet: true,
  inline: true
}).listen(3000, '0.0.0.0', function (err, result) {
  console.log('🌎  Listening at http://0.0.0.0:3000/');
});

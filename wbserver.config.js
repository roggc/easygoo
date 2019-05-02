//wbserver.config.js

const path= require('path')
const nodeExternals = require('webpack-node-externals')

module.exports=
{
  target: 'node',
  externals: [nodeExternals()],
  entry:
  {
    server: './src/entries/server.js'
  },
  output:
  {
    path: path.join(__dirname,'out/server'),
    filename: '[name].bundle.js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: "babel-loader"
        }
      }
    ]
  }
}

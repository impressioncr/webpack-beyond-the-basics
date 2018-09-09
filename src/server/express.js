const express = require('express')
const path = require('path')
const webpack = require('webpack')
const config = require('../../config/webpack.dev')
const compiler = webpack(config)


const server = express()

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler, 
  config.devServer
)
const webpackHotMiddleWare = require('webpack-hot-middleware')(
  compiler,
  config.devServer
)
const staticMiddleware = express.static('dist')

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleWare)
server.use(staticMiddleware)

const PORT = 8080
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
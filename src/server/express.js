const express = require('express')
const path = require('path')

const server = express()

const isProd = process.env.NODE_ENV === "production"

if (!isProd) {
  const webpack = require('webpack')
  const config = require('../../config/webpack.dev')
  const compiler = webpack(config)

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler, 
    config.devServer
  )
  const webpackHotMiddleWare = require('webpack-hot-middleware')(
    compiler,
    config.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddleWare)
}

// const staticMiddleware = express.static('dist')
// server.use(staticMiddleware)

const expressStaticGzip = require('express-static-gzip')
server.use(expressStaticGzip('dist', {
  enableBrotli: true
}))

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
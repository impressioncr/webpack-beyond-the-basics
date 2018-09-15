import express from 'express'
import path from 'path'
import React from 'React'
import ReactDOMServer from 'react-dom/server'
import App from '../app'


const server = express()

const isProd = process.env.NODE_ENV === "production"
console.info('isProd', isProd)

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

server.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="react-root">
          ${ReactDOMServer.renderToString(<App />)}
        </div>
        <script src="vendor-bundle.js"></script>
        <script src="main-bundle.js"></script>
      </body>
    </html>
  `)
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
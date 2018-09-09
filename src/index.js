require('webpack-hot-middleware/client?reload=true')
require('./main.styl')
require('./images/link.jpg')
require('./index.html')

const a = async () => {
  await console.log('Hello from the future!')
}
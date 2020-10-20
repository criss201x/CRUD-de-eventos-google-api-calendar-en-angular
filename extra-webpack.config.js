const path = require('path');
module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      fs: path.resolve(__dirname, 'src/mocks/fs.mock.js'),
      child_process: path.resolve(
        __dirname,
        'src/mocks/child_process.mock.js'
      ),
      os: path.resolve(__dirname, 'src/mocks/os.mock.js'),
      crypto: path.resolve(
        __dirname,
        'src/mocks/crypto.mock.js'
      ),
      stream: path.resolve(
        __dirname,
        'src/mocks/stream.mock.js'
      ),
      'path': path.resolve(__dirname, 'src/mocks/path.mock.js'),
      'https-proxy-agent': path.resolve(
        __dirname,
        'src/mocks/https-proxy-agent.mock.js',
      ),
    },
  },
};

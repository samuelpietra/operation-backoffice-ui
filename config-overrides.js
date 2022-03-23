const path = require('path')

module.exports = {
  webpack: function (config) {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    }

    return config
  },
  jest: function (config) {
    config.transformIgnorePatterns = ['node_modules/(?!react-native|zarp-ui)']

    return config
  },
}

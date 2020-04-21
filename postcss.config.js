module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 3,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [
        /(\/|\\)(node_modules)(\/|\\)/,
        /(\/|\\)(src)(\/|\\)(pages|components)(\/|\\)(admin)(\/|\\)/
      ]
    }
  }
}
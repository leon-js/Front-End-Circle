const path = require('path')
// const pkg = require('./package.json')

// const ENV = process.env.APP_ENV || 'dev'
// const options = {
//   pro: {
//     assetsRoot: path.resolve(__dirname, './dist/PRO', pkg.version),
//     assetsPublicPath: `https://m.hellobike.com/${ pkg.name }/PRO/${ pkg.version }/`
//   },
//   uat: {
//     assetsRoot: path.resolve(__dirname, './dist/UAT', pkg.version),
//     assetsPublicPath: `https://m.hellobike.com/${ pkg.name }/UAT/${ pkg.version }/`
//   },
//   fat: {
//     assetsRoot: path.resolve(__dirname, './dist/FAT', pkg.version),
//     assetsPublicPath: `https://m.hellobike.com/${ pkg.name }/FAT/${ pkg.version }/`
//   },
//   pt: {
//     assetsRoot: path.resolve(__dirname, './dist/PT', pkg.version),
//     assetsPublicPath: `https://m.hellobike.com/${ pkg.name }/PT/${ pkg.version }/`
//   },
//   dev: {
//     assetsRoot: path.resolve(__dirname, './dist/DEV', pkg.version),
//     assetsPublicPath: '/'
//   }
// }

// const config = options[ENV] || options.dev

// if (process.env.APP_ENV !== 'dev') {
//   process.env.NODE_ENV = 'production'
// }

module.exports = {
  // outputDir: config.assetsRoot,
  // publicPath: config.assetsPublicPath,
  // devClientPort: 9090,
  // proxy: {
  //   '/api': {
  //     target: 'http://120.55.69.240:8654',
  //     // target:       'http://121.40.107.27:8654',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   }
  // },
  alias: {
    '@': path.resolve('src'),
    '@api': path.resolve('src', 'api'),
    '@assets': path.resolve('src', 'assets'),
    '@components': path.resolve('src', 'components'),
    '@models': path.resolve('src', 'models'),
    '@pages': path.resolve('src', 'pages'),
    '@routes': path.resolve('src', 'routes'),
    '@styles': path.resolve('src', 'styles'),
    '@utils': path.resolve('src', 'utils')
  }
}

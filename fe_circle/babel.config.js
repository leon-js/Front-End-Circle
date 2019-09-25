module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', { modules: false }]],
  plugins: [
    'lodash',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['import', { libraryName: 'antd', style: 'css' }, 'antd'],
    [
      'import',
      {
        libraryName: 'react-utils-components',
        libraryDirectory: 'components'
      },
      'react-utils-components'
    ]
  ]
}

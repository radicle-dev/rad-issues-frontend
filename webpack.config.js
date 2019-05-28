var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

plugins: [
  new HtmlWebpackPlugin({
        inlineSource: '.(js|css)$' // embed all javascript and css inline
    }),
  new HtmlWebpackInlineSourcePlugin()
]

resolve: { alias: { type: 'type-component' } },


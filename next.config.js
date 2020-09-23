const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
// eslint-disable-next-line no-unused-vars
const path = require('path');
// eslint-disable-next-line no-unused-vars
const glob = require('glob');
const webpack = require('webpack');

/* eslint-disable no-param-reassign */
module.exports = withCSS(withFonts({
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname),
      '@pages-content': path.join(__dirname, './pages-content'),
      '@components': path.join(__dirname, './components'),
      '@store': path.join(__dirname, './store'),
      '@shared': path.join(__dirname, './shared'),
      '@constants': path.join(__dirname, './constants'),
      '@static': path.join(__dirname, './static'),
      '@styles': path.join(__dirname, './styles'),
      '@typesTS': path.join(__dirname, './typesTS'),
    };


    // NOTE: ORDER matters
    //       the emit-file-loader must be pushed before the rules in webpack-extension.js are pushed
    config.module.rules.push({
      test: /\.(css|scss)/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}));

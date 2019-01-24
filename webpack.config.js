const path = require('path');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
      })
    ]
  }
}

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'lib'),
        library: 'SolarPopup',
        libraryTarget: 'umd'
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
              test: /\.scss$/,
              exclude: /\.module\.scss$/,
              use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
            },
            {
              test: /\.module\.scss$/,
              use: [
                'style-loader',
                CSSModuleLoader,
                postCSSLoader,
                'sass-loader',
              ]
            },
        ]
    },
    externals: {
      "react": "react",
      "react-dom": "reactDOM"
    }
};
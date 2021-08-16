
module.exports = {
  modifyWebpackOptions(opts) {
    const options = opts.options.webpackOptions;    // Add .marko to exlude
    options.fileLoaderExclude = [/\.marko?$/, ...options.fileLoaderExclude];
    return options;
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;    // Add .marko to extensions

    config.resolve.extensions = [...config.resolve.extensions, '.marko'];

    config.module.rules.push({
      test: /\.marko$/,
      loader: require.resolve('marko-loader')
    });

    return config;
  }
}
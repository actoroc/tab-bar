module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'notwork': '@/notwork',
      },
      extensions: ['.js', '.css', '.vue', '.json'],
    },
  },
};

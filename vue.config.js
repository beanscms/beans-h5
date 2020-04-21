module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  pages: {
    admin: {
      entry: 'src/pages/admin/main.js',
      template: 'public/admin.html',
      filename: 'admin.html',
      title: 'Beans H5 Admin',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    h5: {
      entry: 'src/pages/h5/main.js',
      template: 'public/h5.html',
      filename: 'h5.html',
      title: 'Beans H5',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}
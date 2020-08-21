module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js','.tsx','ts','jsx'],
  },
  externals: [
    {
      react: 'React',
    },
  ],
};

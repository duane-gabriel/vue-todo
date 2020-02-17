module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

}
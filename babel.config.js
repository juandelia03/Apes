module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules(?!(\/|\\)pdfjs-dist)/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-optional-chaining"],
      },
    },
  ],
};

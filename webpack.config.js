export default {
  mode: "production",
  experiments: {
    futureDefaults: true,
    outputModule: true, // Output esm whenever possible
  },
  output: {
    clean: true, // Clean the output directory before emit.
    filename: "main.js",
  },
  resolve: {
    symlinks: false,
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
    ],
  },
};

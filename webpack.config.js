const path = require("path")


module.exports = {
    entry: "./src/index.js",
    output : {
        path: path.resolve(".","build"),//folder,
        filename: "bundle.js"//filename
    },
    mode: "development",
    module: {
        rules: [ { test: /\.css$/, use: ['css-loader' , 'style-loader'] } ],
      },
};
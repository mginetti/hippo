const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
    publicPath: process.env.NODE_ENV === "development" ? "" : "",

    runtimeCompiler: true,

    configureWebpack: {
        plugins: [new GenerateSW()]
    }
};

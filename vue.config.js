const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "",
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, "dist"),
            // Required - Routes to render.
            routes: ["/", "/about"],
            renderer: new Renderer({
              inject: {
                _m: 'prerender'
              },
              //这样写renderAfterTime生效了
              // headless: false,
              renderAfterTime: 5000,
              // renderAfterDocumentEvent: 'render-event',
            })
          })
        ]
      };
    } else {
      return;
    }
  }
};

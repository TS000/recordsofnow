// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/pretzel/code/recordsofnow/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/pretzel/code/recordsofnow/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/pretzel/code/recordsofnow/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/home/pretzel/code/recordsofnow/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/pretzel/code/recordsofnow/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/pretzel/code/recordsofnow/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/pretzel/code/recordsofnow/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/pretzel/code/recordsofnow/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/home/pretzel/code/recordsofnow/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/pretzel/code/recordsofnow/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/pretzel/code/recordsofnow/.cache/layouts/index.js")
}
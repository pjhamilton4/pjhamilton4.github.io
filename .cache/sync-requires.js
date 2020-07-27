const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\code\\javascript-learn\\gatsby-starter-cv\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\code\\javascript-learn\\gatsby-starter-cv\\src\\pages\\index.js"))),
  "component---src-pages-portifolio-js": hot(preferDefault(require("D:\\code\\javascript-learn\\gatsby-starter-cv\\src\\pages\\portifolio.js")))
}


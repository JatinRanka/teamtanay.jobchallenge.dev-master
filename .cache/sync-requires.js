const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-pages-template-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\src\\templates\\pages.template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\src\\pages\\404.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\src\\pages\\blogs.js"))),
  "component---src-pages-faqs-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\src\\pages\\faqs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\src\\pages\\index.js"))),
  "component---src-pages-participants-js": hot(preferDefault(require("D:\\team tanay\\teamtanay.jobchallenge.dev-master\\src\\pages\\participants.js")))
}


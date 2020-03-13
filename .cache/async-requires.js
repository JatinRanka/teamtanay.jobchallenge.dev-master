// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-pages-template-js": () => import("./../src/templates/pages.template.js" /* webpackChunkName: "component---src-templates-pages-template-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blogs-js": () => import("./../src/pages/blogs.js" /* webpackChunkName: "component---src-pages-blogs-js" */),
  "component---src-pages-faqs-js": () => import("./../src/pages/faqs.js" /* webpackChunkName: "component---src-pages-faqs-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-participants-js": () => import("./../src/pages/participants.js" /* webpackChunkName: "component---src-pages-participants-js" */)
}


const routeParamSlug = state => state.route.params.slug
const routeParamSite = state => state.route.params.site
const routeParams = state => state.route.params
const routeParamPage = state => state.route.params.page
const currentSite = state => state.currentSite
const pageType = state => state.pageType

export {
  routeParamSlug,
  routeParamSite,
  routeParams,
  routeParamPage,
  currentSite,
  pageType
}

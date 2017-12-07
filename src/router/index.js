import Config from '../app.config.js'
import Vue from 'vue'
import DefaultThemeLayout from '../theme/yachad/Layout'
import DefaultHomePage from '../theme/yachad/Home'
import DefaultSinglePage from '../theme/yachad/Single'
import DefaultBlogListing from '../theme/yachad/Blog/Listing'
import DefaultBlogSingle from '../theme/yachad/Blog/Single'
import EventListing from '../theme/yachad/Events/Listing'
import EventSingle from '../theme/yachad/Events/Single'
import ServicesListing from '../theme/yachad/Services/Listing'
import ServicesSingle from '../theme/yachad/Services/Single'
import DefaultStaff from '../theme/yachad/Staff'
import DefaultDonate from '../theme/yachad/Donate'
import summerTheme from './summerTheme'
import VueRouter from 'vue-router'
import store from '../vuex/store'

Vue.use(VueRouter)

const routes = []

routes.push(...summerTheme)

const defaultTheme = (routes = []) => ({
  component: DefaultThemeLayout,
  children: [
    ...routes,
    {
      path: 'blog',
      component: DefaultBlogListing
    },
    {
      path: 'blog/news/:slug',
      component: DefaultBlogSingle
    }, {
      path: 'staff',
      component: DefaultStaff
    }, {
      path: '',
      component: DefaultHomePage
    }, {
      path: ':slug',
      component: DefaultSinglePage
    }]
})

Object.entries(Config.regionSites).map(([slug, site]) => {
  routes.push({
    beforeEnter: (to, from, next) => {
      store.dispatch('setSite', site)
      next()
    },
    path: `/${slug}`,
    ...defaultTheme()
  })
})

routes.push({
  path: '/',
  ...defaultTheme([
    {
      path: 'services',
      component: ServicesListing
    },
    {
      path: 'services/:slug',
      component: ServicesSingle
    },
    {
      path: 'donate',
      component: DefaultDonate
    },
    {
      path: 'events',
      component: EventListing
    },
    {
      path: 'events/:slug',
      component: EventSingle
    }
  ])
})

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router

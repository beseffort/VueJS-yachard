import SummerLayout from '../theme/summer/Layout'
import SummerHome from '../theme/summer/FrontPage'
import Config from '../app.config.js'
import store from '../vuex/store'

const routes = []

const summerTheme = (routes = []) => ({
  component: SummerLayout,
  children: [
    ...routes,
    {
      path: '',
      component: SummerHome
    }
  ]
})

Object.entries(Config.summerSites).map(([slug, site]) => {
  routes.push({
    beforeEnter: (to, from, next) => {
      store.dispatch('setSite', site)
      next()
    },
    path: `/${slug}`,
    ...summerTheme()
  })
})

routes.push({
  path: '/summer',
  ...summerTheme()
})

export default routes

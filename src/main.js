import Vue from 'vue'
import App from './App'
import cleaner from 'clean-html'

Vue.directive('clean-html', function (el, binding) {
  cleaner.clean(binding.value, function (html) {
    el.innerHTML = html
  })
})

const app = new Vue({
  render (h) {
    return h(App)
  }
})

export default app

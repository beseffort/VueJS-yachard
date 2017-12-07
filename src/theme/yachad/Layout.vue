<template>
  <div>
    <yachadHeader></yachadHeader>
    <router-view></router-view>
    <yachadFooter></yachadFooter>
  </div>
</template>
<script>
import yachadHeader from './Headers/default'
import yachadFooter from './Footers/default'

export default {
  created () {
    if (process.env.VUE_ENV !== 'server') {
      window.WebFont.load({
        typekit: {
          id: 'drb8ytv'
        }
      })
    }
  },
  components: {
    yachadHeader,
    yachadFooter
  }
}
</script>

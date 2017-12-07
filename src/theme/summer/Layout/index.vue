<template>
  <div>
    <summerHeader></summerHeader>
    <router-view></router-view>
    <summerFooter></summerFooter>
  </div>
</template>
<script>
import summerHeader from '../Headers/default'
import summerFooter from '../Footers/default'

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
    summerHeader,
    summerFooter
  }
}
</script>

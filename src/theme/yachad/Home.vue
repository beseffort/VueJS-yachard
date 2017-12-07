<template>
  <div>
    <YachadFrontpage v-if="currentSite === 'Yachad'"></YachadFrontpage>
    <RegionFrontpage v-else :region="currentSite"></RegionFrontpage>
  </div>
</template>

<script>
import pageType from 'src/mixins/pageType'
import { mapGetters } from 'vuex'
import YachadFrontpage from './Home/Yachad/index'
import RegionFrontpage from './Home/Region/index'

export default {
  name: 'Home',
  mixins: [pageType('frontpage')],
  computed: {
    ...mapGetters(['currentSite'])
  },
  components: {
    YachadFrontpage,
    RegionFrontpage
  }
}
</script>

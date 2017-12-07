import { mapActions } from 'vuex'

export default function (pageType) {
  return {
    created () {
      this.setPageType(pageType)
    },
    methods: {
      ...mapActions(['setPageType'])
    }
  }
}

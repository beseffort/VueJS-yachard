<template>
    <ul class="menu-list">
      <MenuSingle v-for="item of menuItems" :item="item" :key="item.title"></MenuSingle>
    </ul>
</template>
<script>
  import MenuSingle from './MenuSingle'
  import { mapGetters } from 'vuex'

  const fetchInitialData = (store) => {
    store.state.menu.items = []
    return store.dispatch(`menu/getMenu`)
  }
  export default {
    computed: {
      ...mapGetters('menu', ['menuItems'])
    },
    prefetch: fetchInitialData,
    created () {
      if (this.menuItems.length === 0) {
        fetchInitialData(this.$store)
      }
    },
    name: 'MainMenu',
    components: {
      MenuSingle
    }
  }
</script>

<style scoped>

</style>

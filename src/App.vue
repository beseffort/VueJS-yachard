<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import store from './vuex/store'
import router from './router'

import { sync } from 'vuex-router-sync'

sync(store, router)

export default {
  router,
  store
}
</script>

<style>
@import './assets/main.css';
</style>


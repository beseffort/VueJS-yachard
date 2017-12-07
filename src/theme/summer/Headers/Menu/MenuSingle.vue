<template>
  <li :class="{ menu__dropdown: item.children}">
      <span  @click="toggleDropdown" v-if="item.children">{{ item.title }}</span>
      <a v-else :href="item.url">{{ item.title }}</a>
      <ul class="menu__dropdown-menu" v-if="item.children" :class="{ open: isOpen}">
        <li v-for="itemChild of item.children">
          <a :href="itemChild.url">{{ itemChild.title }}</a>
        </li>
      </ul>
  </li>
</template>

<script>
  export default {
    name: 'MenuSingle',
    props: ['item'],
    data: function () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropdown () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
</style>

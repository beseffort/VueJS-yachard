<template>
  <div class="site-header clearfix" :class="'site-header--'+ pageType">
    <div class="container">
      <a href="/" class="site-logo">
        <img src="https://res.cloudinary.com/njcd/image/upload/v1494945268/2017site/logo.png" alt="Yachad" class="site-logo__img" />
        <span class="site-logo__chapter-name" v-if="currentSite == 'Israel'">Yachad {{ currentSite }}</span>
        <span class="site-logo__chapter-name" v-else-if="currentSite !== 'Yachad'">{{ currentSite }} Yachad</span>
      </a>
      <nav class="responsive-nav">
        <Usermenu></Usermenu>
        <a href="#" class="menu-hook" @click="toggleMenu"></a>
        <a href="/donate" class="btn nav__donate">Donate</a>
        <div class="site-nav__main" :class="{ show: isOpen }">
          <a href="#" class="menu-close"  @click="toggleMenu">x</a>
          <MainMenu></MainMenu>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import Usermenu from '../../../Shared/Usermenu/index'
  import MainMenu from './Menu/index'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['pageType']),
      ...mapGetters(['currentSite'])
    },
    name: 'summerHeader',
    components: {
      Usermenu,
      MainMenu
    },
    data: function () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleMenu () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
.site-header {
	width: 100%;
	top: 0;
	left: 0;
	padding-top: 35px;
	padding-bottom: 30px;
	z-index: 2;
	background-image: url('https://res.cloudinary.com/njcd/image/upload/v1494945266/2017site/inner-header.jpg');
	background-position: top left;
	background-repeat: no-repeat;
	background-size: cover;
}
.site-header.site-header--frontpage {
	position: absolute;
	background-image: none;
	padding-bottom: 50px;
	padding-top: 45px;
}
.site-header.site-header--white {
	width: 100%;
	top: 0;
	left: 0;
	padding-top: 35px;
	padding-bottom: 30px;
	z-index: 2;
	background:white;
}

.site-header.site-header--frontpage {
	position: absolute;
	background-image: none;
	padding-bottom: 50px;
	padding-top: 65px;
}
.site-logo {
    display: inline-block;
		white-space: nowrap;
		float: left;
		position: relative;
}
.site-logo__img {
	float: left;
	width: 200px;
}
@media only screen and (min-width: 720px) {
  .site-logo__img {
    width:auto;
  }
}
.site-logo__chapter-name {
  color: #ee6f1f;
  font-family: 'proxima-nova-condensed', sans-serif;
  position: absolute;
  bottom: -8px;
  text-transform: uppercase;
  font-weight: 600;
  left: 66px;
  font-size: 12px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 720px) {
  .site-logo__chapter-name {
    font-size: 14px;
    left: 96px;
    bottom: -10px;
  }
}


.inner-menu {
	background: #252e43;
	text-align: center;
}
.inner-menu a {
	color: #838ca0;
	display: block;
	font-weight: 600;
	font-size: 14px;
	padding:20px 5px;
}
.inner-menu .current_page_item a,
.inner-menu a.active {
	color: white;
	border-bottom: 4px solid #ee6f1f;
}
.inner-menu li {
	display: inline-block;
	margin:0 10px;
}
</style>

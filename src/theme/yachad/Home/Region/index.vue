<template>
  <div>
    <ChapterFpHeader :region="region"></ChapterFpHeader>
    <ChapterFpMain></ChapterFpMain>
    <ChapterFpHero></ChapterFpHero>
    <ChapterFpBlog></ChapterFpBlog>
    <Events></Events>
    <Staff></Staff>
  </div>
</template>

<script>
import ChapterFpHeader from './header'
import ChapterFpMain from './main'
import ChapterFpHero from './hero'
import ChapterFpBlog from './blog'
import Events from 'src/Shared/Events/index'
import Staff from '../../Staff/index'
export default {
  name: 'RegionFrontpage',
  props: ['region'],
  components: {
    ChapterFpHeader,
    ChapterFpMain,
    ChapterFpHero,
    ChapterFpBlog,
    Events,
    Staff
  }
}
</script>

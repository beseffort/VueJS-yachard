<template>
  <div>
    <FrontpageHeader></FrontpageHeader>
    <FrontpageMainText></FrontpageMainText>
    <FrontpagePrograms></FrontpagePrograms>
    <Events></Events>
    <FrontpageFeatured></FrontpageFeatured>
  </div>
</template>

<script>
import FrontpageHeader from './header'
import FrontpageMainText from './main'
import FrontpagePrograms from './programs'
import Events from 'src/Shared/Events/index'
import FrontpageFeatured from './featured'

export default {
  name: 'Home',
  components: {
    FrontpageHeader,
    FrontpageMainText,
    FrontpagePrograms,
    Events,
    FrontpageFeatured
  }
}
</script>

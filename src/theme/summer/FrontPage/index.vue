<template>
  <div>
    <FrontpageHeader></FrontpageHeader>
    <FeaturedPrograms></FeaturedPrograms>
    <PhotoStrip></PhotoStrip>
    <SummerPrograms></SummerPrograms>
    <Donate></Donate>
  </div>
</template>

<script>
import FrontpageHeader from './header'
import FeaturedPrograms from './featured'
import PhotoStrip from './photostrip'
import SummerPrograms from './programs'
import Donate from './donate'

export default {
  name: 'Home',
  components: {
    FrontpageHeader,
    FeaturedPrograms,
    PhotoStrip,
    SummerPrograms,
    Donate
  }
}
</script>

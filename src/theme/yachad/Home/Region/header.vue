<template>
  <header class="frontpage__header frontpage__header--chapter" style="background-image:url('https://res.cloudinary.com/njcd/image/upload/v1500289810/2017site/regionHeader.jpg')">
    <div class="container">
      <span class="name">{{ region }}</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'ChapterFpHeader',
    props: ['region']
  }
</script>

<style scoped>
header {
  height:400px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1494945293/2017site/homepage_header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding-top: 150px;
  position: relative;
}
  header:after {
    content:"";
    height: 55px;
    background-image: url('https://res.cloudinary.com/njcd/image/upload/a_180/v1495031643/2017site/white-grunge.png');
    background-repeat: repeat-x;
    position: absolute;
    bottom: -47px;
    left: 0;
    width: 100%;
  }

.name {
  font-family: 'matt-b', sans-serif;
  text-transform: uppercase;
  display: block;
  font-size: 40px;
  line-height: 1;
  margin-top: 80px;
  margin-bottom: 60px;
  z-index: 1;
  position: relative;
}
@media (min-width: 720px) {
  .name {
    font-size: 80px;
  }
}
</style>

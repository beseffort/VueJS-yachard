<template>
  <header>
    <div class="container">
      <span class="header-text">Because <span>Everyone</span> Belongs</span>
      <a href="/donate" class="btn">Donate Now</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'FrontpageHeader'
  }
</script>

<style scoped>
header {
  height: 500px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1494945293/2017site/homepage_header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding-top: 150px;
  position: relative;
}
  header:before {
    content:"";
    background: #252e43;
    opacity: .6;
    position: absolute;
    height: 100%;
    width:100%;
    top:0;
    left:0;
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

@media only screen and (min-width: 720px) {
  header {
    height:850px;
    padding-top: 220px;
  }

  header:before  {
    display: none;
  }
}

.header-text {
  font-family: 'matt-b', sans-serif;
  display: block;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 60px;
  z-index: 1;
  position: relative;
}
.header-text span {
  font-size: 80px;
  display: block;
}
@media only screen and (min-width: 720px) {
  .header-text {
    font-size: 60px;
  }
  .header-text span {
    font-size: 120px;
  }
}
.btn {
  z-index: 1;
  position: relative;
}
</style>

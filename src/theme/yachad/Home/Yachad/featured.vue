<template>
  <div class="fp-featured">
    <div class="container">
      <div class="section">
        <div class="col span_1_of_2">
          <a href="#" class="fp-featured__img" style="background-image:url('https://res.cloudinary.com/njcd/image/upload/v1494945275/2017site/fp-programs.jpg')"></a>
        </div>
        <div class="col span_1_of_2">
          <span class="fp-featured__label">Featured Story</span>
          <a href="#" class="fp-featured__name">Name of Featured Story</a>
          <p class="fp-featured__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. commodo consequat</p>
          <a href="#" class="fp-featured__more">Read Story ></a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'FrontpageFeatured'
  }
</script>

<style scoped>
.fp-featured {
  padding:120px 0 100px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1494945263/2017site/fp-featured-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.fp-featured__img {
    display: block;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 3px 3px 10px #0d1a35;
    margin-bottom: 20px;
}
@media only screen and (min-width: 720px) {
  .fp-featured__img {
    margin-right: 40px;
    margin-bottom: 0;
  }
}
.fp-featured__label {
    display: block;
    text-transform: uppercase;
    color: #7fa4f5;
    font-weight: 600;
    font-family: 'proxima-nova-condensed', sans-serif;
}
.fp-featured__name {
    font-size: 40px;
    line-height: 1.2;
    color: white;
    display: block;
    border-bottom: 1px solid #ccdbfc;
    font-family: 'matt-b', sans-serif;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
.fp-featured__excerpt {
  color: #ccdbfc;
  font-size: 18px;
  margin-bottom: 20px;
}
.fp-featured__more {
  color: #ee6f1f;
  font-family: 'matt-b', sans-serif;
  font-size: 20px;
}
.all-btn {
  color: #ee6f1f;
  font-family: 'matt-b', sans-serif;
  display: block;
  margin: 40px auto 0;
  width: 250px;
  text-align: center;
  font-size: 20px;
}
</style>

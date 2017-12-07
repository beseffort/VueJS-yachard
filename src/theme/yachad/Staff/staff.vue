<template>
  <div class="staff col span_1_of_4">
      <a href="/"  class="staff__image" style="background-image:url('https://res.cloudinary.com/orthodox-union/image/upload/v1488981790/teach-network/anon.png')"></a>
      <div class="staff__body">
        <a href="/" class="staff__name">Dan Harmon</a>
        <span class="staff__title">Creator</span>
        <a class="staff__email" href="mailto:#">harmon@adultswim.org</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EventsSingle'
}
</script>

<style scoped>
.staff {
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.4;
  font-size: 14px;
}
@media only screen and (min-width: 720px) {
  .staff.span_1_of_4:nth(4n+1) {
    margin-left: 0;
    clear: both;
  }
}
.staff__image {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: block;
    margin: 0 auto 20px;
    background-color: #727b84;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.staff__name {
    color: #444955;
    display: block;
    font-weight: 600;
    font-size: 16px;
}
.staff__email {
  display: block;
  color: #214ba7;
}
</style>

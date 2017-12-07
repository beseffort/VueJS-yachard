<template>
  <div class="events-module">
    <div class="container">
      <span class="title">Upcoming Events</span>
      <div class="section">
        <SingleEvent></SingleEvent>
      </div>
      <a href="/events" class="all-btn">All Events ></a>
    </div>
  </div>
</template>

<script>
  import SingleEvent from './single'

  export default {
    name: 'Events',
    components: { SingleEvent }
  }
</script>
<style scoped>
.events-module {
  padding:100px 0 80px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1494945264/2017site/pattern-bg.jpg');
  background-repeat: repeat;
}
.title {
  font-weight: 600;
  color: #252e43;
  text-transform: uppercase;
  font-size: 32px;
  font-family: 'proxima-nova-condensed', sans-serif;
  margin-bottom: 60px;
  display: block;
  text-align: center;
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

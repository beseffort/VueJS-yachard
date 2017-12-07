<template>
  <div class="col span_1_of_4">
    <div class="events-module__event">
      <a href="#" class="events-module__img" style="background-image:url('https://res.cloudinary.com/njcd/image/upload/c_fill,f_auto,g_faces,h_300,w_500/v1475442081/events/nkxtndy9k4dzjb6o9oqf.jpg');">
        <div class="events-module__date">
          Feb
          <span>2</span>
        </div>
      </a>
      <span class="events-module__time">Wed, Feb 1st at 7:45 PM</span>
      <a href="#" class="events-module__name">Hapoel Yerushalayim Basketball Game</a>
      <span class="events-module__chapter">Israel</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleEvent'
  }
</script>

<style scoped>
.events-module__event{
  background:white;
  box-shadow: 2px 2px 10px #e8eaec;
  position: relative;
  margin: 0 15px 20px;
  padding-bottom: 1px;
}
@media only screen and (min-width: 720px) {
  .events-module__event{
    height: 360px;
  }
}
.events-module__img {
  height: 170px;
  display: block;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
  background-color: #252e43;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1495053364/2017site/event_placeholder.png');
}
.events-module__date {
    background: white;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px 20px;
    color: #214ba7;
    font-family: 'proxima-nova-condensed', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
}
.events-module__date span {
  display: block;
  font-weight: 700;
  font-size: 22px;
  line-height: 1;
}
.events-module__time {
    display: block;
    padding: 0 20px;
    font-family: 'proxima-nova-condensed', sans-serif;
    color: #838ca0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
}
.events-module__name {
    color: #214ba7;
    display: block;
    padding: 0 20px;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 600;
}
.events-module__chapter {
    text-transform: uppercase;
    color: #838ca0;
    font-weight: 600;
    font-size: 12px;
    margin: 20px;
    display: block;
}
@media only screen and (min-width: 720px) {
  .events-module__chapter {
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin:0;
  }
}
</style>

<template>
  <div class="col span_1_of_4">
    <div class="event">
      <a href="#" class="img" style="background-image:url('https://res.cloudinary.com/njcd/image/upload/c_fill,f_auto,g_faces,h_300,w_500/v1475442081/events/nkxtndy9k4dzjb6o9oqf.jpg');">
        <div class="date">
          Feb
          <span>1</span>
        </div>
      </a>
      <span class="time">Wed, Feb 1st at 7:45 PM</span>
      <a href="#" class="name">Hapoel Yerushalayim Basketball Game</a>
      <span class="chapter">Israel</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsSingle'
}
</script>

<style scoped>
.span_1_of_4:nth-child(4n+1) {
  margin-left: 0;
  clear: left;
}
.event{
  background:white;
  box-shadow: 2px 2px 10px #e8eaec;
  position: relative;
  margin: 0 15px 20px;
  padding-bottom: 1px;
}
@media only screen and (min-width: 720px) {
  .event{
    height: 360px;
  }
}
.img {
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
.date {
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
.date span {
  display: block;
  font-weight: 700;
  font-size: 22px;
  line-height: 1;
}
.time {
    display: block;
    padding: 0 20px;
    font-family: 'proxima-nova-condensed', sans-serif;
    color: #838ca0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
}
.name {
    color: #214ba7;
    display: block;
    padding: 0 20px;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 600;
}
.chapter {
    text-transform: uppercase;
    color: #838ca0;
    font-weight: 600;
    font-size: 12px;
    margin: 20px;
    display: block;
}
@media only screen and (min-width: 720px) {
  .chapter {
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin:0;
  }
}
</style>

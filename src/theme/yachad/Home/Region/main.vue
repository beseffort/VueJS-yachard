<template>
  <div class="section">
    <div class="col span_3_of_4 maintext">
        <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus consectetur nunc, eu sollicitudin nisi consectetur vitae. Praesent ex ipsum, interdum a vulputate et, molestie nec diam. Mauris nec libero non neque fringilla varius. Phasellus at interdum tellus, eget convallis ipsum. Nam porta ornare bibendum. Sed accumsan accumsan nunc et lobortis. Cras quis euismod nulla, a tincidunt est. Donec imperdiet enim quis orci tristique congue. Cras ut venenatis risus.
        </p>
        <br/>
        <div class="info">
          <div class="map">
            <!-- IMPORTANT: Need to change the maps API key to the yachad one -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="100%" frameborder="0" style="border:0;"></iframe>
          </div>
          <div class="meta-container">
            <div class="meta">
              <i class="fa fa-map-marker"></i>
              <b>OU Israel Center</b> <br/>
							Keren HaYesod St 22	 <br/>
							Jerusalem, Israel, 91370
            </div>

            <div class="meta">
              <i class="fa fa-user"></i>
              Lisa Rich <br/>
							+972 54-490-5479<br/>
							<a href="mailto:#">ricjl@ou.org</a>
            </div>
          </div>
        </div>
    </div>
    <div class="col span_1_of_4 sidebartext">
      <h2>Make a Difference</h2>
      <p>If Yachad has made an impact on your life or your family's, please consider supporting us with a donation</p><br/>
      <a href="/donate" class="btn">Donate now</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChapterFpMain'
  }
</script>

<style scoped>
.maintext {
  max-width: 900px;
  margin-top: -40px;
  position: relative;
  background: white;
  font-size: 20px;
  padding:80px 5%;
}
.maintext:before {
  content:"";
  height: 55px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/a_180/v1495031643/2017site/white-grunge.png');
  background-repeat: repeat-x;
  position: absolute;
  top: -7px;
  left: 0;
  width: 100%;
}
.maintext  b {
  font-weight: 600;
  color: #214ba7;
}
.maintext  p {
  margin-bottom: 40px;
}

.sidebartext {
  font-size: 20px;
  padding: 80px 20px 40px;
}
.sidebartext h2 {
  text-transform: uppercase;
  font-size: 42px;
  line-height: 1.2;
}
.info {
  margin-bottom: 40px;
  box-shadow: 0px 5px 15px #d0d0d0;
  position: relative;
}
@media (min-width: 720px) {
  .info {
    margin-bottom: 100px;
  }
}
.map {
    width: 100%;
    height: 100%;
    background-color: #faf6f2;
}
@media (min-width: 720px) {
  .map {
    position: absolute;
  }
}
.meta-container {
    background: rgba(255,255,255,.9);
    padding: 40px;
    z-index: 2;
    position: relative;
}
@media (min-width: 720px) {
  .meta-container {
    width: 50%;
  }
}
.meta {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
}
.meta a {
  color: #214ba7;
}
.meta i {
  color: #ee6f1f;
  position: absolute;
  left: -5px;
  top: 3px;
  font-size: 18px;
}
</style>

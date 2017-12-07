<template>
  <div class="fp-programs">
    <div class="container">
      <div class="fp-program">
        <div class="section">
          <div class="col span_1_of_2">
            <a class="fp-program-name" href="#">Summer Programs</a>
            <p>Yachad has over 1,000 students that participate in summer programs every year.</p>
            <a href="#" class="fp-program-readmore">Read More ></a>
          </div>
          <div class="col span_1_of_2">
            <img src="https://res.cloudinary.com/njcd/image/upload/v1494945263/2017site/fp-summer.jpg" class="fp-program-img" alt="Summer programs"/>
          </div>
        </div>
      </div>
      <div class="fp-program">
        <div class="section">
          <div class="col span_1_of_2">
            <img src="https://res.cloudinary.com/njcd/image/upload/v1494945263/2017site/fp-vocational.jpg" class="fp-program-img fp-program-img--left" alt="Summer programs"/>
          </div>
          <div class="col span_1_of_2 fp-program--right">
            <a class="fp-program-name fp-program-name--right" href="#">Vocational Training</a>
            <p>800 individuals with disabilities have attended our Job Fairs and have met employers who support Disability Employment.</p>
            <a href="#" class="fp-program-readmore">Read More ></a>
          </div>

        </div>
      </div>
      <div class="fp-program">
        <div class="section">
          <div class="col span_1_of_2">
            <a class="fp-program-name" href="#">Inclusive Programs</a>
            <p>400 Shabbatons (weekend retreats) and weekly programs a year in communities across North America and Israel.</p>
            <a href="#" class="fp-program-readmore">Read More ></a>
          </div>
          <div class="col span_1_of_2">
            <img src="https://res.cloudinary.com/njcd/image/upload/v1494945275/2017site/fp-programs.jpg" class="fp-program-img" alt="Summer programs"/>
          </div>
        </div>
      </div>
    </div>
    <img src="https://res.cloudinary.com/njcd/image/upload/v1494945305/2017site/fp-fade-family.png" class="fp-faded-img fp-faded-img--top-right" alt="" />
    <img src="https://res.cloudinary.com/njcd/image/upload/v1494945319/2017site/fp-fade-banot.png" class="fp-faded-img fp-faded-img--top-left" alt="" />
    <img src="https://res.cloudinary.com/njcd/image/upload/v1494945315/2017site/fp-fade-group.png" class="fp-faded-img fp-faded-img--btm-right" alt="" />
  </div>
</template>

<script>
  export default {
    name: 'FrontpagePrograms'
  }
</script>

<style scoped>
.fp-programs {
  position: relative;
  padding-top: 50px;
  margin-bottom: 100px;
}
.fp-faded-img {
  position: absolute;
  z-index: 0;
  display: none;
}

  @media only screen and (min-width: 720px) {
    .fp-faded-img{display: block;}
  }
.fp-faded-img--top-right {
  top:-300px;
  right:0;
}
.fp-faded-img--top-left {
  top:200px;
  left:0;
}
.fp-faded-img--btm-right {
  bottom:200px;
  right:0;
}
.fp-program {
  margin-bottom: 40px;
  font-size: 20px;
  position: relative;
  z-index: 1;
}
@media only screen and (min-width: 720px) {
  .fp-program{padding: 0 50px;}
}

@media only screen and (min-width: 720px) {
  .fp-program--right {
    padding-left: 40px;
  }
}
.fp-program p {
  max-width: 500px;
}
.fp-program-name {
  color: #252e43;
  font-weight: 600;
  font-family: 'proxima-nova-condensed', sans-serif;
  font-size: 32px;
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 20px;
  text-transform: uppercase;
  display: block;
}
.fp-program-name:after {
  content: "";
  position: absolute;
  width: 110%;
  border-bottom: 4px solid #214ba7;
  left: 0;
  bottom: 0;
}
@media only screen and (min-width: 480px) {
  .fp-program-name--right:after {
    left:auto;
    right:0;
    width: 120%;
  }
}
.fp-program-img {
  box-shadow: 0 0 15px #aaaaaa;
}
.fp-program-img--left {
  display: none;
}
@media only screen and (min-width: 480px) {
  .fp-program-img--left{display: block;}
}
.fp-program-readmore {
  color: #ee6f1f;
  font-family: 'matt-b', sans-serif;
  font-size: 20px;
  display: block;
  margin-top: 20px;
}
</style>

<template>
  <div>
    <p>
    <b>Yachad, The National Jewish Council for Disabilities</b> is a thriving global organization dedicated to addressing the needs of all Jewish individuals with disabilities and ensuring their inclusion in every aspect of Jewish life. Our inclusive design aims to ensure persons with diverse abilities their rightful place within the Jewish community, while helping to educate and advocate for a greater understanding, acceptance, outreach, and a pro-disability attitude.
    </p>
    <a href="/services" class="btn btn--blue">Learn About Our Services</a>
  </div>
</template>

<script>
  export default {
    name: 'FrontpageMainText'
  }
</script>

<style scoped>
div {
  max-width: 900px;
  margin-top: -100px;
  position: relative;
  background: white;
  font-size: 20px;
  padding:80px 5%;
}
  div:before {
    content:"";
    height: 55px;
    background-image: url('https://res.cloudinary.com/njcd/image/upload/a_180/v1495031643/2017site/white-grunge.png');
    background-repeat: repeat-x;
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
  }
p {
  margin-bottom: 40px;
}
b {
  font-weight: 600;
  color: #214ba7;
}
</style>

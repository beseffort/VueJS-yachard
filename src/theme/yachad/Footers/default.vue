<template>
  <footer class="site-footer">
    <div class="container">
      <div class="section">
        <div class="col span_1_of_2 footer-logos">
          <a href="/"><img src="https://res.cloudinary.com/njcd/image/upload/v1494945270/2017site/logo--footer.png" alt="Yachad" class="footer-logo"></a>
          <a href="https://ou.org"><img src="https://res.cloudinary.com/njcd/image/upload/v1494945264/2017site/ou-logo.png" alt="OU.org" class="footer-logo footer-logo--ou"></a>
        </div>
        <div class="col span_1_of_2 footer-social">
          <a href="https://twitter.com/YachadNJCD"><i class="fa fa-twitter"></i></a>
          <a href="https://www.facebook.com/YACHADNJCD"><i class="fa fa-facebook-square"></i></a>
          <a href="https://www.youtube.com/user/NJCDyachad/videos"><i class="fa fa-youtube"></i></a>
          <a href="http://instagram.com/yachadnjcd"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
      <br/>
      <hr/>
      <div class="section">
        <div class="col span_1_of_2 footer-contact">
          <p><i class="fa fa-envelope"></i> 11 Broadway, 13th Floor, New York, NY 10004</p>
          <p><i class="fa fa-phone"></i> 212-613-8229 <i class="fa fa-fax" style="margin-left:40px;"></i> 212-613-0796</p>
        </div>
        <div class="col span_1_of_2 footer-copyrights">
          <p>© 2017 Orthodox Union, All Rights Reserved</p>
          <p><i class="fa fa-wheelchair"></i> Service animals are welcome in our national office</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    name: 'yachadFooter'
  }
</script>

<style scoped>
.site-footer {
		position: relative;
		color: #6b7281;
		text-transform: uppercase;
		padding:55px 0 35px;
		background: white;
}
.footer-logo {
		display: block;
		height: 40px;
		margin-right: 40px;
		float: left;
}
@media only screen and (min-width: 720px) {
  .footer-logo {
    height:55px;
  }
}
.footer-logo--ou {
	height:30px;
}
@media only screen and (min-width: 720px) {
  .footer-logo--ou {
    height: 45px;
  }
}
.footer-social a {
  color: #ee6f1f;
  font-size: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
	@media only screen and (min-width: 720px) {
  .footer-social {
	   text-align: right;
  }

	.footer-social a {
    margin-right: 0;
    margin-left: 20px;
    margin-top: 0;
	}
}

.footer-copyrights,
.footer-contact {
	font-family: 'proxima-nova-condensed', sans-serif;
	font-size: 14px;
}
@media only screen and (min-width: 720px) {
  .footer-copyrights {
    margin-top: 1%;
    text-align:right;
  }
}
</style>

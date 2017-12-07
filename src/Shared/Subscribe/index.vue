<template>
  <div class="subscribe-module">
    <div class="container">
  		<div class="section">
  			<div class="col span_2_of_3">
  				<span class="label">Like this Article</span>
  				<span class="title">Sign up for our NJCD E-Newsletter</span>
  			</div>
  			<div class="col span_1_of_3">
  				<form class="form" method="post" id="signup_njcd" action="">
  					<input type="email" placeholder="Your Email" name="Email" id="njcd-email" required />
  					<input type="submit" value="Subscribe" onClick=""/>
  				</form>
          <div class="subscribe-message" style="display:none"></div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'Subscribe'
  }
</script>

<style scoped>
.subscribe-module {
  padding: 30px 0 20px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1495416904/2017site/subscribe.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
}
.label {
  display: block;
  text-transform: uppercase;
  color: #7fa4f5;
  font-weight: 600;
  letter-spacing: 1px;
}
.title {
  color: white;
  font-family: 'matt-b', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
}
@media only screen and (min-width: 720px) {
  .title {
    font-size: 36px;
  }
}
.form {
  position: relative;
  margin-top: 20px;
}
.form input[type="email"] {
    background: #252e43;
    color: #7fa4f5;
    font-size: 14px;
    border:none;
    padding-right: 140px;
  }

.form input[type="submit"] {
    position: absolute;
    border:none;
    font-size: 12px;
    top: 0;
    right: 0;
    padding:13px 24px;
    cursor: pointer;
  }
.subscribe-message {
    color: #7fa4f5;
    font-style: italic;
    font-size: 14px;
    display: block;
    margin-top: 5px;
}
</style>

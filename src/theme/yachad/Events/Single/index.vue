<template>
  <div>
    <header class="article-header">
			<h1 class="text-center">
				<a href="/events" class="back-to-events"><i class="fa fa-angle-left"></i> Calendar of Events</a>
        Name of the Event
      </h1>
		</header>
    <main class="container">
			<div class="article-content">
				<div class="info">
					<div class="map">
						<!-- IMPORTANT: Need to change the maps API key to the yachad one -->
						<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="100%" frameborder="0" style="border:0;"></iframe>
					</div>
					<div class="meta-container">
						<div class="meta">
							<i class="fa fa-calendar"></i>
							Monday, February 13th 6:00 PM to 7:00 PM
						</div>
						<div class="meta">
							<i class="fa fa-map-marker"></i>
							OU Israel Center <br/>
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
					<a href="#" class="event-register-btn btn">Register</a>
				</div>
				<div class="event-content">
					Event Content
				</div>
			</div>
		</main>
  </div>
</template>

<script>
export default {
  name: 'SingleEvents'
}
</script>

<style scoped>
.back-to-events {
  display: block;
  font-size: 16px;
  color: #838ca0;
  font-weight: normal;
  margin-bottom: 20px;
}
.info {
  margin-bottom: 100px;
  box-shadow: 0px 5px 15px #d0d0d0;
  position: relative;
}
.map {
    width: 100%;
    height: 100%;
    background-color: #faf6f2;
}
@media only screen and (min-width: 720px) {
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
@media only screen and (min-width: 720px) {
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
.event-register-btn {
    position: absolute;
    width: 250px;
    left: 50%;
    margin-left: -125px;
    bottom: -25px;
    font-size: 14px;
    box-shadow: 0px 5px 15px #d0d0d0;
    z-index: 2;
}
@media only screen and (min-width: 720px) {
  .event-content {
    padding:0 80px;
  }
}
</style>

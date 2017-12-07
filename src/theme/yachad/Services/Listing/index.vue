
<template>
  <div>
    <header class="article-header">
      <h1 class="text-center">yachad Services</h1>
    </header>

    <main class="container">
      <div class="article-content">
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor lacinia ipsum, quis dictum massa pulvinar ac. Integer risus augue, facilisis id egestas eu, finibus in leo. Fusce turpis risus, efficitur in lacus at, interdum ullamcorper sem
        </p>
      </div>

      <div class="section services" id="services">
        <div class="col span_1_of_3">
          <div class="service">
            <a href="this.ServiceRoute" class="img" style="background-image:url('this.ServiceImg')"></a>
            <div>
              <a href="this.ServiceRoute" class="name">this.ServiceName</a>
              <p class="excerpt">
                 ServiceExcerpt
                <a href="this.ServiceRoute" class="more"><i class="fa fa-angle-right"></i></a>
              </p>
            </div>
          </div>
        </div>

      </div>
      </main>
  </div>

</template>

<style scoped>
.services {
	margin-bottom: 120px;
	margin-top: -20px;
}

.span_1_of_3 {
  width: 100%;
}

@media only screen and (min-width: 920px) {
  .span_1_of_3 {
    width: 32.26%;
  }
  .span_1_of_3:nth-child(3n+1) {
    margin-left: 0;
    clear:both;
  }
}
.service {
	margin:0 20px 20px;
	box-shadow: 0px 10px 15px #f1f1f1
}
.name {
  font-size: 20px;
  color: #214ba7;
  display: inline-block;
  margin-top: -20px;
  padding: 15px 20px 0;
  background: white;
  font-weight: 600;
}
.img {
  display: block;
  height: 180px;
  background: #252e43;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.excerpt {
	padding: 10px 60px 30px 20px;
  font-size: 14px;
  line-height: 1.6;
	position: relative;
}
.more {
	position: absolute;
	font-size: 22px;
	color: #333;
	right: 20px;
	top: 20px;
}
</style>

<template>
  <div>
    <header class="article-header">
			<h1 class="text-center">Calendar of Events</h1>
		</header>
    <EventsQuery></EventsQuery>
    <div class="events-module">
		  <div class="container">
        <div class="section events-list">
          <EventSingle></EventSingle>
        </div>
        <br/>
				<div class="month-selector text-center">
	        <a href="#" class="month-selector--prev"><i class="fa fa-caret-left"></i></a>
	        <span class="month-selector--current">June 2017</span>
	        <a href="#" class="month-selector--next"><i class="fa fa-caret-right"></i></a>
	      </div>
				<br/>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import EventsQuery from './query'
import EventSingle from './event'

export default {
  name: 'Events',
  components: {
    EventsQuery,
    EventSingle
  }
}
</script>

<style scoped>
.month-selector {
  margin-top: 5px;
}
.month-selector--current {
  color: #214ba7;
  font-weight: 600;
  font-size: 24px;
  display: inline-block;
  padding: 0 20px;
}
.month-selector--prev,
.month-selector--next {
  display: inline-block;
  color: #838ca0;
}
.month-selector--prev:hover,
.month-selector--next:hover {
  color: #6b7281;
}
.events-module {
  padding:100px 0 80px;
  background-image: url('https://res.cloudinary.com/njcd/image/upload/v1494945264/2017site/pattern-bg.jpg');
  background-repeat: repeat;
}
</style>

<template>
  <div class="events-query">
    <div class="container">
      <div class="section">
        <div class="col span_1_of_3">
          <div class="month-selector">
            <a href="#" class="month-selector--prev"><i class="fa fa-caret-left"></i></a>
            <span class="month-selector--current">June 2017</span>
            <a href="#" class="month-selector--next"><i class="fa fa-caret-right"></i></a>
          </div>
        </div>
        <div class="col span_2_of_3 filters">
          <div class="section">
            <div class="col span_1_of_3">
              <div class="filter">
                <span class="filter__label">View </span>
                <select class="filter__select">
                  <option value="">All Events</option>
                  <option>Inclusive Events</option>
                </select>
              </div>
            </div>
            <div class="col span_1_of_3">
              <div class="filter">
                <span class="filter__label">Located in </span>
                <select class="filter__select">
                  <option value="">All Regions</option>
                  <option>National</option>
                </select>
              </div>
            </div>
            <div class="col span_1_of_3">
              <div class="search"><input type="text" /><i class="fa fa-search"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsQuery'
}
</script>

<style scoped>
.events-query {
  margin-bottom: 10px;
  margin-top: 60px;
}
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
@media only screen and (min-width: 940px) {
  .filters {
    padding-left: 16.93%;
  }
}
.filter__label {
    font-size: 14px;
    font-weight: 600;
    color: #838ca0;
    display: inline-block;
    max-width: 50%;
}
.filter__select {
  display: inline-block;
  border:none;
  padding: 0;
  color: #ee6f1f;
  font-weight: 700;
  max-width: 50%;
  height: 34px
}
.search {
  position: relative;
}
.search input {
  border-radius: 20px;
  height: 34px;
  padding-left: 20px;
}
.search i {
  position: absolute;
  color: #214ba7;
  top: 12px;
  left: 10px;
}
</style>

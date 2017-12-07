<template>
  <div class="container blog">
    <span class="title">Recent Blog Articles</span>
    <div class="section">
      <div class="col span_1_of_3">
        <div class="article">
          <span class="article-date">February 13th, 2017</span>
          <a href="/" class="article-name">Runners do something</a>
          <p class="article-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus consectetur nunc, eu sollicitudin nisi</p>
          <a href="/" class="article-more">Read More</a>
        </div>
      </div>
    </div>
    <a href="/blog" class="all-btn">All Blog Posts ></a>
  </div>

</template>

<script>
  export default {
    name: 'ChapterFpBlog'
  }
</script>

<style scoped>
.blog {
  padding:100px 0 80px;
}
.title {
  font-weight: 600;
  color: #252e43;
  text-transform: uppercase;
  font-size: 32px;
  font-family: 'proxima-nova-condensed', sans-serif;
  margin-bottom: 60px;
  display: block;
  text-align: center;
}
.article {
    padding-top: 40px;
    border-top: 3px solid #eaeef6;
    margin:0 20px 20px;
}
.article-date {
    display: block;
    font-family: 'proxima-nova-condensed', sans-serif;
    color: #838ca0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
}
.article-name {
    color: #214ba7;
    display: block;
    line-height: 1.4;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
}
.article-more {
    display: block;
    font-weight: 600;
    margin-top: 10px;
}
.all-btn {
    color: #ee6f1f;
    font-family: 'matt-b', sans-serif;
    display: block;
    margin: 40px auto 0;
    width: 250px;
    text-align: center;
    font-size: 20px;
}
</style>

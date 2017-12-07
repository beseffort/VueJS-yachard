<template>
  <article>
    <header class="article-header">
      <h1 class="text-center">YACHAD Blog</h1>
    </header>
    <main class="container">
      <div class="article-content">

        <div class="listing-single">
          <h2><a href="#">Post Title</a></h2>
          <p>Post Excerpt, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor neque, venenatis et enim in, vulputate auctor velit. Sed feugiat sem id velit sollicitudin...</p>
          <a href="#" class="readmore">Read More ></a>
        </div>
        <div class="listing-single">
          <h2><a href="#">Post Title</a></h2>
          <p>Post Excerpt, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor neque, venenatis et enim in, vulputate auctor velit. Sed feugiat sem id velit sollicitudin...</p>
          <a href="#" class="readmore">Read More ></a>
        </div>
        <div class="listing-single">
          <h2><a href="#">Post Title</a></h2>
          <p>Post Excerpt, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor neque, venenatis et enim in, vulputate auctor velit. Sed feugiat sem id velit sollicitudin...</p>
          <a href="#" class="readmore">Read More ></a>
        </div>
        <div class="listing-single">
          <h2><a href="#">Post Title</a></h2>
          <p>Post Excerpt, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor neque, venenatis et enim in, vulputate auctor velit. Sed feugiat sem id velit sollicitudin...</p>
          <a href="#" class="readmore">Read More ></a>
        </div>

        <nav>
          <a href="#" class="post-previous"><i class="fa fa-angle-left"></i> Previous Posts</a>
          <a href="#" class="post-next">Newer Posts <i class="fa fa-angle-left"></i></a>
        </nav>

      </div>
    </main>
    <Events></Events>
  </article>
</template>

<script>
import Events from '../../../../Shared/Events/index'

export default {
  name: 'ListingPost',
  components: {
    Events
  }
}
</script>

<style scoped>
.listing-single {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
}
.readmore {
  color: #ee6f1f;
  font-family: 'matt-b', sans-serif;
  font-size: 20px;
  display: block;
  margin-top: 20px;
}
nav {
  font-family: 'matt-b', sans-serif;
  font-size: 20px;
  margin:60px auto 0px;
  overflow: hidden;
}
.post-previous,
.post-next {
  display: inline-block;
}
.post-next {
  float: right;
}
</style>

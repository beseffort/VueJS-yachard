<template>
  <article>
    <header class="article-header">
			<h1 class="text-center">
        Single Post Title
        <span class="article-date">22 July, 2017</span>
      </h1>
		</header>
    <main class="container">
			<div class="article-content">
				<p class="article-excerpt">
					Post Excerpt, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor neque, venenatis et enim in, vulputate auctor velit. Sed feugiat sem id velit sollicitudin, vel varius quam tempor. Aliquam ac molestie justo. Sed non tortor nunc. Donec non efficitur purus, vel porttitor massa.
				</p>

        <img src="https://res.cloudinary.com/njcd/image/fetch/c_crop,h_300,w_637/https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/c221.0.637.637/19954865_125416511396132_5362696200145338368_n.jpg" alt="post title" class="article-img"/>
				<div class="single-content">
					<p>Vivamus vel risus posuere, sodales odio eu, feugiat diam. Proin porta, urna quis semper cursus, nunc leo commodo risus, a euismod ante orci ac leo. Proin ac imperdiet ligula. Aliquam convallis luctus hendrerit. Suspendisse ac massa a elit hendrerit pulvinar in et justo. Mauris venenatis risus ac orci lacinia, sit amet bibendum leo bibendum. Nam a commodo nisi. Vivamus ultricies eget purus tincidunt ultrices.</p>

          <p>Nullam ullamcorper elit urna, id mattis lorem tincidunt vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Curabitur et efficitur lorem. Mauris et elementum nisi. In hendrerit diam quis blandit vehicula. Integer nec metus posuere diam commodo sollicitudin ut eu eros. Curabitur in consectetur risus.</p>

					<SocialSharing></SocialSharing>
				</div>
			</div>
		</main>
    <Subscribe></Subscribe>
    <Events></Events>
  </article>
</template>

<script>
import SocialSharing from 'src/Shared/Social/index'
import Subscribe from 'src/Shared/Subscribe/index'
import Events from 'src/Shared/Events/index'

export default {
  name: 'SinglePost',
  components: {
    SocialSharing,
    Subscribe,
    Events
  }
}
</script>

<style scoped>
.article-date {
    display: block;
    font-size: 16px;
    margin-top: 20px;
    font-weight: normal;
    color: #838ca0;
}
.article-excerpt {
  color: #214ba7;
  font-size: 18px;
  text-align: center;
}
.article-content{
    width: 85%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 100px;
    margin-top: 50px;
    padding-right:0px;
}
.article-content p,
.article-content ul {
  margin-bottom: 20px;
}
.article-img {
  display: block;
  margin:40px auto 40px;
}
.single-content {
    max-width: 700px;
    margin: auto;
}
</style>

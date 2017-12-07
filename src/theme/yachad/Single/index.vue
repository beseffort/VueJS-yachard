<template>
  <article>
    <div v-if="!single || (single && !single.content)">
      Loading...
    </div>
    <div v-else>
      <header class="article-header">
        <h1 class="text-center" v-html="single.title.rendered"></h1>
      </header>
      <main class="container">
        <div class="article-content">
          <p class="article-excerpt" v-clean-html="single.excerpt.rendered">
          </p>

          <img v-if="image" :src="image.source" :alt="image.alt_text" class="article-img" />
          <PageContent class="single-content" :content="single.content.rendered" />
        </div>
      </main>
      <Events></Events>
    </div>
  </article>
</template>
<script>
import Events from 'src/Shared/Events/index'
import pageType from 'src/mixins/pageType'
import { mapGetters, mapActions } from 'vuex'
import PageContent from './Content'

const fetchInitialData = (store) => {
  store.state.page.single = {}
  return store.dispatch(`page/getPage`, {
    slug: store.state.route.params.slug,
    site: store.state.currentSite
  })
}
export default {
  name: 'SinglePage',
  mixins: [pageType('page-single')],
  computed: {
    ...mapGetters([
      'routeParamSlug'
    ]),
    ...mapGetters('page', [
      'single'
    ]),
    image () {
      return this.single && this.single.better_featured_image
    }
  },
  methods: {
    ...mapActions('page', {
      getPage: 'getPage'
    })
  },
  watch: {
    routeParamSlug: function (slug) {
      if (slug) {
        this.$store.dispatch(`page/getPage`, {
          slug: slug,
          site: this.$store.state.currentSite
        })
      }
    }
  },
  prefetch: fetchInitialData,
  created () {
    if (!this.single || !this.single.slug || this.single.slug !== this.routeParamSlug) {
      fetchInitialData(this.$store)
    }
  },
  components: {
    Events, PageContent
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

.article-content {
  width: 85%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
  margin-top: 50px;
  padding-right: 0px;
}

.article-content p,
.article-content ul {
  margin-bottom: 20px;
}

.article-img {
  display: block;
  margin: 40px auto 40px;
}

.single-content {
  max-width: 700px;
  margin: auto;
}
</style>

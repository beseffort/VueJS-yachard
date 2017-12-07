<script>
export default {
  name: 'Content',
  props: ['content'],
  mounted () {
    const [iframe] = this.$el.getElementsByTagName('iframe')

    const origins = ['https://local.yachad.oustatic', 'https://staging2.yachad.org', 'https://yachad.org']

    if (iframe) {
      if (!window.addEventListener) {
        window.addEventListener = function (event, fn) {
          window.attachEvent('on' + event, fn)
        }
      }
      window.addEventListener('message', (e) => {
        if (!origins.includes(e.origin)) return

        var data = typeof e.data === 'object' ? e.data : JSON.parse(e.data)

        if (data.action === 'resize') {
          iframe.height = JSON.parse(e.data).value
        }

        if (data.action === 'ready') {
          iframe.contentWindow.postMessage([], '*')
        }

        if (data.action === 'redirect') {
          window.location.href = data.value
        }

        if (data.action === 'showForm') {
          iframe.parentNode.scrollIntoView()
        }
      }, false)
    }
  },
  render (h) {
    return h('div', {
      domProps: {
        innerHTML: this.content
      }
    })
  }
}
</script>
<style scoped>
.gform_body {
  background: blue
}
</style>

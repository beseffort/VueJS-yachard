import wordpressService from '../../../app.service'

const getPage = ({ commit, state }, { slug, site }) => {
  return wordpressService.getPage(null, slug, site).then((page) => {
    commit('PAGE_UPDATED', page)
  }).catch(error => {
    console.log('ERROR:', error)
  })
}

export {
  getPage
}

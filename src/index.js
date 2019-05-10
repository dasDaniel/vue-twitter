import Twitter from './twttr.vue'

export default {
  install: function (Vue) {
    Vue.component('twitter', Twitter)
  }
}

export {
  Twitter
}

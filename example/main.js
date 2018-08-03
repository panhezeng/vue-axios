import Vue from 'vue'
import App from './components/App.vue'
//import '../dist/vue-axios.min'
require('../dist/vue-axios.min')
// import VueAxios from '../src'
// Vue.use(VueAxios)

new Vue({
  el: '#app',
  render: h => h(App)
})

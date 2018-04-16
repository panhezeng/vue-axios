import Vue from 'vue'
import VueAxios from '../src'
import App from './components/App.vue'

Vue.use(VueAxios)

new Vue({
  el: '#app',
  render: h => h(App),
})

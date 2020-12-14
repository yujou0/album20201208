import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import Photoswipe from 'vue-pswipe'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.withCredentials = true

Vue.config.productionTip = false

Vue.component('ImgInputer', ImgInputer)

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(Photoswipe)
Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GA
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

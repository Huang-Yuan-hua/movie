import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './routers'
import store from './stores'
import 'amfe-flexible'
import Cube from 'cube-ui'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

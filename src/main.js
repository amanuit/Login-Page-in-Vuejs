import Vue from 'vue'
import App from './App.vue'
import router from './Routes/index.js'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(VeeValidate);

Vue.config.silent = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

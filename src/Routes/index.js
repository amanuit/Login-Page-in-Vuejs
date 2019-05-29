import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Registration from '../components/Registration.vue'
import Login from '../components/Login.vue'
import Data from '../components/Data.vue'

export default new Router({
    routes:[
        { path: '/', component: Login },
        { path: '/login', component: Login },
        { path: '/registration', component: Registration },
        { path: '/data', component: Data, name:"Data" },

    ]
  })

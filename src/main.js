// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import ElementUIStyles from 'element-ui/lib/theme-chalk/index.css'
import styles from '@/src/assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

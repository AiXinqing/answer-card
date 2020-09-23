import Vue from 'vue'
import { Dialog, Select, Button, Checkbox, Row, Col } from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Dialog)
Vue.use(Select)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Row)
Vue.use(Col)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

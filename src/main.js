import Vue from 'vue'
import {
  Dialog,
  Select,
  Button,
  Checkbox,
  CheckboxGroup,
  Row,
  Col,
  Input,
  MessageBox
} from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Dialog)
Vue.use(Select)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.prototype.$confirm = MessageBox.confirm

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import {
  Dialog,
  Select,
  Option,
  Button,
  Checkbox,
  CheckboxGroup,
  Row,
  Col,
  Input,
  MessageBox,
  Message,
  Tabs,
  TabPane
} from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

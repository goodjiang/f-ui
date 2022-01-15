import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './assets/styles/fonts/iconfont.css';

import FButton from './components/button.vue'
import FDialog from './components/dialog.vue'
import FInput from './components/input.vue'
Vue.component(FButton.name,FButton)
Vue.component(FDialog.name,FDialog)
Vue.component(FInput.name,FInput)

Vue.config.productionTip = false
new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')

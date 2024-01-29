import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.scss"
import components from '@/components/UI'

Vue.config.productionTip = false;

components.forEach(component => {
  Vue.component(component.name, component);
})

const app = new Vue({
  router,
  render: function (h) { return h(App) }
})


app.$mount('#app')

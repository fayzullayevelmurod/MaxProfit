import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/styles/main.scss"
import components from '@/components/UI'
import VueI18n from 'vue-i18n'
import messages from '@/lang/index.js'

Vue.config.productionTip = false;
Vue.use(VueI18n);

components.forEach(component => {
  Vue.component(component.name, component);
})
const i18n = new VueI18n({
  legacy: false,
  locale: 'ru',
  messages,
})


const app = new Vue({
  i18n,
  router,
  render: function (h) { return h(App) }
})


app.$mount('#app')

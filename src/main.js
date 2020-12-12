import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  data: {
    newItem: ''
    // picker: new Date().toISOString().substr(0, 10)
  },
  methods: {
    addItem: function (event) {
      alert()
    }
  },
  render: h => h(App)
}).$mount('#app')

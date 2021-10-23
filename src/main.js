import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/code'
Vue.config.productionTip = false
import './assets/main.css'

if (process.env.NODE_ENV === 'production')
    window.oncontextmenu = function() {
        return false
    }

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import Vuetify from 'vuetify'
import '../assets/vuetify.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                secondary: '#EAEDDD',
            },
        },
    },
}

export default new Vuetify(opts)
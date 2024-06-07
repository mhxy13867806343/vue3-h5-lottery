import Vue from 'vue'
import App from 'GraceUI5-157599/App.vue'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

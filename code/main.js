import Vue from 'vue'
import router from './Routing/router.js'
import MainApp from './AppShell/mainApp.vue'
 

const app = new Vue({
    el: '#app',
    router,
    render: h => h(MainApp)
})
 
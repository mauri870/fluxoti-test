import Vue from "vue"
import VueResource from 'vue-resource'
import App from "./App.vue"
import store from './vuex'

Vue.use(VueResource)

let vue = new Vue({ store, render: h => h(App) })
vue.$mount('app')
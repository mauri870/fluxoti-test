import Vue from "vue"
import App from "./App.vue"
import store from './vuex'

let vue = new Vue({ store, render: h => h(App) })
vue.$mount('app')
import Vue from "vue"
import App from "./App.vue"

let vue = new Vue({ render: h => h(App) })
vue.$mount('app')
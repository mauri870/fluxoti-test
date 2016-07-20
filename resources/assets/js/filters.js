import Vue from 'vue'

Vue.filter('lowercase', (value) => {
    return value.toLowerCase()
})

Vue.filter('isAlphanumeric', (value) => {
    return !(/[^a-z\d]/i.test(value))
})

<template lang="jade">
    div
        form.form-inline(role="form")
            div.form-group
                input#username.form-control(v-model="username" type="text" placeholder="username")
            button.btn.btn-info(@click.prevent="usernameIsValid && searchUser(username)") Go!
        .col-sm-6.col-sm-offset-3.alert.alert-danger(v-if="!usernameIsValid")
            h3 Sorry, but the username can contain only letters and numbers
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'SearchForm',
        data () {
            return {
                username: ''
            }
        },
        computed: {
          usernameIsValid () {
            return this.$options.filters.isAlphanumeric(this.username)
          }
        },
        methods: {
            ...mapActions({
                searchUser: 'searchUser'
            })
        }
    }
</script>
<style lang="scss" scoped>
    form {
        margin-top: 10px;
    }
</style>

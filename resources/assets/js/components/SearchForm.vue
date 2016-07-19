<template lang="jade">
    div
        form.form-inline(role="form")
            div.form-group
                input#username.form-control(v-model="username" type="text" placeholder="username")
            button.btn.btn-info(@click.prevent="searchUser(username)") Go!
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

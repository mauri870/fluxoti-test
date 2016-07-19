<template lang="jade">
    div
        h1 Well, I find this...
        div.alert.alert-danger(v-if="search_error_exists")
            h3 Shit, {{ search_error_msg | lowercase }}
        div(v-else)
            profile(:user="user")
        .col-sm-12
            button.btn.btn-info(@click.prevent="resetErrorAndUser")
                i.fa.fa-arrow-left
                |  Try again!
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import Profile from './Profile.vue'

    export default {
        name: 'ResultSearch',
        computed: {
            ...mapGetters({
                user: 'user',
                search_error_msg: 'search_error_msg',
                search_error_exists: 'search_error_exists',
            })
        },
        methods: {
            ...mapActions({
                resetErrorAndUser: 'resetErrorAndUser'
            })
        },
        components: {
            Profile
        }
    }
</script>
<style></style>

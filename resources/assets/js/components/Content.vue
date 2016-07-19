<template lang="jade">
    div.container
        div.text-center(v-if="!user_exists")
            h1 Hi!
            h3.lead Need information about a github profile? Give me the username and I will find some things
                br
            | Just little things, don't expect much '-'

            search-form
        div.text-center(v-else="")
            result-search
</template>
<script>
    import { mapGetters } from 'vuex'
    import ResultSearch from './ResultSearch.vue'
    import SearchForm from './SearchForm.vue'

    export default {
        name: 'Content',
        mounted () {

        },
        computed: {
            ...mapGetters({
                user: 'user',
                user_exists: 'user_exists'
            })
        },
        components: {
            ResultSearch,
            SearchForm
        }
    }
</script>
<style>
</style>

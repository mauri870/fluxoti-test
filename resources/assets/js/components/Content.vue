<template lang="jade">
    div.container
        div.text-center(v-if="user_exists || search_error_exists")
            result-search
        div.text-center(v-else="")
            h1 Hi!
            h3.lead Need information about a github profile? Give me the username and I will find some things
                br
            | Just little things, don't expect much '-'
            search-form

</template>
<script>
    import ResultSearch from './ResultSearch.vue'
    import SearchForm from './SearchForm.vue'

    import { mapGetters } from 'vuex'

    export default {
        name: 'Content',
        mounted () {

        },
        computed: {
            ...mapGetters({
                user: 'user',
                user_exists: 'user_exists',
                search_error_exists: 'search_error_exists',
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

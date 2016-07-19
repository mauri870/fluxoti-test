<template lang="jade">
    div
        h1 Result

        button.btn.btn-info(@click.prevent="resetErrorAndUser") Try again!
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'ResultSearch',
        methods: {
            ...mapActions({
                resetErrorAndUser: 'resetErrorAndUser'
            })
        }
    }
</script>
<style></style>

<template lang="jade">
    div
        vc-navbar

        vc-content
</template>
<script>
    import VcNavbar from './components/Navbar.vue'
    import VcContent from './components/Content.vue'

    export default{
        components: {
            VcNavbar,
            VcContent
        }
    }
</script>
<style>
</style>

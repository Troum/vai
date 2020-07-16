<template>
    <v-toolbar
            dark
            max-height="64"
    >
        <v-container>
            <div class="d-flex justify-center align-center">
                <small class="mb-0">{{ new Date().getFullYear() }} &copy; Все права защищены</small>
            </div>
        </v-container>
    </v-toolbar>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

</style>

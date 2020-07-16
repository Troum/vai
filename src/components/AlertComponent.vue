<template>
    <v-snackbar
            v-model="$store.getters.alert.status"
            :color="$store.getters.alert.type"
            multi-line
            center
            top
            :timeout="5000"
    >
        {{ $store.getters.alert.message }}
        <v-btn  dark
                icon
                @click="closeAlert"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "AlertComponent",
        methods: {
            closeAlert() {
                this.$store.commit('alert', {status: false, message: '', type: 'success'})
            }
        }
    }
</script>

<style scoped>

</style>

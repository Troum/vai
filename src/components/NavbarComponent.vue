<template>
    <v-app-bar
            app
            dark
    >
        <v-container>
            <div class="d-flex justify-center align-center">
                <transition enter-active-class="animate__animated animate__fadeIn"
                            leave-active-class="animate__animated animate__fadeOut" mode="out-in">
                    <v-btn @click="back" v-show="$route.name !== 'home'" icon>
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </transition>
                <v-spacer></v-spacer>
                <p style="position: fixed" class="mb-0 navbar-brand">Anastasia Malashkevich</p>
                <v-spacer></v-spacer>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
    export default {
        name: "NavbarComponent",
        methods: {
            back() {
                window.history.back();
            }
        }
    }
</script>

<style scoped>

</style>

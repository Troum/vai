<template>
    <v-dialog class="elevation-0" style="position: relative" v-if="show" max-width="80%" v-model="show">
        <v-btn @click="show = false; src = ''" style="position: absolute; right: 2%; top: 2%" color="#fff" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card flat color="transparent"
                width="100%">
            <v-img max-height="700"
                   contain :src="require(`@/assets/images/image_${src}.jpg`)">
            </v-img>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "PhotoModalComponent",
        data() {
          return {
              show: false,
              src: null
          }
        },
        mounted() {
            this.$root.$on('show-photo', (src) => {
                this.src = src;
                this.show = true;
            })
        }
    }
</script>

<style scoped>

</style>

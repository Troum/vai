<template>
    <v-row class="fill-height">
        <v-col cols="12" class="fill-height ma-0 photo-container">
            <v-card class="elevation-5" ripple
                    v-for="item in 20" :key="item">
                <v-img height="100%"
                       @click="showPhoto(item)"
                       :src="require(`@/assets/images/image_${item}.jpg`)" >

                </v-img>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Photo",
        methods: {
            showPhoto(item) {
                this.$root.$emit('show-photo', item);
            }
        }
    }
</script>

<style scoped>

</style>

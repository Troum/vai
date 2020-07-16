<template>
    <v-row class="fill-height ma-0">
        <v-col cols="12" class="fill-height ma-0 pa-0 video-container">
            <ul>
                <li v-for="item in 9" :key="item">
                    <img :src="require(`@/assets/preloads/${item}.png`)" :alt="`Video ${item}`">
                    <v-btn @click="playVideo(item)" class="play-button" icon color="#fff">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                </li>
            </ul>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Video",
        methods: {
            playVideo(item) {
                this.$root.$emit('show-video', item);
            }
        }
    }
</script>

<style scoped>

</style>

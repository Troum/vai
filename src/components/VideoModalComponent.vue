<template>
    <v-dialog class="elevation-0" style="position: relative" v-if="show" max-width="90%" v-model="show">
        <v-btn @click="show = false; src = ''" style="position: absolute; right: 2%; top: 2%" color="#fff" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card flat color="transparent"
                class="d-flex justify-center align-center" style="position:relative;"
                width="100%">
            <video ref="videoPlayer" width="100%"
                   height="700"
                   autoplay
                   :src="require(`@/assets/videos/video_${src}.mp4`)" >

            </video>
            <v-btn @click="interact" icon color="#fff" style="position:absolute;">
                <v-icon v-if="playing">mdi-pause</v-icon>
                <v-icon v-else>mdi-play</v-icon>
            </v-btn>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "VideoModalComponent",
        data() {
          return {
              show: false,
              src: null,
              playing: false
          }
        },
        mounted() {
            this.$root.$on('show-video', (src) => {
                this.src = src;
                this.show = true;
                this.playing = true;
            })
        },
        methods: {
            interact() {
                if (this.playing) {
                    this.$refs.videoPlayer.pause();
                    this.playing = false;
                } else {
                    this.$refs.videoPlayer.play();
                    this.playing = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>

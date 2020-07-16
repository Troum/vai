<template>
  <v-row class="fill-height ma-0 pa-0">
    <v-col cols="12" lg="12" class="fill-height ma-0 pa-0">
      <div class="homepage fill-height">
        <div class="column-one">
          <div class="about">
            <v-card @click="$router.push({name: 'about'}).catch(() => {})" class="elevation-5 mr-0" ripple width="100%">
              <v-img
                      class="white--text align-end mx-auto"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      src="@/assets/images/image_20.jpg">
                <v-card-title class="text card-title">Обо мне</v-card-title>
              </v-img>
            </v-card>
          </div>
          <div class="photo">
            <v-card @click="$router.push({name: 'photos'}).catch(() => {})" class="elevation-5 mr-0" ripple height="100%">
              <v-img  height="100%"
                      class="white--text align-end mx-auto"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      src="@/assets/images/image_13.jpg">
                <v-card-title class="text card-title">Фотогалерея</v-card-title>
              </v-img>
            </v-card>
          </div>
          <div class="video">
            <v-card @click="$router.push({name: 'videos'}).catch(() => {})" class="elevation-5 mr-0" ripple height="100%">
              <v-img  height="100%"
                      class="white--text align-end mx-auto"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      src="@/assets/images/image_8.jpg">
                <v-card-title class="text card-title">Видеогалерея</v-card-title>
              </v-img>
            </v-card>
          </div>
        </div>
        <div class="column-two">
          <div class="contacts">
            <v-card @click="$router.push({name: 'contact'}).catch(() => {})" height="100%" class="elevation-5 mr-0"  ripple max-width="100%">
              <v-img height="100%"
                      class="white--text align-end mx-auto"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      src="@/assets/images/image_6.jpg">
                <v-card-title class="text card-title">Связь со мной</v-card-title>
              </v-img>
            </v-card>
          </div>
          <div class="band">
              <v-card @click="$router.push({name: 'band'}).catch(() => {})" height="100%" class="elevation-5 mr-0" ripple>
                <v-img src="@/assets/images/image_1.jpg"
                       class="white--text align-end mx-auto"
                       height="100%"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                  <v-card-title class="text card-title">Malashkevich Band</v-card-title>
                </v-img>
              </v-card>
          </div>
          <div class="opera">
            <v-card @click="$router.push({name: 'opera'}).catch(() => {})" height="100%" class="elevation-5 mr-0" ripple>
              <v-img src="@/assets/images/image_3.jpg"
                     class="white--text align-end mx-auto"
                     height="100%"
                     gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                <v-card-title class="text card-title">Опера</v-card-title>
              </v-img>
            </v-card>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'Home'
}
</script>

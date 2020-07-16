<template>
  <v-app>
    <navbar-component/>
    <v-content>
      <transition enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
    <footer-component/>
    <photo-modal-component/>
    <video-modal-component/>
    <alert-component/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {

    }
  }
};
</script>

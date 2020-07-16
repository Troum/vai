import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/photos",
    name: "photos",
    component: () => import("../views/Photo.vue")
  },
  {
    path: "/videos",
    name: "videos",
    component: () => import("../views/Video.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/band",
    name: "band",
    component: () => import("../views/Band.vue")
  },
  {
    path: "/opera",
    name: "opera",
    component: () => import("../views/Opera.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

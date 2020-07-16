import Vue from "vue";
import {ValidationObserver, ValidationProvider} from "vee-validate";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import PhotoModalComponent from "../components/PhotoModalComponent";
import VideoModalComponent from "../components/VideoModalComponent";
import AlertComponent from "../components/AlertComponent";


Vue.component('navbar-component', NavbarComponent);
Vue.component('footer-component', FooterComponent);
Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);
Vue.component('photo-modal-component', PhotoModalComponent);
Vue.component('video-modal-component', VideoModalComponent);
Vue.component('alert-component', AlertComponent);

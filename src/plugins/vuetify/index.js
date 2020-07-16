import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from "vuetify/lib/util/colors";
import ru from "vuetify/es5/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { ru },
        current: 'ru'
    },
    theme: {
        themes: {
            light: {
                primary: colors.red.darken4, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    }
});

import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Vue from "vue";

Vue.use(Vuetify);

const vuetify = new Vuetify();

import "./assets/main.css";

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
